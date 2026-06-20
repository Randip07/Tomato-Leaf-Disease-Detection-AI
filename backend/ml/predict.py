import os
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

import tensorflow as tf
import sys
import json
import numpy as np
from keras.models import load_model
from keras.applications.resnet50 import preprocess_input
from keras.preprocessing.image import load_img, img_to_array
from PIL import Image
from severity import calculate_severity

MODEL_PATH = "/Users/ranadipdas/Desktop/Mac/Project_Tomato/tomato/backend/ml/resnet.h5"

CLASS_NAMES = ["Bacterial Spot", 
               "Early Blight", 
               "Late Blight", 
               "Leaf Mold", 
               "Septoria Leaf Spot", 
               "Spider Mites", 
               "Target Spot", 
               "Yellow Leaf Curl Virus", 
               "Mosaic Virus", 
               "Healthy", 
               ]

image_path = os.path.abspath(sys.argv[1])

# =========================
# SPATIAL ATTENTION (NO Lambda)
# =========================
class SpatialAttentionLayer(tf.keras.layers.Layer):
    def __init__(self, **kwargs):
        super(SpatialAttentionLayer, self).__init__(**kwargs)

    def call(self, x):
        avg_pool = tf.reduce_mean(x, axis=-1, keepdims=True)
        max_pool = tf.reduce_max(x, axis=-1, keepdims=True)
        return tf.concat([avg_pool, max_pool], axis=-1)

    def compute_output_shape(self, input_shape):
        return (input_shape[0], input_shape[1], input_shape[2], 2)

    def get_config(self):
        config = super(SpatialAttentionLayer, self).get_config()
        return config


# grad-cam function
def make_gradcam_heatmap(img_array, model, last_conv_layer_name):

    grad_model = tf.keras.models.Model(
        inputs=model.input,
        outputs=[
            model.get_layer(last_conv_layer_name).output,
            model.output
        ]
    )

    with tf.GradientTape() as tape:

        conv_outputs, predictions = grad_model(img_array)

        # Handle models that return list outputs
        if isinstance(predictions, (list, tuple)):
            predictions = predictions[0]

        class_idx = tf.argmax(predictions[0])

        class_channel = predictions[:, class_idx]

    grads = tape.gradient(class_channel, conv_outputs)

    pooled_grads = tf.reduce_mean(
        grads,
        axis=(0, 1, 2)
    )

    conv_outputs = conv_outputs[0]

    heatmap = tf.reduce_sum(
        conv_outputs * pooled_grads,
        axis=-1
    )

    heatmap = tf.maximum(heatmap, 0)

    max_val = tf.reduce_max(heatmap)

    if max_val > 0:
        heatmap = heatmap / max_val

    return heatmap.numpy()



model = load_model(MODEL_PATH, 
                   compile=False,
                #    custom_objects={"SpatialAttentionLayer": SpatialAttentionLayer}
                   )
print("Model loaded successfully", file=sys.stderr)

img_test = Image.open(image_path)
img_np = np.array(img_test)

# Convert and preprocess


img = load_img(image_path, target_size=(224, 224))
img = img_to_array(img)
img = img / 255.0   # <-- IMPORTANT
img = np.expand_dims(img, axis=0)

    

pred = model.predict(img, verbose=0)
index = np.argmax(pred)
confidence = float(pred[0][index])
THRESHOLD = 0.93

heatmap = make_gradcam_heatmap(
    img,
    model,
    "conv5_block3_out" 
)

print("Heatmap shape:", heatmap.shape, file=sys.stderr)

heatmap_uint8 = np.uint8(255 * heatmap)

Image.fromarray(heatmap_uint8).save("gradcam.png")

print("GradCAM saved", file=sys.stderr)



# Resize heatmap from 7x7 to 224x224
heatmap_img = Image.fromarray(np.uint8(255 * heatmap))
heatmap_img = heatmap_img.resize((224, 224))

# Convert heatmap to red channel
heatmap_np = np.array(heatmap_img)

overlay = np.zeros((224, 224, 3), dtype=np.uint8)
overlay[:, :, 0] = heatmap_np  # red

original = Image.open(image_path).convert("RGB")
original = original.resize((224, 224))

original_np = np.array(original)

# Blend
result = (
    0.7 * original_np +
    0.3 * overlay
).astype(np.uint8)

Image.fromarray(result).save("gradcam_overlay.png")

result = calculate_severity(
    leaf_image_path=image_path,
    heatmap_image_path="gradcam.png"
)

print("severity")
print("severity", result["severity_percent"])


# Apply threshold
if confidence < THRESHOLD:
    disease_name = "Unknown"
else:
    disease_name = CLASS_NAMES[index]

output = {
    "disease": disease_name,
    "confidence": round(confidence * 100, 2)
}

# ── stdout gets ONLY the JSON — clean for your backend to parse ───────────────
print(json.dumps(output), flush=True)
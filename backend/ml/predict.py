import os
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

import sys
import json
import numpy as np
from tensorflow.keras.models import load_model
from PIL import Image

MODEL_PATH = "ml/resnet.h5"

CLASS_NAMES = [
    "Bacterial Spot",
    "Early Blight",
    "Late Blight",
    "Leaf Mold",
    "Septoria Leaf Spot",
    "Spider Mites",
    "Target Spot",
    "Yellow Leaf Curl Virus",
    "Mosaic Virus",
    "Healthy"
]

image_path = sys.argv[1]

model = load_model(MODEL_PATH)

img = Image.open(image_path).convert("RGB")
img = img.resize((224, 224))
img = np.array(img) / 255.0
img = np.expand_dims(img, axis=0)

pred = model.predict(img)
index = np.argmax(pred)

output = {
    "disease": CLASS_NAMES[index],
    "confidence": round(float(pred[0][index]) * 100, 2)
}

# print JSON ONLY in last line
sys.stdout.write(json.dumps(output))

import cv2
import numpy as np


def calculate_severity(
    leaf_image_path,
    heatmap_image_path,
    threshold=180,
    save_overlay=False,
    overlay_path="severity_map.jpg"
):
    """
    Calculate disease severity from a Grad-CAM heatmap.

    Args:
        leaf_image_path (str): Path to original leaf image.
        heatmap_image_path (str): Path to Grad-CAM heatmap image.
        threshold (int): Heatmap threshold (0-255).
        save_overlay (bool): Whether to save overlay image.
        overlay_path (str): Output path for overlay image.

    Returns:
        dict: {
            'severity_percent': float,
            'severity_level': str,
            'disease_area': int,
            'leaf_area': int
        }
    """

    # Load images
    leaf = cv2.imread(leaf_image_path)
    heatmap = cv2.imread(heatmap_image_path)

    if leaf is None:
        raise FileNotFoundError(
            f"Leaf image not found: {leaf_image_path}"
        )

    if heatmap is None:
        raise FileNotFoundError(
            f"Heatmap image not found: {heatmap_image_path}"
        )

    # Resize heatmap to match leaf image
    heatmap = cv2.resize(
        heatmap,
        (leaf.shape[1], leaf.shape[0])
    )

    # Convert heatmap to grayscale
    gray_heatmap = cv2.cvtColor(
        heatmap,
        cv2.COLOR_BGR2GRAY
    )

    # Disease mask
    _, disease_mask = cv2.threshold(
        gray_heatmap,
        threshold,
        255,
        cv2.THRESH_BINARY
    )

    # Leaf mask
    leaf_gray = cv2.cvtColor(
        leaf,
        cv2.COLOR_BGR2GRAY
    )

    _, leaf_mask = cv2.threshold(
        leaf_gray,
        20,
        255,
        cv2.THRESH_BINARY
    )

    # Areas
    disease_area = np.sum(disease_mask > 0)
    leaf_area = np.sum(leaf_mask > 0)

    if leaf_area == 0:
        raise ValueError("Leaf area detected as zero.")

    severity = (disease_area / leaf_area) * 100

    # Classification
    if severity < 10:
        level = "Mild"
    elif severity < 30:
        level = "Moderate"
    elif severity < 60:
        level = "Severe"
    else:
        level = "Critical"

    # Optional overlay saving
    if save_overlay:
        overlay = leaf.copy()
        overlay[disease_mask > 0] = [0, 0, 255]

        result = cv2.addWeighted(
            leaf,
            0.7,
            overlay,
            0.3,
            0
        )

        cv2.imwrite(overlay_path, result)

    return {
        "severity_percent": round(severity, 2),
        "severity_level": level,
        "disease_area": int(disease_area),
        "leaf_area": int(leaf_area)
    }
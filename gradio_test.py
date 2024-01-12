from roboflow import Roboflow
import supervision as sv
import cv2
import gradio as gr

rf = Roboflow(api_key="W9VikDr39oibIVgg5UOS")
project = rf.workspace().project("coco-dataset-vdnr1")
model = project.version(11).model

def predict_image(image_path):
    result = model.predict(image_path, confidence=40).json()
    labels = [item["class"] for item in result["predictions"]]
    detections = sv.Detections.from_roboflow(result)

    label_annotator = sv.LabelAnnotator()
    mask_annotator = sv.MaskAnnotator()

    image = cv2.imread(image_path)

    annotated_image = mask_annotator.annotate(scene=image, detections=detections)
    annotated_image = label_annotator.annotate(scene=annotated_image, detections=detections, labels=labels)

    return annotated_image

iface = gr.Interface(
    fn=predict_image,
    inputs=gr.Image(type="filepath", label="Upload Image"),
    outputs=gr.Image(type="numpy", label="Predicted Image"),
)

iface.launch()

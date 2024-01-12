from roboflow import Roboflow
import supervision as sv
import cv2

rf = Roboflow(api_key="W9VikDr39oibIVgg5UOS")
project = rf.workspace().project("coco-dataset-vdnr1")
model = project.version(11).model

result = model.predict("data/luggage.png", confidence=40).json()

labels = [item["class"] for item in result["predictions"]]

detections = sv.Detections.from_roboflow(result)

label_annotator = sv.LabelAnnotator()
mask_annotator = sv.MaskAnnotator()

image = cv2.imread("data/luggage.png")

annotated_image = mask_annotator.annotate(
    scene=image, detections=detections)
annotated_image = label_annotator.annotate(
    scene=annotated_image, detections=detections, labels=labels)

sv.plot_image(image=annotated_image, size=(16, 16))
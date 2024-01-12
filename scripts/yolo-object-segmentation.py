from roboflow import Roboflow

rf = Roboflow(api_key="W9VikDr39oibIVgg5UOS")
project = rf.workspace().project("coco-dataset-vdnr1")
model = project.version(11).model

# infer on a local image
print(model.predict("your_image.jpg").json())

# save an image annotated with your predictions
model.predict("your_image.jpg").save("prediction.jpg")
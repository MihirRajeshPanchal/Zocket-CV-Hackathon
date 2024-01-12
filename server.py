from flask import Flask, request, jsonify, send_file
from roboflow import Roboflow
from flask_cors import CORS
import tempfile
import os

app = Flask(__name__)
CORS(app)

rf = Roboflow(api_key="W9VikDr39oibIVgg5UOS")
project_name = "coco-dataset-vdnr1"
model_version = 11
model = rf.workspace().project(project_name).version(model_version).model

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file part"}), 400

        file = request.files['file']

        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400

        temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".jpg")

        predictions = model.predict(file)
        predictions.save(temp_file.name)

        print("Here")
        return send_file(temp_file.name, as_attachment=True, download_name='prediction.jpg')

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

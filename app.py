import numpy as np
from flask import Flask, request, jsonify, send_file
import pickle
import torch
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin

app = Flask(__name__)
model = torch.load('weight.pth', map_location = "cpu")
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        base_url = request.base_url.rsplit('/', 1)[0]
        #image_url = base_url + '/uploads/' + filename
        image_url = filename
        response = {'image_url': image_url}
        return jsonify(response)

@app.route('/get-image', methods=['GET'])
def get_image():
    filename = request.args.get('filename', default=None)
    filepath = 'uploads/filename.jpg'  # change this to the path of your image file
    if filename is None:
        return 'Error: No filename provided'
    try:
        return send_file(filepath, mimetype='image/jpeg')
    except FileNotFoundError:
        return 'Error: File not found'
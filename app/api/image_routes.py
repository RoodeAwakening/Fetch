from flask import Blueprint, request, jsonify
from flask_login import current_user, login_required
from .s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from google.cloud import vision
from google.cloud.vision_v1 import types
import os

image_routes = Blueprint("images", __name__)


@image_routes.route("", methods=["POST"])
def upload_image():

    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]


    return {"url": url}

@image_routes.route("/dog-detect")
def isValid():
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'dog-instagram-aa-project-a065f808e7b8.json'

    image = types.Image()
    image.source.image_uri = request.args.get('url')

    client = vision.ImageAnnotatorClient()
    response_label = client.label_detection(image=image)

    #Testing
    # for label in response_label.label_annotations:
    #     print({'label': label.description, 'score': label.score})

    for label in response_label.label_annotations:
       if 'Dog' in label.description and label.score > 0.90:
            return jsonify({'dogFound': True})

    return jsonify({'dogFound': False})


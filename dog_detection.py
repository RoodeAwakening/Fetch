import os

from google.cloud import vision
from google.cloud.vision_v1 import types

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'dog-instagram-aa-project-a065f808e7b8.json'


# Instantiates a client
client = vision.ImageAnnotatorClient()


#set this thumbnail as the url
current_image = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235957/Border-Collie-On-White-01.jpg'
image = types.Image()
image.source.image_uri = current_image


# #### FACE DETECTION ######

# response_face = client.face_detection(image=image)

# face_data = []

# for face_detection in response_face.face_annotations:
#     d = {
#         'confidence': face_detection.detection_confidence,
#         'joy': face_detection.joy_likelihood,
#         'sorrow': face_detection.sorrow_likelihood,
#         'surprise': face_detection.surprise_likelihood,
#         'anger': face_detection.anger_likelihood
#     }
#     print(d)


#### LABEL DETECTION ######

response_label = client.label_detection(image=image)

# for label in response_label.label_annotations:
#     print({'label': label.description, 'score': label.score})

for label in response_label.label_annotations:
  if 'Dog' in label.description and label.score > 0.90:
    print(True, label.description)
  # else: print(False)

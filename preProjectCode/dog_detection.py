import os

from google.cloud import vision
from google.cloud.vision_v1 import types

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'dog-instagram-aa-project-a065f808e7b8.json'


# Instantiates a client
client = vision.ImageAnnotatorClient()


#set this thumbnail as the url
# Faces of presidents
# current_image = 'https://i.insider.com/5e417f6edf2f660a5e129e42?width=700'
# Pic of dog
# current_image = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg'
# pic of wolf
current_image='https://fetchinstigramapp.s3.amazonaws.com/e9214de152ad4d4194ec81a178fa0395.jpg'
image = types.Image()
image.source.image_uri = current_image

#### LABEL DETECTION ######

response_label = client.label_detection(image=image)

for label in response_label.label_annotations:
    print({'label': label.description, 'score': label.score})

for label in response_label.label_annotations:
  if 'Dog' in label.description and label.score > 0.90:
    print(True, label.description)
  else: print(False)

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



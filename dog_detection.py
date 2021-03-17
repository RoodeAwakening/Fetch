import os
from config import Configuration
from google.cloud import vision
from google.cloud.vision_v1 import types

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = '.env'


# Instantiates a client
client = vision.ImageAnnotatorClient()



#set this thumbnail as the url
current_image = 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/dog_sleeping-in-bed-with-his-human-1296x728-header.jpg'
image = types.Image()
image.source.image_uri = current_image


#### LABEL DETECTION ######

response_label = client.label_detection(image=image)

# for label in response_label.label_annotations:
#     print({'label': label.description, 'score': label.score})

for label in response_label.label_annotations:
  if 'Dog' in label.description and label.score > 0.90:
    print(True, label.description)

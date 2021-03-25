from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class UploadForm(FlaskForm):
    userId = IntegerField('userId')
    caption = StringField('caption')
    photo = StringField('photo', [DataRequired()])

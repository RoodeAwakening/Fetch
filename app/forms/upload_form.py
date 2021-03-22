from flask_wtf import FlaskForm
from flask_wtf.file import FileField
from wtforms import StringField


class UploadForm(FlaskForm):
    caption = StringField('caption',)
    photo = FileField()

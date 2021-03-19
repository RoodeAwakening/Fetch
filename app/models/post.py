from .db import db
from sqlalchemy import Column, Integer, String, ForeignKey, Date, Text


class Post(db.Model):
  __tablename__='Posts'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer,ForeignKey("user.id"), nullable = False )
  photo = db.Column(db.String, nullable = False)
  caption = db.Column(db.String(140), nullable = True)
# NEED TO ADD UNIQUE

  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "photo": self.photo,
      "caption": self.caption,
    }
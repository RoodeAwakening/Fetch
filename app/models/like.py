from .db import db
from sqlalchemy import Column, Integer, String, ForeignKey, Date, Text


class Like(db.Model):
  __tablename__='likes'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer, nullable = False)
  postId = db.Column(db.Integer, nullable = False)

  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "postId": self.postId,
    }

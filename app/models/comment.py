from .db import db
from sqlalchemy import Column, Integer, String, ForeignKey, Date, Text


class Comment(db.Model):
  __tablename__='comments'

  id = db.Column(db.Integer, primary_key = True)
  postId = db.Column(db.Integer,ForeignKey("post.id"),  nullable = False)
  userId = db.Column(db.Integer,ForeignKey("user.id"), nullable = False )
  content = db.Column(db.String(140), nullable = True)

  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "postId": self.postId,
      "content": self.content
    }

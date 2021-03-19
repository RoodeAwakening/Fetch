from .db import db

class Follower(db.Model):
  __tablename__='followers'

  id = db.Column(db.Integer, primary_key = True)
  followerId = db.Column(db.Integer, nullable = False, ForeignKey("follower.id"))
  userId = db.Column(db.Integer, nullable = False, ForeignKey("user.id"))
# NEED TO ADD UNIQUE

  def to_dict(self):
    return {
      "id": self.id,
      "followerId": self.followerId,
      "userId": self.userId,
    }
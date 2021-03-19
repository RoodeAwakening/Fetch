from .db import db



class Follower(db.Model):
  __tablename__='followers'

  id = db.Column(db.Integer, primary_key = True)
  followerId = db.Column(db.Integer,db.ForeignKey("follower.id"), nullable = False )
  userId = db.Column(db.Integer, db.ForeignKey("user.id"), nullable = False )
# NEED TO ADD UNIQUE

  def to_dict(self):
    return {
      "id": self.id,
      "followerId": self.followerId,
      "userId": self.userId,
    }
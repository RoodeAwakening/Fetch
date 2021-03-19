from .db import db



class Post(db.Model):
  __tablename__='posts'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer,db.ForeignKey("users.id"), nullable = False )
  photo = db.Column(db.String, nullable = False)
  caption = db.Column(db.String(140), nullable = True)
  #RELATIONSHIPS
  comments = db.relationship("comment", backref="posts")
  likes = db.relationship("like", backref="posts")
  tags_posts = db.relationship("tag_post", backref="posts")
  # NEED TO ADD UNIQUE


  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "photo": self.photo,
      "caption": self.caption,
    }
from .db import db



class Tag_Post(db.Model):
  __tablename__='tags_posts'

  id = db.Column(db.Integer, primary_key = True)
  tagId = db.Column(db.Integer,db.ForeignKey("tag.id"), nullable = False )
  postId = db.Column(db.Integer,db.ForeignKey("post.id"), nullable = False)
# NEED TO ADD UNIQUE

  def to_dict(self):
    return {
      "id": self.id,
      "tagId": self.tagid,
      "postId": self.postId,
    }

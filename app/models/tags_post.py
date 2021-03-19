from .db import db

class Tag_Post(db.Model):
  __tablename__='tags_posts'

  id = db.Column(db.Integer, primary_key = True)
  tagId = db.Column(db.Integer, nullable = False, ForeignKey("tag.id"))
  postId = db.Column(db.Integer, nullable = False, ForeignKey("post.id"))

# NEED TO ADD UNIQUE

  def to_dict(self):
    return {
      "id": self.id,
      "tagId": self.tagid,
      "postId": self.postId,
    }

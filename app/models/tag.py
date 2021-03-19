from .db import db

class Tag(db.Model):
  __tablename__='tags'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(50), nullable = False)
  #RELATIONSHIPS
  tags_posts = db.relationship("Tag_Post", backref="tags")


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
    
    }

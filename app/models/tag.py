from .db import db
from sqlalchemy import Column, Integer, String, ForeignKey, Date, Text

class Tag(db.Model):
  __tablename__='tags'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(50), nullable = False)



  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
    
    }

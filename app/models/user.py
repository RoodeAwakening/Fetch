from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  userName = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashedPassword = db.Column(db.String(255), nullable = False)
  profilePhoto = db.Column(db.String, nullable = False)
  #relationships
  comments = db.relationship("Comment", backref="users")
  followers = db.relationship("Follower", backref="users")
  posts = db.relationship("Post", backref="users")
  likes = db.relationship("Like", backref="users")
####NEED TO MAKE RELATIONSHIP 1 - 1 BETWEEN USERID AND FOLLOWER USER ID #######




  @property
  def password(self):
    return self.hashedPassword


  @password.setter
  def password(self, password):
    self.hashedPassword = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.hashedPassword, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.userName,
      "email": self.email,
      "profilePhoto": self.profilePhoto
    }

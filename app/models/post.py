from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    photo = db.Column(db.String, nullable=False)
    caption = db.Column(db.String(140), nullable=True)
    # RELATIONSHIPS
    comments = db.relationship("Comment", backref="posts")
    likes = db.relationship("Like", backref="posts")
    tags_posts = db.relationship("Tag_Post", backref="posts")
    # NEED TO ADD UNIQUE

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "photo": self.photo,
            "caption": self.caption,
        }

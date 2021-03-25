from .db import db

followers = db.Table(
    "followers",
    db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False),
    db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
)
# NEED TO ADD UNIQUE


def to_dict(self):
    return {
        "id": self.id,
        "followerId": self.followerId,
        "userId": self.userId,
    }

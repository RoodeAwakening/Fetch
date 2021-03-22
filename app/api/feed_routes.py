from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Post, User

feed_routes = Blueprint('feed', __name__)


@feed_routes.route('/')
def feed():
    posts = []
    for post in Post.query.all():
        posts.append(post.to_dict())
    return jsonify(posts)

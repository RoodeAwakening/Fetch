from flask import Blueprint, jsonify
from flask_login import login_required, current_user

from app.models import Post, User
from app.forms import UploadForm

post_routes = Blueprint('posts', __name__)

# Create a new post


@post_routes.route('/', methods=['GET', 'POST'])
# @login_required()
def post():
    form = UploadForm()
    if form.validate_on_submit():
        post = Post(
            userId=1,
            photo=form.file.data,
            caption=form.data['caption']
        )
        return post.to_dict()
    posts = []
    for post in Post.query.all():
        posts.append(post.to_dict())
    return jsonify(posts)
# Get a post by id


@post_routes.route('/<int:id>')
# @login_required
def getPostById(id):
    post = Post.query.get(id)
    return post.to_dict()

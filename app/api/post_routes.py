from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user

from app.models import Post, User, Comment, db
from app.forms import UploadForm

post_routes = Blueprint('posts', __name__)


# Get posts
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


@post_routes.route('/<int:id>', methods=['GET', 'DELETE'])
# @login_required
def postById(id):
    if request.method == 'GET':  # Get a data for a given post
        post = Post.query.get(id)
        return post.to_dict()
    elif request.method == 'DELETE':  # Delete a given post
        Post.query.get(id).delete()
        db.session.commit()
        return 'Comment deleted.'


@post_routes.route('/<int:id>/comments', methods=['GET', 'POST'])
# @login_required
def commentsByPostId(id):
    if request.method == 'GET':  # Get comments for given post
        comments = []
        for comment in Comment.query.filter(Comment.postId == id).all():
            comments.append(comment.to_dict())
        return jsonify(comments)
    elif request.method == 'POST':  # Create new comment for given post
        content = request.json['content']
        # userId should come from currentUser
        # userId = current_user.id???
        comment = Comment(postId=id, userId=2, content=content)
        db.session.add(comment)
        db.session.commit()
        return jsonify(comment.to_dict())


@post_routes.route()

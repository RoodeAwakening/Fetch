from flask import Blueprint, json, jsonify, request
from flask_login import login_required, current_user

from app.models import db, Post, User, Like, Comment, Tag_Post
from app.forms import UploadForm

post_routes = Blueprint('posts', __name__)


# Get posts
# Create a new post
@post_routes.route('/', methods=['GET', 'POST'])
# @login_required()
def post():
    print("BACKEND")
    m = request.method
    if m == 'GET':  # Get a list of posts
        posts = db.session.query(Post, Comment).join(Comment).all()
        for post in posts:
            print(post['Post'].to_dict())
            print(post['Comment'].to_dict(), )
        return 'GET POSTS'
    elif m == 'POST':  # Create a new post
        form = UploadForm()
        if form.validate_on_submit():
            post = Post(
                userId=1,
                photo=form.file.data,
                caption=form.data['caption']
            )
            db.session.add(post)
            db.session.commit()
        return post.to_dict() if post else 'Invalid operation'


@ post_routes.route('/<int:id>', methods=['GET', 'DELETE'])
# @login_required
def postById(id):
    m = request.method
    if m == 'GET':  # Get a data for a given post
        post = Post.query.get(id)
        return post.to_dict()
    elif m == 'DELETE':  # Delete a given post
        success = Post.query.filter(Post.id == id).delete()
        db.session.commit()
        return jsonify('Successfully deleted.' if success else 'Invalid operation.')


@ post_routes.route('/<int:id>/likes', methods=['GET', 'POST', 'DELETE'])
# @login_required
def likesByPostId(id):
    m = request.method
    if m == 'GET':  # Get number of likes for a given post
        likes = []
        for like in Like.query.filter(Like.postId == id).all():
            likes.append(like.to_dict())
        res = {
            'count': len(likes),
            'likes': likes
        }
        return jsonify(res)
    elif m == 'POST':  # Create a new like for the given post
        # userId should come from currentUser
        # userId = current_user.id???
        like = Like(postId=id, userId=2)
        db.session.add(like)
        db.session.commit()
        return jsonify(like.to_dict())
    elif m == 'DELETE':  # Delete a like for the given post
        db.session.commit()
        return jsonify()


@ post_routes.route('/<int:id>/comments', methods=['GET', 'POST'])
# @login_required
def commentsByPostId(id):
    m = request.method
    if m == 'GET':  # Get comments for given post
        comments = []
        for comment in Comment.query.filter(Comment.postId == id).all():
            comments.append(comment.to_dict())
        return jsonify(comments)
    elif m == 'POST':  # Create new comment for given post
        content = request.json['content']
        # userId should come from currentUser
        # userId = current_user.id???
        comment = Comment(postId=id, userId=2, content=content)
        db.session.add(comment)
        db.session.commit()
        return jsonify(comment.to_dict())


@ post_routes.route('/<int:id>/tags', methods=['GET', 'POST', 'DELETE'])
# @login_required
def tagsByPostId(id):
    m = request.method
    if m == 'GET':  # Get the tags for a given post
        tags = []
        for tag in Tag_Post.query.filter(Tag_Post.postId == id).all():
            tags.append(tag.to_dict())
        res = {
            'length': len(tags),
            'tags': tags
        }
        return jsonify(res)
    elif m == 'POST':  # Create a new tag for the given post
        return 'POST TAG'
    elif m == 'DELETE':  # Delete a tag from the given post
        return 'DELETE TAG'

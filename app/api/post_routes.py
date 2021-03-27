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
    m = request.method
    if m == 'GET':  # Get a list of posts
        posts = []
        postQuery = db.session.query(Post, User).join(User, User.id == Post.userId).all()
        for post in postQuery:
            likeQuery = db.session.query(Like, User).join(User, User.id == Like.userId).filter(Like.postId == post[0].id).all()
            commentQuery = db.session.query(Comment, User).join(User, User.id == Comment.userId).filter(Comment.postId == post[0].id).all()

            likes = []
            comments = []

            for like in likeQuery:
                likes.append({
                    "likes": like[0].to_dict(),
                    "liked_by": like[1].to_dict(),
                })

            for comment in commentQuery:
                comments.append({
                    "comment": comment[0].to_dict(),
                    "comment_by": comment[1].to_dict(),
                })

            posts.append({
                'post': post[0].to_dict(),
                'user': post[1].to_dict(),
                'likeData': likes,
                'commentData': comments,
            })
        return jsonify(posts)
    elif m == 'POST':  # Create a new post
        form = UploadForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        post = ''
        if form.validate_on_submit():
            post = Post(
                userId=1,
                photo=form.data['photo'],
                caption=form.data['caption']
            )
            db.session.add(post)
            db.session.commit()
        return {"post": post.to_dict()} if post else 'Invalid operation'


@ post_routes.route('/<int:id>', methods=['GET', 'DELETE'])
# @login_required
def postById(id):
    m = request.method
    if m == 'GET':  # Get a data for a given post

        postQuery = db.session.query(Post, User).join(User, User.id == id).filter(Post.id == id).first()
        likeQuery = db.session.query(Like, User).join(User, User.id == Like.userId).filter(Like.postId == id).all()
        commentQuery = db.session.query(Comment, User).join(User, User.id == Comment.userId).filter(Comment.postId == id).all()

        likes = []
        comments = []
        for like in likeQuery:
            likes.append({
                "likes": like[0].to_dict(),
                "liked_by": like[1].to_dict(),
            })

        for comment in commentQuery:
            comments.append({
                "comment": comment[0].to_dict(),
                "comment_by": comment[1].to_dict(),
            })

        post = {
            'post': postQuery[0].to_dict(),
            'user': postQuery[1].to_dict(),
            'likeData': likes,
            'commentData': comments,
        }
        return jsonify(post)

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
            user = User.query.get(like.userId)

            likes.append({
                "like":like.to_dict(),
                "user":user.to_dict()
            })
        res = {
            'count': len(likes),
            'likes': likes

        }
        return jsonify(res)
    elif m == 'POST':  # Create a new like for the given post
        # userId should come from currentUser
        # userId = current_user.id???
        print(current_user.to_dict())
        like = Like(postId=id, userId=current_user.id)
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
        print('----------',request.json)
        content = request.json['commentInput']
        # userId should come from currentUser
        userId = current_user.id
        comment = Comment(postId=id, userId=userId, content=content)
        db.session.add(comment)
        db.session.commit()
        return jsonify({"comment":comment.to_dict(), "comment_by": current_user.to_dict()})


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

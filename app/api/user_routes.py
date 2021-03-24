from flask import Blueprint, jsonify, request
from flask_login import login_required, login_user

from app.models import db, User, Post, followers
from app.forms import SignUpForm



user_routes = Blueprint('users', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@user_routes.route('/', methods=['GET','POST'])
# @login_required
def users():
    m = request.method
    if m == 'GET':
        users = User.query.all()
        return {"users": [user.to_dict() for user in users]}
    elif m == 'POST':
        form = SignUpForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            user = User(
                userName=form.data['userName'],
                email=form.data['email'],
                password=form.data['password'],
                profilePhoto=form.data['profilePhoto'],
            )
            db.session.add(user)
            db.session.commit()
            login_user(user)
            return jsonify({'user': user.to_dict()})
        return {'errors': validation_errors_to_error_messages(form.errors)}


@user_routes.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
# @login_required
def user(id):
    m = request.method
    if m == 'GET':  # Get data for a given user
        user = User.query.get(id)
        return user.to_dict()
    elif m == 'PATCH': # Update the user info
        #query the user
        user = User.query.get(id)
        #look at the request coming in
        userName = request.json['userName']
        email = request.json['email']
        if userName:
            user.userName = userName
        if email:
            user.email = email
        db.session.commit()
        return jsonify(user.to_dict() if user else 'Invalid operation.')
    elif m == 'DELETE':
        success = User.query.filter(User.id == id).delete()
        db.session.commit()
        return jsonify('Successfully deleted.' if success else 'Invalid operation.')




@user_routes.route('/<int:id>/follows', methods=['GET', 'POST'])
def followsByUserId(id):
    m = request.method
    if m == 'GET':
        follows = []
        followersLst = []
        for follow in db.session.query(followers).all():
            print('---------',follow.followerId	)
            if follow.followerId == id:
                follows.append({
                'followerId':follow.followerId,
                'userId':follow.userId
                })
            elif follow.userId == id:
                followersLst.append({
                'followerId':follow.followerId,
                'userId':follow.userId
                })

        return jsonify({
            "follows":follows,
            "followers":followersLst
        })
        
    elif m == 'POST':
        return 'POST FOLLOWer BY USER'

@user_routes.route('/<int:id>/posts', methods=['GET'])
def userPostsById(id):
    userPosts = []
    query = Post.query.filter(Post.userId == id).all()
    for post in query:
        userPosts.append(post.to_dict())
    return jsonify(userPosts)


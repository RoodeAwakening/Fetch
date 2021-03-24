from flask import Blueprint, jsonify, request
from flask_login import login_required, login_user

from app.models import db, User
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
    elif m == 'PATCH':
        return 'PATCH USER'
    elif m == 'DELETE':
        return 'DELETE USER'


@user_routes.route('/<int:id>/follows')
def followsByUserId(id):
    m = request.method
    if m == 'GET':
        return 'GET FOLLOWS BY USER'
    elif m == 'POST':
        return 'POST FOLLOW BY USER'

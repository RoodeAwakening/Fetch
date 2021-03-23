from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


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

from flask import Blueprint, jsonify
from flask_login import login_required

from app.models import Comment

comment_routes = Blueprint('comments',  __name__)


@comment_routes.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
# @login_required
def comment():

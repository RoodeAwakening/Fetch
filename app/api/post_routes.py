from flask import Blueprint, jsonify
from flask_login import login_required, current_user

from app.models import Post, User
from app.forms import UploadForm

post_routes = Blueprint('post', __name__)


@post_routes.route('/', methods=['POST'])
# @login_required()
def post():
    form = UploadForm()

    post = Post(
        userId=1,
        photo=form.file.data,
        caption=form.data['caption']
    )
    return post.to_dict()

    return jsonify(current_user.to_dict())

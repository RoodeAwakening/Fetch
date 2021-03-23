from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import db, Comment

comment_routes = Blueprint('comments',  __name__)


@comment_routes.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
# @login_required
def comment(id):
    m = request.method
    if m == 'GET':  # Get data for a given comment
        comment = Comment.query.get(id)
        return jsonify(comment.to_dict() if comment else 'Invalid operation.')
    elif m == 'PATCH':  # Update the content of a given comment
        comment = Comment.query.get(id)
        if comment:
            content = request.json['content']
            comment.content = content
            db.session.commit()
        return jsonify(comment.to_dict() if comment else 'Invalid operation.')

    elif m == 'DELETE':  # Delete a given comment
        success = Comment.query.filter(Comment.id == id).delete()
        db.session.commit()
        return jsonify('Successfully deleted.' if success else 'Invalid operation.')

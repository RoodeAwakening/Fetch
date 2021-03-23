from flask import Blueprint, jsonify, request
from flask_login import login_required


from app.models import db, Tag

tag_routes = Blueprint('tags', __name__)


@tag_routes.route('/', methods=['GET', 'POST'])
# @login_required
def tags():
    m = request.method
    if m == 'GET':  # Get a list of all tags
        tags = []
        for tag in Tag.query.all():
            tags.append(tag.to_dict())
        return jsonify(tags)
    elif m == 'POST':  # Create a new tag
        name = request.json['name']
        tag = Tag(name=name)
        db.session.add(tag)
        db.session.commit()
        return jsonify(tag.to_dict())


@tag_routes.route('/<int:id>', methods=['GET', 'DELETE'])
# @login_required
def tagById(id):
    m = request.method
    if m == 'GET':  # Get data for a given tag
        tag = Tag.query.get(id)
        return jsonify(tag.to_dict())
    elif m == 'DELETE':  # Delete a given tag
        success = Tag.query.filter(Tag.id == id).delete()
        db.session.commit()
        return jsonify('Successfully deleted.' if success else 'Invalid operation.')

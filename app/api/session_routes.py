from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required, login_user, logout_user

from app.models import db, User
from app.forms import LoginForm, SignUpForm

session_routes = Blueprint('session', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@session_routes.route('/', methods=['GET', 'POST', 'DELETE'])
def authenticate():
    m = request.method
    if m == 'GET':
        if current_user.is_authenticated:
            return jsonify({'user': current_user.to_dict()})
        return {'errors': ['Unauthorized']}, 401
    elif m == 'POST':
        form = LoginForm()
        # Get the csrf_token from the request cookie and put it into the
        # form manually to validate_on_submit can be used
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            # Add the user to the session, we are logged in!
            user = User.query.filter(User.email == form.data['email']).first()
            login_user(user)
            return jsonify({'user': user.to_dict()})
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    elif m == 'DELETE':
        logout_user()
        return {'message': 'User logged out'}


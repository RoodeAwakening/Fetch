from app.models import db, followers


def seed_followers():

    # Tom is user 2

    db.session.execute(followers.insert([
        {'followerId': 1, 'userId': 2},
        {'followerId': 3, 'userId': 2},
        {'followerId': 1, 'userId': 3},
        {'followerId': 3, 'userId': 1},
    ]))


def undo_followers():
    db.session.execute('TRUNCATE followers;')
    db.session.commit()

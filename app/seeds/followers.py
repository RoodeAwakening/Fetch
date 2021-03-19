from app.models import db, Follower


def seed_followers():

    # Everyone follows Tom
    tom1 = Follower(followerId=1, userId=2)
    tom2 = Follower(followerId=3, userId=2)
    # Example Follow
    demo1 = Follower(followerId=1, userId=3)
    demo2 = Follower(followerId=3, userId=1)

    db.session.add([tom1, tom2, demo1, demo2])

    db.session.commit()


def undo_followers():
    db.session.execute('TRUNCATE followers;')
    db.session.commit()

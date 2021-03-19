from app.models import db, Like


def seed_likes():

    # Everyone follows Tom
    like1 = Like(userId=1, postId=1)
    like2 = Like(userId=1, postId=2)
    like3 = Like(userId=1, postId=3)
    like4 = Like(userId=2, postId=1)
    like5 = Like(userId=2, postId=2)
    like6 = Like(userId=2, postId=3)
    like7 = Like(userId=3, postId=1)
    like8 = Like(userId=3, postId=2)
    like9 = Like(userId=3, postId=3)


    db.session.add([like1,like2,like3,like4,like5,like6,like7,like8,like9])

    db.session.commit()


def undo_likes():
    db.session.execute('TRUNCATE likes;')
    db.session.commit()

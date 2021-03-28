from app.models import db, Like, Post, User
import random

def seed_likes():

    users = User.query.all()
    posts = Post.query.all()
    c = 0
    for user in users:
        for post in posts:
            if random.randrange(0, 100) > 60:
                like = Like(postId=post.id, userId=user.id)
                db.session.add(like)
                c += 1
                print('----- Count: %s%% -- New Like: %s' % ((c, like.to_dict())))
    db.session.commit()

def undo_likes():
    db.session.execute('TRUNCATE likes;')
    db.session.commit()

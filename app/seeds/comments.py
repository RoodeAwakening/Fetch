from app.models import db, Comment, Post, User
import random

commentList = [
    "pups.pups.pups.pups.pups.pups.",
    "Nice dog!!!!!!!.",
    "zoomies......",
    "DERP",
    "My name is TOM",
    "10/10!!",
    "Cute dog!!!",
    "DOGGGO!!!",
    "I have the same breed!",
    "You should post more often!!",
    "What a handsome boy",
    "What is their name??",
    "Where's your other puppy?",
    "Where did you get that collar ?",
    "Does this dodge get along well with other dodges?",
    "the best dodge",
    "cutest pupper in the world ",
    "My date for the night is looking so handsome",
    "Date night with this cutie",
    "Any recommendations for a dog park that this cutie can poop in",
    "She's cute, but her poops are not."
]

def seed_comments():
    users = User.query.all()
    posts = Post.query.all()
    c = 0
    for user in users:
        for post in posts:
            if random.randrange(0, 100) > 85:
                comment = Comment(postId=post.id, userId=user.id, content=commentList[random.randrange(0, len(commentList))])
                db.session.add(comment)
                c += 1
                print('----- Count: %s%% -- New Comment: %s' % ((c, comment.to_dict())))
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()

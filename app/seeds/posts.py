from app.models import db, Post, User
import urllib.request as request
import json, random

def seed_posts():
    captionList = [
        "",
        "Thanks fur the memories.",
        "Dogs are not our whole life, but they make our lives whole.",
        "My best friend has a fur and a tail.",
        "pupperz for the win",
        "look at this dog!",
        "rate my dog !!",
        "bark bark!"
    ]

    i = 1
    quantity = 100
    while i <= quantity:
        url=''
        with request.urlopen('https://dog.ceo/api/breeds/image/random') as res:
            url = json.loads(res.read().decode('utf-8'))['message']
        post = Post(
            userId=random.randrange(1, (len(User.query.all())+1)),
            photo=url,
            caption=captionList[random.randrange(0, len(captionList))]
        )
        db.session.add(post)
        i+=1
        print('----- Progress: %s%% -- New Post: %s' % ((str(round(i/quantity*100, 2))), post.to_dict()))

    db.session.commit()

def undo_posts():
    db.session.execute('TRUNCATE posts;')
    db.session.commit()

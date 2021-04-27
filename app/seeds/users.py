from werkzeug.security import generate_password_hash
from app.models import db, User
import urllib.request as request
import json, random

animatedAvatars = [
    'https://fetchinstigramapp.s3.amazonaws.com/5c8f52cbc9304be0b459ed2166dd850f.png',	#Monkey
    'https://fetchinstigramapp.s3.amazonaws.com/456ecb50024342edb50f492c1c550d63.png',	#Squirrel
    'https://fetchinstigramapp.s3.amazonaws.com/80b7dd08072f4e6b9e67f53835bf523a.png',	#Racoon
    'https://fetchinstigramapp.s3.amazonaws.com/8611ec8d920c4c1abfac03eb1d161060.png',	#Hamster
    'https://fetchinstigramapp.s3.amazonaws.com/fd098aa9bc724ed1b3ca55cfe078395c.png',	#Fox
    'https://fetchinstigramapp.s3.amazonaws.com/96d50f97dfaa4141b2e8bb727aef9a0c.png',	#Bunny
    'https://fetchinstigramapp.s3.amazonaws.com/0804d8116f724f1f9e64e80ac241a78d.png',	#Squirrel2
    'https://fetchinstigramapp.s3.amazonaws.com/85beea8b464547609c99f0ff144b7611.png',	#Pig
    'https://fetchinstigramapp.s3.amazonaws.com/406ebad7057e454fbe5e1f81d7f69e50.png',	#Reindeer
    'https://fetchinstigramapp.s3.amazonaws.com/eda89cf93ce64d0a950f5c001e9a0969.png',	#Bear
    'https://fetchinstigramapp.s3.amazonaws.com/e47013783164448694367ae482c6da1f.png',	#Cat
    'https://fetchinstigramapp.s3.amazonaws.com/62cebdcd8e604196a4bb8a012efc83bd.png',	#Panda
    'https://fetchinstigramapp.s3.amazonaws.com/6c0899452aad460691219cc571cc4bb3.png',	#Zebra
    'https://fetchinstigramapp.s3.amazonaws.com/4c49cb4f01b344218d10ef8b50f8b4f7.png',	#Donkey
    'https://fetchinstigramapp.s3.amazonaws.com/58d52d8a4bea4e628d80014b5839f5e1.png',	#Elephant
    'https://fetchinstigramapp.s3.amazonaws.com/5626ee4fac244a7e80df7695c8630c6a.png',	#Bunny2
]

realAvatars = [
    'https://images-ext-2.discordapp.net/external/MdkDlsB8M0QZXVEitj5-T4y_-rfPZ5dWftIaAeuSSZk/%3Ffit%3D640%2C427/https/www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg', #pretty lady
    'https://images-ext-1.discordapp.net/external/LGMdxIAZByVGPYoln9LNNpON8Hb4zZoaZpqJ5E6q2UY/https/pbs.twimg.com/profile_images/1237550450/mstom.jpg', #ms tom
    'https://preview.redd.it/6onq25y0sh311.jpg?width=960&crop=smart&auto=webp&s=3b3c10c65e7eb801eaa7d8ac4438469b7d9fe9a8' #derek
]


def getPhoto():
    url = ''
    c = random.randrange(0, 100)
    if c > 65:
        url = animatedAvatars[random.randrange(0, len(animatedAvatars))]
    elif c > 50:
        url = realAvatars[random.randrange(0, len(realAvatars))]
    else:
        with request.urlopen("https://dog.ceo/api/breeds/image/random") as res:
            url = json.loads(res.read().decode('utf-8'))['message']
    return url


def seed_users():
    quantity = 50
    demo = User(userName='demo', email='demo@aa.io', password='password', profilePhoto=getPhoto())
    db.session.add(demo)

    with request.urlopen("https://fakerapi.it/api/v1/users?_quantity={0}".format(quantity)) as res:
        users = json.loads(res.read().decode('utf-8'))['data']
        i = 0
        for user in users:
            password = generate_password_hash(user['password'], method='pbkdf2:sha256', salt_length=10)
            user = User(userName=user['username'], email=user['email'], hashedPassword=password, profilePhoto=getPhoto())
            db.session.add(user)
            i += 1
            print('----- Progress: %s%% -- New User: %s' % ((str(round(i/quantity*100, 2))), user.to_dict()))

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()

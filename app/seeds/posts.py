from app.models import db, Post
import urllib.request as request

# animatedAvatars = [
#     'https://fetchinstigramapp.s3.amazonaws.com/5c8f52cbc9304be0b459ed2166dd850f.png',	#Monkey
#     'https://fetchinstigramapp.s3.amazonaws.com/456ecb50024342edb50f492c1c550d63.png',	#Squirrel
#     'https://fetchinstigramapp.s3.amazonaws.com/80b7dd08072f4e6b9e67f53835bf523a.png',	#Racoon
#     'https://fetchinstigramapp.s3.amazonaws.com/8611ec8d920c4c1abfac03eb1d161060.png',	#Hamster
#     'https://fetchinstigramapp.s3.amazonaws.com/fd098aa9bc724ed1b3ca55cfe078395c.png',	#Fox
#     'https://fetchinstigramapp.s3.amazonaws.com/96d50f97dfaa4141b2e8bb727aef9a0c.png',	#Bunny
#     'https://fetchinstigramapp.s3.amazonaws.com/0804d8116f724f1f9e64e80ac241a78d.png',	#Squirrel2
#     'https://fetchinstigramapp.s3.amazonaws.com/85beea8b464547609c99f0ff144b7611.png',	#Pig
#     'https://fetchinstigramapp.s3.amazonaws.com/406ebad7057e454fbe5e1f81d7f69e50.png',	#Reindeer
#     'https://fetchinstigramapp.s3.amazonaws.com/eda89cf93ce64d0a950f5c001e9a0969.png',	#Bear
#     'https://fetchinstigramapp.s3.amazonaws.com/e47013783164448694367ae482c6da1f.png',	#Cat
#     'https://fetchinstigramapp.s3.amazonaws.com/62cebdcd8e604196a4bb8a012efc83bd.png',	#Panda
#     'https://fetchinstigramapp.s3.amazonaws.com/6c0899452aad460691219cc571cc4bb3.png',	#Zebra
#     'https://fetchinstigramapp.s3.amazonaws.com/4c49cb4f01b344218d10ef8b50f8b4f7.png',	#Donkey
#     'https://fetchinstigramapp.s3.amazonaws.com/58d52d8a4bea4e628d80014b5839f5e1.png',	#Elephant
#     'https://fetchinstigramapp.s3.amazonaws.com/5626ee4fac244a7e80df7695c8630c6a.png',	#Bunny2
# ]


def seed_posts():
    post1 = Post(userId=1, photo='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg', caption="Thanks fur the memories.")
    post2 = Post(userId=2, photo='https://images-na.ssl-images-amazon.com/images/I/614L0OOYSeL._SX331_BO1,204,203,200_.jpg',
                 caption="Dogs are not our whole life, but they make our lives whole.")
    post3 = Post(userId=3, photo='https://static.wixstatic.com/media/7ee089_2fc14eca5116493a9da03d999b81aa6d~mv2.jpg',
                 caption="My best friend has a fur and a tail.")

    with request.urlopen('https://dog.ceo/api/breeds/image/random') as response:
        html = response.read()
        print(html)


    posts = [post1, post2, post3]
    for post in posts:
        db.session.add(post)

    db.session.commit()

def undo_posts():
    db.session.execute('TRUNCATE posts;')
    db.session.commit()

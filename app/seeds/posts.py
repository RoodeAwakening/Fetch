from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():

    post1 = Post(userId= 1, photo='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg', caption = "Thanks fur the memories.")
    post2 = Post(userId= 2, photo='https://images-na.ssl-images-amazon.com/images/I/614L0OOYSeL._SX331_BO1,204,203,200_.jpg', caption = "Dogs are not our whole life, but they make our lives whole.")
    post3 = Post(userId= 3, photo='https://static.wixstatic.com/media/7ee089_2fc14eca5116493a9da03d999b81aa6d~mv2.jpg', caption = "My best friend has a fur and a tail.")




    db.session.add([post1, post2, post3])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts;')
    db.session.commit()

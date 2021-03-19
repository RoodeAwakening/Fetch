from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():

    comment1 = Comment(postId= 1, userId= 1, content = "pups.pups.pups.pups.pups.pups.")
    comment2 = Comment(postId= 2, userId= 2, content = "Nice dog!!!!!!!.")
    comment3 = Comment(postId= 3, userId= 3, content = "zoomies......")
    comment4 = Comment(postId= 3, userId= 1, content = "DERP")
    comment5 = Comment(postId= 3, userId= 2, content = "My name is TOM")




    db.session.add([comment1, comment2, comment3])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()

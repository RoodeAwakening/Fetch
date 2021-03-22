from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    password = generate_password_hash(
        "password", method='pbkdf2:sha256', salt_length=8)

    user1 = User(userName='Demo', email='demo@aa.io', hashedPassword=password,
                 profilePhoto="https://images-ext-2.discordapp.net/external/MdkDlsB8M0QZXVEitj5-T4y_-rfPZ5dWftIaAeuSSZk/%3Ffit%3D640%2C427/https/www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg")
    user2 = User(userName='Tom', email='tom@aa.io', hashedPassword=password,
                 profilePhoto="https://images-ext-1.discordapp.net/external/LGMdxIAZByVGPYoln9LNNpON8Hb4zZoaZpqJ5E6q2UY/https/pbs.twimg.com/profile_images/1237550450/mstom.jpg")
    user3 = User(userName='Derek', email='derek@aa.io', hashedPassword=password,
                 profilePhoto="https://preview.redd.it/6onq25y0sh311.jpg?width=960&crop=smart&auto=webp&s=3b3c10c65e7eb801eaa7d8ac4438469b7d9fe9a8")

    users = [user1, user2, user3]
    for user in users:
        db.session.add(user)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()

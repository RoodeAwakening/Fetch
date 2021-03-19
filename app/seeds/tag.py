from app.models import db, Tag

# Adds a demo user, you can add other users here if you want


def seed_tags():

    demoTag1 = Tag(name='tag')
    demoTag2 = Tag(name='example')
    demoTag3 = Tag(name='epic')
    demoTag4 = Tag(name='totesmcgotes')

    db.session.add([demoTag1, demoTag2, demoTag3, demoTag4])

    db.session.commit()


def undo_tags():
    db.session.execute('TRUNCATE tags;')
    db.session.commit()

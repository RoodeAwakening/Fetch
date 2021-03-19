from app.models import db, Tag_Post


def seed_tags_posts():

    # Everyone follows Tom
    tag_post1 = Tag_Post(tagId=1, postId=1)
    tag_post2 = Tag_Post(tagId=2, postId=1)
    tag_post3 = Tag_Post(tagId=3, postId=1)
    tag_post4 = Tag_Post(tagId=4, postId=2)
    tag_post5 = Tag_Post(tagId=3, postId=2)
    tag_post6 = Tag_Post(tagId=2, postId=2)
    tag_post7 = Tag_Post(tagId=1, postId=3)
    tag_post8 = Tag_Post(tagId=2, postId=3)
    tag_post9 = Tag_Post(tagId=3, postId=3)


    db.session.add([tag_post1, tag_post2, tag_post3, tag_post4, tag_post5, tag_post6, tag_post7, tag_post8, tag_post9])

    db.session.commit()


def undo_tags_posts():
    db.session.execute('TRUNCATE tags_posts;')
    db.session.commit()

from flask.cli import AppGroup
from .users import seed_users, undo_users
from .comments import seed_comments, undo_comments
from .followers import seed_followers, undo_followers
from .likes import seed_likes, undo_likes
from .posts import seed_posts, undo_posts
from .tags import seed_tags, undo_tags
from .tags_posts import seed_tags_posts, undo_tags_posts

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_comments()
    seed_followers()
    seed_likes()
    seed_posts()
    seed_tags()
    seed_tags_posts()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo all')
def undo():
    undo_users()
    undo_comments()
    undo_followers()
    undo_likes()
    undo_posts()
    undo_tags()
    undo_tags_posts()
    # Add other undo functions here

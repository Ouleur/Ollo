from flask import Blueprint

formation = Blueprint('formation', __name__)

@formation.route('/')
def index():
    return "interface Liste de formation"

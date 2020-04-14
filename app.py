from flask import Flask
from conference import conference

app = Flask(__name__)
app.register_blueprint(conference)

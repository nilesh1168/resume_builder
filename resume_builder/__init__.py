from flask import Flask
from resume_builder.config import Configuration

app = Flask(__name__)
app.config.from_object(Configuration)

from resume_builder import routes,models

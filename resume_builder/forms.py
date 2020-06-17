from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField

class simpleForm(FlaskForm):
        feild1 = StringField()
        field2 = StringField()
        button = SubmitField()


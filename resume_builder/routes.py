from resume_builder import app
from flask import render_template
from resume_builder.forms import simpleForm

@app.route("/",methods=['GET','POST'])
def home():
        return render_template("home.html",form = simpleForm())


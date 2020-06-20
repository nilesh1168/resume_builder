from resume_builder import app
from flask import render_template

@app.route("/",methods=['GET','POST'])
def home():
        return render_template("home.html")

@app.route("/dashboard",methods=['GET'])
def dashboard():
        return "Dashboard"

@app.route("/login",methods=['GET'])
def login():
        return render_template('login.html')

@app.route('/register',methods=['GET'])
def register():
        return render_template('register.html')

@app.route("/contactUs",methods=['GET','POST'])
def contact():
        return render_template('contactus.html')

@app.route("/features",methods=['GET'])
def under_const():
        return render_template('under_construction.html')


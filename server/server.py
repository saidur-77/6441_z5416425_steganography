from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import os 
from steg import steg_write, steg_read
from werkzeug.utils import secure_filename

# This file helps attach the backend flask-python framework to the frontend 
# Reference: https://www.youtube.com/watch?v=7LNl2JlZKHA&t=77s

# app instance
app = Flask(__name__)
# Enable CORS so that the backend and frontend (which run on different domains) can share information
CORS(app)

# This is were the images are temporarily saved
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Making sure that this folder path exists before we go further
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Initial test route 
@app.route("/api/home", methods=['GET'])
def return_home():
  return jsonify({
    'message': "Hello world!"
  })

# This route handles the image upload from the user and embeds the given message in it
@app.route("/upload", methods=["POST"])
def upload_image():
  # Check that the request we received has the image and the message
  if 'image' not in request.files or 'message' not in request.form:
    return "Missing file or message", 400 

  # Extract out the image and the message
  file = request.files['image']
  message = request.form['message']
  
  # Check if the file is valid before we do any operations on it
  if file.filename == '':
    return "No file selected", 400
  
  # Save the image temporarily in the upload folder to pass this into the steg_write function later
  temp_image_name = 'temp_image.png'
  image_path = os.path.join(app.config['UPLOAD_FOLDER'], temp_image_name)
  file.save(image_path)
  
  output_image_path = 'processed_image.png'
  
  try:
    # setg_write in steg.py will embed the message into the message and save the new image as the defined output path
    steg_write(image_path, message, output_path=output_image_path)
  except Exception as e:
    # Unless it cannot in which case we will just error out
    return str(e), 500
  
  # Send the processed image to the user to download
  return send_file(output_image_path, mimetype="image/png", as_attachment=True, download_name="stegano_image.png")

# This route handles reading a hidden message from an image that was uploaded by the user
@app.route("/read_image", methods=["POST"])
def read_image():
  # Check that the request we received has the image and the message length
  if 'image' not in request.files or 'message_length' not in request.form:
    return "Missing file or message_length", 400 

  # Extract out the image and the message length
  file = request.files['image']
  message_length = int(request.form['message_length'])
  
  # Check if the file is valid before we do any operations on it
  if file.filename == '':
    return "No file selected", 400
  
  # This is a security feature I have added: secure_filename removes unsafe characters, 
  # standardises the filename and prevents directory traversal
  # This protects us from users that may be trying to upload malicious files
  filename = secure_filename(file.filename)
  
  # Temporarily save the file into the upload folder
  image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
  file.save(image_path)
  
  try:
    # steg_read in steg.py will extract out the hidden message given the message length from an image
    message = steg_read(image_path, message_length)
    return jsonify({"message": f"Hidden message: '{message}'"})
  except Exception as e:
    # Unless it cannot in which case we will just error out
    return str(e), 500
  
if __name__ == "__main__":
  app.run(debug=True, port=8080)
  

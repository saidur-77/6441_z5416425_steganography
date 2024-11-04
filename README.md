# 6441_stegano

This application has not been deployed yet so we will just use the development environment

## Running the backend

1. cd into the server folder
2. run `source venv/bin/activate`
3. then `python3 server.py`
4. once you are done `deactivate`

## Uploading image and hiding message through backend

Assuming that you have a directory called "images" with an image named "image.png":
curl -X POST http://127.0.0.1:8080/upload \
 -F "image=@images/image.png" \
-F "message=This is a hidden message"

## Uploading image and reading message through backend

Assuming that you have an image called "processed_image.png" in your current directory:
curl -X POST -F "image=@processed_image.png" -F "message_length=10" http://127.0.0.1:8080/read_image

## Running the frontend

1. cd into the client folder
2. run `npm start`

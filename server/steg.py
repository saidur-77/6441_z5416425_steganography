
from PIL import Image
import numpy

def steg_write(image_path, message, output_path='edited_image.png', spacing=10):
  # Given the scope, we are only ever dealing with PNG files 
  # This also ensures safety since we don't want unsafe files on the server 
  if not image_path.lower().endswith('.png'):
    raise ValueError('The input image must be a PNG file')
  
  # First we convert the image into a NumPy array 
  img = Image.open(image_path)
  pixel_array = numpy.array(img)
  
  # Take the message and convert each character to its ASCII value
  message_values = [ord(char) for char in message]
  
  # Note the shape of the image array which include its height, width, etc
  image_shape = pixel_array.shape
  
  # Now we flatten this image array into a 1D list of pixels
  pixel_list = pixel_array.flatten().tolist()
  
  # If there are not enough pixels to cover the whole message we stop here 
  if len(message)*spacing > len(pixel_list):
    raise ValueError('The message length and spacing is larger than the number of pixels in the image')
  
  # Otherwise we can start finding the pixel indicies where we are going to embed the message 
  idx_list = [idx * spacing for idx in range(len(message_values))]
  
  # These pixels are now replaced with the ASCII value of the message characters 
  for idx,char in zip(idx_list, message_values):
    pixel_list[idx] = char 
  
  # Reshape the modified list back to the array shape we originally noted 
  edited_array = numpy.array(pixel_list).reshape(image_shape).astype(numpy.uint8)
  
  # Create a new image from the modified array and save it
  edited_img = Image.fromarray(edited_array)
  edited_img.save(output_path)
  
def steg_read(image_path, message_length, spacing=10):
  # Given the scope, we are only ever dealing with PNG files 
  # This also ensures safety since we don't want unsafe files on the server 
  if not image_path.lower().endswith('.png'):
    raise ValueError('The input image must be a PNG file')
  
  # First we convert the image into a NumPy array 
  img = Image.open(image_path)
  pixel_array = numpy.array(img)
  
  # Now we flatten this image array into a 1D list of pixels
  pixel_list = pixel_array.flatten().tolist()
  
  # We can then calculate the pixel indices where we hid the message 
  # Note that the spacing is generally defaulted to 10 
  idx_list = [idx * spacing for idx in range(message_length)]
  
  # Extract ASCII values from specified pixels and convert them to characters
  hidden_values = [pixel_list[idx] for idx in idx_list]
  chars = [chr(value) for value in hidden_values]
  
  # Join the characters and finally return the message
  return ''.join(chars)

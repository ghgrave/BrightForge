# Start with a small, secure Nginx image as the base
# This image is ideal for serving static websites (HTML/CSS/JS)
FROM nginx:alpine

# Copy all frontend files (HTML, CSS, JS, etc.)
# into the directory Nginx uses to serve web content
#
# This means when Nginx runs, it will automatically
# serve files from /usr/share/nginx/html
#
# Example: index.html will be accessible at http://localhost
COPY . /usr/share/nginx/html

# Expose port 80 so Docker knows this container
# will serve HTTP traffic on the default web port
#
# You’ll map this to your local machine when running the container
EXPOSE 80

# Nginx will automatically start when the container runs
# You don't need to add a CMD line — the base image handles it
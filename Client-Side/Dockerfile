# Use Ubuntu as the base OS for the container.
FROM ubuntu:latest

MAINTAINER "Patrick Gatiri" "patrickgatiri@gmail.com"

# Create the working directory.
RUN mkdir /Source\ Code
WORKDIR /Source\ Code

# Update the container's software repository.
RUN apt-get update; apt-get upgrade -y

# Install NodeJS and Node's Package Manager (NPM).
RUN apt-get install nodejs -y; apt-get install npm -y

# Install the required modules.
COPY package*.json ./
RUN npm install

# Copy the client side application code into the root directory of the container.
COPY . .

# Port mapping in order to access the listening port on the container.
EXPOSE 1234

# Run the application.
CMD ["node", "app.js"]

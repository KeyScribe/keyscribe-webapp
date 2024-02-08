# Node image 
FROM node:21-alpine3.18

# Set working directory in the container
WORKDIR /app

# Copy the application over, ignoring ./node_modules
COPY . . 

# Install dependencies
RUN npm install

# Expose port 8000 (the port the app is running on), so that other docker containers can access it
EXPOSE 8000

# Start the app
CMD ["npm", "start"]

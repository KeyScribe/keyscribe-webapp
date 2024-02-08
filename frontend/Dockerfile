FROM node:21-alpine3.18 as build

WORKDIR /app

COPY . .

RUN npm install

# Run the application
CMD ["npm", "start"]
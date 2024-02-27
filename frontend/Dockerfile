FROM node:21-alpine3.18 as build

RUN apk --no-cache add curl

WORKDIR /app

COPY . .

RUN npm install

# Run the application
CMD ["npm", "start"]
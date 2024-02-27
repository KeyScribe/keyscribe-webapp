# Multi-stage build step
FROM node:21 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

# linting (optional)

FROM base as linter

WORKDIR /usr/src/app

RUN npm run lint

# For building

FROM linter as build

WORKDIR /usr/src/app

RUN npm run build

# Production image
FROM node:21-alpine3.18

# Set working directory in the container
WORKDIR /usr/src/app

# Node runs without root processes
RUN chown node:node ./

# Switch to user node
USER node

# Copy the package.json over, ignoring ./node_modules
COPY --chown=node:node package*.json ./

RUN npm install --omit=dev

# Copy everything over from the build stage
COPY --chown=node:node --from=build /usr/src/app/dist ./
# Copy keys over from original 
COPY --chown=node:node --from=base /usr/src/app/keys ./keys

# Expose port 8000 (the port the app is running on), so that other docker containers can access it
EXPOSE 8000

# Start the app
CMD ["node", "./index.js"]
# syntax=docker/dockerfile:1

### BUILDING STAGE ###
# Use a NodeJs image for building (lightweight version)
FROM node:21.7.3-alpine AS build-stage
# Set the working directory inside the container
WORKDIR /app
# Copy package.json & package-lock.json
COPY package*.json .
# Install project dependencies
RUN npm ci
# Copy the rest of the app source code into the container
COPY . .
# Build the app (outputs to /app/build)
RUN npm run build

### SERVING STAGE ###
# Use a Nginx image for serving (lightweight version)
FROM nginx:1.29.0-alpine AS serve-stage
# Set up static nginx files from app build
COPY --from=build-stage /app/build /usr/share/nginx/html
# Set up custom nginx default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
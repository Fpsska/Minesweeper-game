# syntax=docker/dockerfile:1

### BUILDING STAGE ###
# Use a nodeJs image for building (lightweight version)
FROM node:21.7.3-alpine AS build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./
# Install project dependencies (exclude devDependencies)
RUN npm ci || npm install --omit=dev

# Copy the rest of the app source code into the container
COPY . .

# Build the app (outputs to /app/build)
RUN npm run build:docker

### SERVING STAGE ###
# Use a nginx image for serving (lightweight version)
FROM nginx:1.29.0-alpine AS serve-stage

# Set up static nginx files from app build
COPY --from=build-stage /app/build /usr/share/nginx/html

# Set up custom default.conf for nginx
COPY --from=build-stage /app/docker/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
# Set up custom template for nginx
COPY --from=build-stage /app/docker/usr/share/nginx/templates/config.js.template /usr/share/nginx/templates/

# Set up custom sh-script for nginx
COPY --from=build-stage /app/docker/docker-entrypoint.d/40-app-config.sh /docker-entrypoint.d/40-app-config.sh
# Make sh-script executable (with rules)
RUN chmod +x /docker-entrypoint.d/40-app-config.sh
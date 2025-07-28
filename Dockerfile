

# Use a NodeJs image for building (lightweight version)
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json .

# Install project dependencies
RUN npm ci || npm install

# Copy the rest of the app source code into the container
COPY . .

# Build the app (outputs to /app/build)
RUN npm run build

# Expose the port app runs on
EXPOSE 3000

# Define the command to run app
CMD sh -c 'ENTRYPOINT=$(find build/static/js -name "main.*.js" | head -n 1); \
    [ -z "$ENTRYPOINT" ] && echo "Error: entry js-file not found!" && exit 1; \
    node "$ENTRYPOINT"'
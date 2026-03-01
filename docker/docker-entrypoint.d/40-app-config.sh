#!/usr/bin/env sh  
# For cross-platform compatibility

echo "40-app-config.sh started 🔄"

# Log received vars (only APP_ prefix)
echo "___Received configuration vars___"
env | grep "^APP_"

# Set up default values
: "${APP_PROFILE:=default}"
: "${APP_HIDE_FEATURES:=true}"
: "${APP_VERSION:=0}"

# Log output vars
echo "___Output configuration vars___"
env | grep "^APP_"

# Share vars for envsubst
export APP_PROFILE APP_HIDE_FEATURES APP_VERSION

# Overwrite output config.js
envsubst < /usr/share/nginx/templates/config.js.template > /usr/share/nginx/html/config.js

echo "40-app-config.sh finished 🏁"
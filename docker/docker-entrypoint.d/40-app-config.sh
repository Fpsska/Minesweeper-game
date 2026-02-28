#!/usr/bin/env sh  
# For cross-platform compatibility

echo "40-app-config.sh started ✅"

# Log only app configuration vars
echo "App configuration vars:"
env | grep "^APP_"

echo "40-app-config.sh finished ✅"
# /home/two-asus/Documents/AI-Center/Dokcer/ultralytics

#!/bin/bash

# Build the Docker image (if not already built)
# docker build -t my_web_app .

# Allow access to the X11 server
xhost +local:root

# Run the Docker container and start an interactive terminal session with volume sharing
docker run -it -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix -v /home/aic/Documents/computing/web_app:/app -e XAUTHORITY=$XAUTHORITY -v $XAUTHORITY:$XAUTHORITY --net=host my_web_app

# Revoke access to the X11 server after the container exits (optional)
xhost -local:root

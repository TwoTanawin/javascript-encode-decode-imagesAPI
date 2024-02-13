# Use the Ubuntu 20.04 base image
FROM ubuntu:20.04

# Set the environment variables to avoid tzdata configuration prompt during installation
ENV DEBIAN_FRONTEND=noninteractive

# Install NVIDIA drivers (exact steps depend on your specific driver version and requirements)

# Install CUDA toolkit and related libraries
RUN apt-get update && apt-get install -y --no-install-recommends \
    wget \
    gnupg \
    software-properties-common

# Set the PATH environment variable to include CUDA binaries
ENV PATH=/usr/local/cuda/bin:${PATH}
ENV LD_LIBRARY_PATH=/usr/local/cuda/lib64:${LD_LIBRARY_PATH}

# Install necessary packages for your application (e.g., Python, OpenCV, etc.)
RUN apt-get update && apt-get install -y \
    python3 \
    python3-dev \
    python3-pip \
    python3-tk \
    libopencv-dev \
    python3-opencv \
    libfreetype6-dev \
    libpng-dev \
    git  # Install Git

# Install Node.js
RUN apt-get install -y nodejs npm

# Install Node.js packages using npm
WORKDIR /app
COPY package*.json ./
RUN npm install express axios multer mysql node-mysql-promise line-notify-nodejs

# Install Python packages using pip
RUN python3 -m pip install --no-cache-dir \
    matplotlib \
    numpy \
    opencv-python

# Set the default Python version
RUN ln -s /usr/bin/python3 /usr/bin/python

# Clear package cache to reduce image size
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Start a Bash shell by default when the container runs
CMD ["/bin/bash"]


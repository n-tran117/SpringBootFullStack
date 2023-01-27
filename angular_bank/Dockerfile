###############
### STAGE 1: Compile and Build angular codebase
###############

# Use official node image as the base image
FROM node:alpine as node

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

# Install dependencies
RUN npm install
RUN npm install -g @angular/cli --force

# Build application (--configuration [environement to use] : will use the environments.[environement to use].ts file of angular project)
RUN ng build --configuration default

###############
### STAGE 2: Serve app with nginx ###
###############

# Use official nginx image as the base image
FROM nginx:alpine

# Copy nginx.conf to required location
#COPY nginx.conf /etc/nginx/nginx.conf

# Copy executables in html folder
COPY --from=node /app/dist/angular_bank /usr/share/nginx/html


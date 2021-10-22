# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /heart-health-web-ui

# add `/heart-health-web-ui/node_modules/.bin` to $PATH
ENV PATH /heart-health-web-ui/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
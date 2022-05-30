FROM node:12

ENV PORT 8080

# Create app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Installing dependencies
COPY package*.json /usr/src/server/
RUN yarn install

# Copying source files
COPY . /usr/src/server

# Building app
RUN yarn build
EXPOSE 8080

# Running the app
CMD "yarn" "dev"
FROM node:lts-alpine3.13
LABEL Description="This image is used with the kubernetes course (services)" Vendor="Cognitic" Version="1.1"
WORKDIR /usr/app
ADD package.json /usr/app/package.json 
COPY . .
RUN npm install 
RUN npm run build
EXPOSE 3000
CMD [ "node", "server.js" ]
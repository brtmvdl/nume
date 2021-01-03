FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install --global @angular/cli

RUN npm install

CMD [ "npm", "start", "--", "--host=0.0.0.0", "--disableHostCheck", "--port=80" ]

EXPOSE 80

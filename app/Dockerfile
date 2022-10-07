FROM node:15

WORKDIR /usr/src/app

COPY . /usr/src/app

COPY script_app.sh /usr/local/bin
RUN chmod +x /usr/local/bin/script_app.sh

RUN npm install

RUN apt-get update && apt-get install -y wget 

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

# ENTRYPOINT [ "node", "src/index.js" ]
# CMD [ "node", "src/index.js" ]

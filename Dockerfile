FROM node:carbon
WORKDIR /usr
RUN npm install -g forever json-server 
RUN npm install --save express
COPY server.js /usr/
COPY start.sh /usr/
EXPOSE 4200
COPY dist.zip /usr/
RUN unzip dist.zip
CMD sh /usr/start.sh
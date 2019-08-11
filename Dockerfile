FROM node:carbon
WORKDIR /usr
RUN npm install -g forever json-server 
RUN npm install --save express
COPY server.js /usr/
COPY start.sh /usr/
COPY dist.zip /usr/
RUN unzip dist.zip
RUN rm dist.zip
EXPOSE 4200 3000
CMD sh /usr/start.sh
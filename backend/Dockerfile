From node
WORKDIR /app
RUN npm install -g json-server
COPY ./bookstore.json .
EXPOSE 3000
CMD ["json-server", "--watch", "bookstore.json", "--host", "0.0.0.0"]
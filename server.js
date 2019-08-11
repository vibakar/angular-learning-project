var express = require('express');

var app = express();
var port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/bookstore-app'));

app.all('*', (req, res)=>{
	res.status(200).sendFile(__dirname + '/dist/bookstore-app/index.html');
});

app.listen(port, ()=>{
	console.log(`App is running on port ${port}`);
});
var express = require('express'),
	PORT = process.env.PORT || 3000;
	app = express();


app.get('/',function (req,res) {
	// body...
	res.send('index');
})

app.get('/goods',function (req,res) {
	// body...
	res.send('list');
})

app.listen(PORT,function (argument) {
	console.log('server is ready');
})
var express = require('express'),
	PORT = process.env.PORT || 3000;
	app = express(),
	path = require('path'),
	mongoose = require('mongoose');

app.set('view engine','jade');
app.set('views','views')
app.use(express.static(path.join(__dirname,'libs')));
var dbURI = 'mongodb://localhost/goods';
mongoose.connect(dbURI);
app.get('/',function (req,res) {
	// body...
	res.render('index');
})

app.get('/goods',function (req,res) {
	// body...
	res.send('list');
})

app.listen(PORT,function (argument) {
	console.log('server is ready');
})
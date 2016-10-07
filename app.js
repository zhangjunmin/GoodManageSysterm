var express = require('express'),
	PORT = process.env.PORT || 3000;
	app = express(),
	path = require('path'),
	moment = require('moment'),
	mongoose = require('mongoose'),
	Cargo = require('./model/cargo'),
	parser = require('body-parser');

app.set('view engine','jade');
app.set('views','views')
app.use(express.static(path.join(__dirname,'libs')));
app.use(parser.urlencoded({extended: true}));
var dbURI = 'mongodb://localhost/goods';
mongoose.connect(dbURI);
app.get('/',function (req,res) {
	Cargo.fetch(null,function(err,cargos){
		if (err) {
			console.log(err+'111')
		}else{
			res.render('index',{cargos:cargos});
		}
	})
})

app.get('/goods',function (req,res) {
	// body...
	res.send('list');
})

app.post('/goods',function(req,res){
	var cargo = new Cargo(req.body);
	cargo.save(function(err,car){
		if (err) {
			console.log(err);
		}else{
			console.log(car);
		}
	})
})
app.listen(PORT,function (argument) {
	console.log('server is ready');
})
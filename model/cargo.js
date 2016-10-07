/*
**model
*/
var mongoose = require('mongoose');
var cargoSchema = require('../schema/cargo');
var cargo = mongoose.model( 'cargo', cargoSchema );
module.exports = cargo;
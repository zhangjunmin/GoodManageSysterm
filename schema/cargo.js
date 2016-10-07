/*
 **cargo schema
 */
var mongoose = require('mongoose');
var cargoSchema = new mongoose.Schema({
	user: String, //定义一个属性name，类型为String
	category: String,
	number: Number,
	amount: Number,
	createDate: Date,
	updateDate: Date,
	status: { type: Boolean, default:true }
});
//save之前
cargoSchema.pre('save', function(next) {
	if (this.isNew) {
		this.updateDate = this.createDate = Date.now();
	} else {
		this.updateDate = Date.now();
	}
	next();
});
//statics
cargoSchema.statics = {
	fetch: function(opts, cb) {
		var opts = opts?opts:{};
		var _u=opts.user?{user: opts.user}:null;
		var page = opts.page ||1;
		this.find(_u,null,{skip: (page-1)*5, limit: 5, sort:{'updateDate':-1}})
		.exec(cb);
		/*.where('updateDate').gt(25).lt()
		.skip((page-1)*5)
		.limit(5)
		.desc('updateDate').exec(cb)*/
	},
	findById: function(id, cb) {
		this.findOne({
			_id: id
		})
		.exec(cb)
	}
}
module.exports = cargoSchema;
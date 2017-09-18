const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student Schema & model
const StudentSchema = new Schema({
	name: {
		type: String,
		require: [true, 'Name field is require']
	},
	studentid: {
		type: Number,
		require: [true, 'Student ID field is require']
	},
	sex: {
		type: Boolean,
		default: false
	},
	homeland: {
		type: String
	},
});

module.exports = mongoose.model('student', StudentSchema);
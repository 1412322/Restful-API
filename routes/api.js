const express = require('express');
const router = express.Router();
const Student = require('../models/student.js');

// get a list of students from the database
router.get('/', function(req, res, next){
	Student.find(function(err,docs){
		var productChunks = [];
		var chunkSize = 3;
		for (var i=0; i< docs.length; i+= chunkSize){
			productChunks.push(docs.slice(i, i+ chunkSize));
		}
		res.json(docs);
	});
});

router.get('/:id', function (req,res,next) {
	Student.findById(req.params.id,function(err,docs){
		res.json(docs);
	});	  
});

// add a new students to the database
router.post('/', function(req, res, next){
	Student.create(req.body).then(function(student) {
		res.send(student)
	}).catch(next);
});

// update a students in the database
router.put('/:id', function(req, res, next){
	Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(student) {
		Student.findOne({_id: req.params.id}).then(function(student) {
			res.send(student);
		});
	});
});

// delete a students from database
router.delete('/:id', function(req, res, next){
	Student.findByIdAndRemove({_id: req.params.id}).then(function(student) {
		res.send(student);
	});
});

module.exports = router;
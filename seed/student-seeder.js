var Student = require('../models/student');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/studentmanagement');

var students = [
	new Student({
		name: 'Lương Nhật Minh',
		studentid: 1412322,
		sex: false,
		homeland: 'Phú Yên'
	}),
	new Student({
		name: 'Lương Nhật Minh',
		studentid: 1412321,
		sex: false,
		homeland: 'TP.HCM'
	}),
	new Student({
		name: 'Lê Quốc Minh',
		studentid: 1412320,
		sex: false,
		homeland: 'Trà Vinh'
	}),
	new Student({
		name: 'Lưu Quang Minh',
		studentid: 1412323,
		sex: false,
		homeland: 'Lâm Đồng'
	}),
	new Student({
		name: 'Trương Ngọc Nghĩa',
		studentid: 1412346,
		sex: false,
		homeland: 'Long An'
	}),
	new Student({
		name: 'Nguyễn Thị Bảo Ngọc',
		studentid: 1412350,
		sex: true,
		homeland: 'Quảng Trị'
	}),
	new Student({
		name: 'Đinh Lê Trà My',
		studentid: 1412330,
		sex: true,
		homeland: 'Bình Định'
	}),
	new Student({
		name: 'Trần Thị Như Liễu',
		studentid: 1412285,
		sex: true,
		homeland: 'Bình Định'
	})
];

var done = 0;
for (var i = 0; i < students.length; i++) {
	students[i].save(function(err, result) {
		done++;
		if (done === students.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}

module.exports = students;
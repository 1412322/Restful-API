import React from 'react';
import { Link } from 'react-router-dom';

class StudentList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { students: [] }
	}

	componentDidMount() {
		this.getStudentList();
	}

	getStudentList() {
		var that = this;
		// $.ajax({
		// 	url: 'http://localhost:3000/api/students',
		// 	dataType: 'json',
		// 	success: function (data) {
		// 		that.setState({ students: data });
		// 	},
		// 	error: function (xhr, status, err) {
		// 		alert('Error! ' + err);
		// 	}
		// });
		$.get('http://localhost:3000/api/students', function(data){
			that.setState({students: data});
		});
	}

	removeStudent(id) {
		var that = this;
		$.ajax({
			url: "http://localhost:3000/api/students/" + id,
			type: "DELETE",
			success: function (result) {
				that.getStudentList();
				alert('Deleted successfully!');
			},
			error: function (err) {
				alert('Error! ' + err);
			}
		});
	}

	render() {
		var that = this;
		var students = this.state.students;
		students = students.map(function (student, index) {
			return (
				<tr key={index}>
					<td>{student._id}</td>
					<td>{student.studentid}</td>
					<td>{student.name}</td>
					<td>{student.sex ? 'Female' : 'Male'}</td>
					<td><Link to={'/studentinfo/' + student._id}><i className="d-flex justify-content-center fa fa-edit"></i></Link></td>
					<td><a onClick={() => that.removeStudent(student._id)}><i className="d-flex justify-content-center fa fa-remove"></i></a></td>
				</tr>
			)
		});

		return (
			<div className="menu-content">
				<div className="d-flex justify-content-end">
					<span><Link to='/'>Home</Link> > Student Management > Students List</span>
				</div>
				<h1>Students List</h1>

				<div className="table-responsive">
					<table className="table admin-product-content" id="listtable">
						<thead>
							<tr>
								<th>ID</th>
								<th>Student's ID</th>
								<th>Name</th>
								<th>Sex</th>
								<th>Edit</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							{students}
						</tbody>
					</table>
				</div>
				<div className="admin-product-nav d-flex justify-content-center">
					<div className="pagination-nav">

					</div>
				</div>
			</div>
		);
	}
}

module.exports = StudentList;
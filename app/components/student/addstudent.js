import React from 'react';
import { Link } from 'react-router-dom';

class AddStudent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '', studentid: '', sex: '', homeland: '' };

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const id = target.id;
		this.setState({
			[id]: value
		});
	}
	addStudent() {
		var sex;
		if ($("#sex :selected").text() == 'Male') {
			sex = false;
		} else {
			sex = true;
		}
		var data = {
			"studentid": $("#studentid").val(),
			"name": $("#name").val(),
			"sex": Boolean(sex),
			"homeland": $("#homeland").val()
		};
		$.ajax({
			url: "http://localhost:3000/api/students",
			type: "POST",
			contentType: "application/json",
			dataType: 'json',
			data: JSON.stringify(data),
			success: function (result) {
				location.href = '/';
				alert('Added successfully!');
			},
			error: function (err) {
				alert('Error! ' + err);
			}
		});
	}

	render() {
		return (
			<div className="menu-content">
				<div className="d-flex justify-content-end">
					<span><Link to="/">Home</Link> > Student Management > Adding Student</span>
				</div>
				<h1>Adding student</h1>
				<form className="form-user">
					Student's ID
			<input type="number" id="studentid" className="form-control" placeholder="Enter student's ID" value={this.state.studentid} onChange={this.handleInputChange} required />
					Name
			<input id="name" className="form-control" placeholder="Enter student's name" value={this.state.name} onChange={this.handleInputChange} required />
					Sex
			<select className="form-control" value={this.state.sex} onChange={this.handleInputChange} id="sex">
						<option>Male</option>
						<option>Female</option>
					</select>
					Homeland
			<input id="homeland" className="form-control" placeholder="Enter student's homeland" value={this.state.homeland} onChange={this.handleInputChange} />
					<div className="d-flex justify-content-end">
						<button className="btn btn-primary btn-round" onClick={this.addStudent}><i className="fa-fw fa fa-pencil"></i> Add student</button>
					</div>
				</form>
			</div>
		);
	}
}

module.exports = AddStudent;
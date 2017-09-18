import React from 'react';
import { Link } from 'react-router-dom';

class AddStudent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ID: '', name: '', studentid: '', sex: '', homeland: '' };

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

	componentDidMount() {
		var that = this;
		var url = window.location.pathname;
		var id = url.substring(url.lastIndexOf('/') + 1);
		$.ajax({
			type: "GET",
			url: "http://localhost:3000/api/students/" + id,
			success: function (data) {
				var sex;
				if (data.sex) {
					sex = "Female";
				} else {
					sex = "Male"
				}
				that.setState({ ID: data._id, name: data.name, studentid: data.studentid, sex: sex, homeland: data.homeland });;
			},
			error: function (xhr, status, err) {
				alert('Error! ' + err);
			}
		});
	}

	removeStudent(id) {
		$.ajax({
			url: "http://localhost:3000/api/students/" + id,
			type: "DELETE",
			success: function (result) {
				location.href = '/';
				alert('Deleted successfully!');

			},
			error: function (err) {
				alert(err);
			}
		});
	}

	editStudent(id) {
		console.log('abc');
		var sex;
		if ($("#sex :selected").text() == 'Male') {
			sex = false;
		} else {
			sex = true;
		}
		var data = {
			"studentid": $("#studentid").val(),
			"name": $("#name").val(),
			"sex": sex,
			"homeland": $("#homeland").val()
		};
		if (data.studentid.length > 0 && data.name.length > 0 && data.homeland.length > 0) {
			$.ajax({
				url: "http://localhost:3000/api/students/" + id,
				type: "PUT",
				contentType: "application/json",
				dataType: 'json',
				data: JSON.stringify(data),
				success: function (result) {
					console.log($("#ID").val());
					location.href = '/';
					alert('Edited successfully!');
				},
				error: function (err) {
					console.log(data);
					alert('Error! ' + err);
				}
			});
		}
		else {
			alert('Please enter full information!');
		}
	}

	render() {
		var studentinfo = this.state.studentinfo;
		return (
			<div className="menu-content">
				<div className="d-flex justify-content-end">
					<span><Link to="/">Home</Link> > Student Management > <Link to="/">Students List</Link> > Student's Information</span>
				</div>
				<h1>Student's information</h1>
				<form className="form-user">
					ID
			<input id="ID" className="form-control" value={this.state.ID} onChange={this.handleInputChange} readOnly />
					Student's ID
			<input type="number" id="studentid" className="form-control" placeholder="Enter student's ID" value={this.state.studentid} onChange={this.handleInputChange} required />
					Name
			<input id="name" className="form-control" placeholder="Enter student's name" value={this.state.name} onChange={this.handleInputChange} required />
					Sex

			<select className="form-control" id="sex" value={this.state.sex} onChange={this.handleInputChange}>
						<option>Male</option>
						<option>Female</option>
					</select>
					Homeland
			<input id="homeland" className="form-control" placeholder="Enter student's homeland" value={this.state.homeland} onChange={this.handleInputChange} />
					<div className="d-flex justify-content-end">
						<button className="btn btn-primary btn-delete" onClick={() => this.removeStudent(this.state.ID)}><i className="fa-fw fa fa-remove"></i> Remove</button>
						<button className="btn btn-primary btn-round" onClick={() => this.editStudent(this.state.ID)}><i className="fa-fw fa fa-pencil"></i> Save</button>
					</div>
				</form>
			</div>
		);
	}
}

module.exports = AddStudent;
const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('Header');
const Menu = require('Menu');
const StudentList = require('../student/studentlist.js');
const AddStudent = require('../student/addstudent.js');
const EditStudent = require('../student/editstudent.js');
import { Switch, Route } from 'react-router-dom';

class Content extends React.Component {
	render() {
		return (
			<content>
				<div className="container animated wow fadeInDown">
					<div className="row">
						<div className="col-md-3">
							<Menu />
						</div>
						<div className="col-md-9">
							<Switch>
								<Route exact path='/' component={StudentList} />
								<Route path='/addstudent' component={AddStudent} />
								<Route path='/studentinfo/:id' component={EditStudent} />
							</Switch>
						</div>
					</div>
				</div>
			</content>
		)
	}
}

module.exports = Content;
import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	render() {
		return (
			<div id="side-categories-menu">
				<div className="avatar d-flex justify-content-center">
					<img src="/images/defaultavatar.png" alt="Admin Avatar"></img>
				</div>
				<div className="text-center">
					Admin
			</div>
				<div id="side-search-form">
					<div className="input-group">
						<input type="text" className="form-control input-lg" placeholder="Search..." />
						<span className="input-group-btn">
							<button className="btn btn-info btn-lg" type="button">
								<i className="fa-fw fa fa-search"></i>
							</button>
						</span>
					</div>
				</div>
				<div id="menu-accordion" role="tablist" aria-multiselectable="true">
					<div className="card">
						<div className="card-header" role="tab" id="menu-heading2">
							<a data-toggle="collapse" data-parent="#menu-accordion" href="#menu-collapse2" aria-expanded="false" aria-controls="menu-collapse2"><i className="fa-fw fa fa-dashboard"></i> Student Management<i className="fa-fw fa fa-caret-down"></i></a>
						</div>
						<div id="menu-collapse2" className="collapse" role="tabpanel" aria-labelledby="menu-heading2">
							<ul className="list-group">
								<li className="list-group-item"><Link to='/'>Students List</Link></li>
								<li className="list-group-item"><Link to='/addstudent'>Adding Student</Link></li>
							</ul>
						</div>
					</div>
					<div className="card">
						<div className="card-header" role="tab" id="menu-heading4">
							<a data-parent="#menu-accordion" href="#" aria-expanded="false" aria-controls=""><i className="fa-fw fa fa-sign-out"></i> Sign-out</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Footer;
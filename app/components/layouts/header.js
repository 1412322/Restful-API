import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="top-header d-flex align-items-end justify-content-between">
					<div className="animated wow fadeInDown">
						<h1>studentmanagement</h1><h1 style={{ color: "#1EB771" }}>.com</h1>
					</div>
					<a className="animated wow fadeInDown">STUDENT MANAGEMENT APPLICATION</a>
				</div>

				<nav className="navbar navbar-toggleable-sm navbar-light bg-faded main-nav" data-toggle="sticky-onscroll">
					<button className="navbar-toggler navbar-toggler-right hamburger is-closed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="hamb-top"></span>
						<span className="hamb-middle"></span>
						<span className="hamb-bottom"></span>
					</button>
					<a className="navbar-brand logo" href="#"><img src="/images/logo.png" alt="Logo"></img></a>
					<div className="collapse navbar-collapse justify-content-end" id="">
						<ul className="navbar-nav">
							<li className="nav-item">
								<div className="dropdown">
									<a className="nav-link dropdown-toggle title" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa-fw fa fa-user-o"></i> My Account</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
										<a className="dropdown-item" href="">Notification</a>
										<a className="dropdown-item" href="">Profile</a>
										<a className="dropdown-item" href="">Sign-out</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}

module.exports = Header;
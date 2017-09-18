const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('Header');
const Content = require('Content');
const Footer = require('Footer');
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {
	render() {
		return (
			<div id="main">
				<Header />
				<Content />
				<Footer />
				<a href="#main" className="btn btn-primary btn-backtotop" role="button" title="Back to top" data-toggle="tooltip" data-placement="left"><i className="fa-fw fa fa-angle-double-up"></i></a>
			</div>
		)
	}
}

module.exports = Main;
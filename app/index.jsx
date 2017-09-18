const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('Main');
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter>
	<Route path="/" component={Main}/>
	</BrowserRouter>)
	, document.getElementById("root"));
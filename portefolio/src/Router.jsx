import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Cv from './components/Cv.jsx';
import MyNavbar from './components/Navbar.jsx';

export default function MyRouter() {
	return (
		<Router>
			<MyNavbar />
			<Switch>
				<Route exact path="./Home" component={Home} />
                <Route path="./components/Cv" component={Cv} />
			</Switch>
		</Router>
	);
}

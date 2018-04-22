import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Home from 'components/Home/index.jsx';
//import Register from '../components/Register/Register';
//import Login from '../components/Login/Login';
//import Header from '../components/partials/Header';
//import Footer from '../components/partials/Footer';
export const Router = props => {
	const { history } = props;
	return (
		<ConnectedRouter history={history}>
		<div> 
			<Switch>
				<Route path="/" exact={true} component={Home} />
				{/*<Route path="/signup" component={Register} />
				<Route path="/login" component={Login} />*/}
		  	</Switch>
		  	{/* <Footer/> */}
		 </div>	 	
		</ConnectedRouter>
	);	
}
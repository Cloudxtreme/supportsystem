import React from 'react';
import { Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app';
import AccountHome from './accounts/accounthome';
import {Dummy} from './components/dummy';

export default (
	<Route path ="/" component={App} history={hashHistory}>
	 	<IndexRoute component={AccountHome}/>
	 	<Route path="accounts" component={AccountHome} />
	</Route>

	);
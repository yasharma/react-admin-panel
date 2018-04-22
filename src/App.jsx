import React from 'react';
import {Router} from './router.jsx';

const App = props => {
    const { history } = props;
    return (
    	<Router history={history}/>
    );
};

export default App;
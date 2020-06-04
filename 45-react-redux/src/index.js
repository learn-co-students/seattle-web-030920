import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {bowieReducer} from './reducer'



ReactDOM.render(
<Provider store={createStore(bowieReducer)}>
    <App />
</Provider>
, document.getElementById('root'));

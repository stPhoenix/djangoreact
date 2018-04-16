import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducers} from './reducers';


const store = createStore(rootReducers);
ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <AppContainer />
                    </BrowserRouter>
                </Provider>
                , document.getElementById('root'));
registerServiceWorker();

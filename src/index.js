import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//importamos el Provider de la librería redux para react que es react-redux
import {Provider} from 'react-redux';

import store from './redux/store';

import './index.css';
import App from './App';



ReactDOM.render(
    //incluimos el manejador de rutas y la app dentro del componente 'Provider' para
    //dar acceso a toda la aplicación a los elementos del root-reducer
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
    
);


import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../assets/logo.png'

import './style.css';

ReactDOM.render (
    <h1>Seja Bem-Vindo (a)!</h1>, //trecho de código JSX
    document.getElementById('root')
)

export default () => <img src={logo}/>

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './components/Home';
import './style.scss';

const crender = Component => { 
  render(
    <AppContainer>
        <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

crender(Home)

if(module.hot) {
  module.hot.accept();
}
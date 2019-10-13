import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const clientRender = (Com, method) => {
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  ReactDOM[method](<Com {...state} />, root);
};

const serverRender = Com => {
  return Com;
};

export function SSR(Com) {
  return EASY_ENV_IS_NODE ?  serverRender(Com) : clientRender(Com, 'hydrate');
}

export function CSR(Com) {
  return clientRender(Com, 'render');
}



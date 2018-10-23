import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

export default ({children}) => {
  
  return (
    <div>
      <Header />
      {children}
    </div>
  );
  
}



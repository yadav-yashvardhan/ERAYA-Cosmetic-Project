import React from 'react';
import './home.css';
import Header from '../../components/header/header';
import ExploreCosmo from '../../components/exploreCosmo/exploreCosmo';

function home() {
  return (
    <div>
      <Header/>
      <ExploreCosmo/> 
    </div>
  );
}

export default home;


import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,comedy,horror,romance} from './urls'

function App() {
 

  return (
   <div className='app'>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title = 'Netflix Originals' />
      <RowPost url={action} title = 'Action' isSmall />
      <RowPost url={comedy} title = 'Comedy' isSmall />
      <RowPost url={horror} title = 'Horror' isSmall />
      <RowPost url={romance} title = 'Romance' isSmall />


   </div>
  );
}

export default App;

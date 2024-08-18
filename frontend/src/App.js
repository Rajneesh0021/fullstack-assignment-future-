import React, { useState, useEffect } from 'react';
import './App.css';

import Cards from './components/Cards';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    
   
    fetch(`http://localhost:5000/cards/${search}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      
      })
      .catch(error => {
        alert('Error fetching data: ' + error);
      });
  }, [search]); 



  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <>
      <Navbar />
      <Banner onSearch={handleSearch} />
      <Cards data={data} />
      <Footer />
    </>
  );
}

export default App;

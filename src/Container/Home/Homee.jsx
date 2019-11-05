import React from 'react';
import '../../../src/App.css';
import Appbar from '../../Component/Appbar';
import Navigation from '../../Component/Navigation';
import Cards1 from '../../Component/Card1';
import Cards2 from '../../Component/Card2';
import Kuning from '../../Component/Kuning';
import Card3 from '../../Component/Card3';
import Card4 from '../../Component/Card4';
import Card5 from '../../Component/Card5';
import Akhir from '../../Component/Akhir';
function App() {
  return (
    <div className="App">
      <Appbar />
      <Navigation />
      <Cards1 />
     <Cards2 />
     <Kuning />
     <Card3 />
     <Card4 />
     <Card5 />
     <Akhir />
    </div>
  );
}

export default App;

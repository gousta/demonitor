import React from 'react';
import Header from './components/Header';
import Images from './components/Images';

const App = () => (
  <div>
    <Header />
    <div style={{ width: 1024, margin: '24px auto' }}>
      <Images />
    </div>
  </div>
);

export default App;

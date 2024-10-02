import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import FeaturedProducts from './components/FeaturedProducts';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <FeaturedProducts />
    </div>
  )
}

export default App;
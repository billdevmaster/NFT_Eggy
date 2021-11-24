import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = ({ children }) => {
  return (
    <div id="app-container">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;

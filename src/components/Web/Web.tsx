import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Web: React.FC = () => {
  return (
      <div>
          <Header page={5} />
          pagina web
          <Footer/>
      </div>
  );
}

export default Web;
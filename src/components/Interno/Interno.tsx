import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// import { Container } from './styles';

const Interno: React.FC = () => {
  return (
      <div>
          <Header page={2} />
          pagina interno
          <Footer/>
      </div>
  );
}

export default Interno;
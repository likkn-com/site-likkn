import React from 'react';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ConsultoriaLGPD from '../Lgpd/ConsultoriaLGPD';
import Lgpd from '../Lgpd/Lgpd';

const LgpdBase: React.FC = () => {
  return (
      <div>
          <Contacts/>
          <Header page={3} />
          <ConsultoriaLGPD/>
          <Lgpd/>
          <Footer/>
      </div>
  );
}

export default LgpdBase;
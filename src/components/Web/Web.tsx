import React from 'react';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import FooterMin from '../Footer/FooterMin';
import Header from '../Header/Header';
import Content from '../Web/Content';

const Web: React.FC = () => {
  return (
      <div>
          <Contacts/>
          <Header page={5} />
          <br/>
          <Content/>
          <FooterMin/>
      </div>
  );
}

export default Web;
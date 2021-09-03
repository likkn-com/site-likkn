import React from 'react';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Content from './Content';
import HeaderInterno from './HeaderInterno';
import MediaPlayer from './MediaPlayer';
import Templates from './Templates';

const Interno: React.FC = () => {
  return (
      <div>
          <Contacts/>
          <Header page={2} />
          <HeaderInterno/>
          {/*<MediaPlayer/>*/}
          <Content/>
          {/*<Templates/>*/}
          <Footer/>
      </div>
  );
}

export default Interno;
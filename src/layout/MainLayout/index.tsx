import React, { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Content } from './styled';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default MainLayout;

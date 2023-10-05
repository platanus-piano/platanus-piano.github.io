import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props: { children: ReactNode | ReactNode[] }) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

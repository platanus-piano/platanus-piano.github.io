import React, { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuDrawer from './MenuDrawer';

const Layout = (props: { children: ReactNode | ReactNode[] }) => {
  // props
  const { children } = props;
  // state
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header setOpen={setOpen} />
      {children}
      <Footer />
      <MenuDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Layout;

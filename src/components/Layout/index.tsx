import { PropsWithChildren } from 'react';

import { styLayoutContainer, styLayoutContent } from './styles';

import Header from '../Header';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styLayoutContainer}>
      <Header />
      <div className={styLayoutContent}>{children}</div>
    </div>
  );
};

export default Layout;

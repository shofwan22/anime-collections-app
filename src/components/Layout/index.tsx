import { PropsWithChildren } from 'react';

import { styLayoutContainer, styLayoutContent } from './styles';

import Header from '../Header';
import { LoaderProvider } from '../../context/Loader';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <LoaderProvider>
      <div className={styLayoutContainer}>
        <Header />
        <div className={styLayoutContent}>{children}</div>
      </div>
    </LoaderProvider>
  );
};

export default Layout;

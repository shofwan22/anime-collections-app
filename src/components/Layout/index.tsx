import { PropsWithChildren } from 'react';

import { styLayoutContainer, styLayoutContent } from './styles';

import Header from '../Header';
import { LoaderProvider } from '../../context/Loader';
import { ModalProvider } from '../../context/Modal';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <LoaderProvider>
      <ModalProvider>
        <div className={styLayoutContainer}>
          <Header />
          <div className={styLayoutContent}>{children}</div>
        </div>
      </ModalProvider>
    </LoaderProvider>
  );
};

export default Layout;

import { PropsWithChildren } from 'react';

import { styLayoutContainer, styLayoutContent } from './styles';

import Header from '../Header';
import { LoaderProvider } from '../../context/Loader';
import { ModalProvider } from '../../context/Modal';
import { CollectionProvider } from '../../context/Collection';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <LoaderProvider>
      <CollectionProvider>
        <ModalProvider>
          <div className={styLayoutContainer}>
            <Header />
            <div className={styLayoutContent}>{children}</div>
          </div>
        </ModalProvider>
      </CollectionProvider>
    </LoaderProvider>
  );
};

export default Layout;

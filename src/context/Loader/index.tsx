import { PropsWithChildren, createContext, useContext, useState } from 'react';

import LoaderComponent from '../../components/Loader';

import { LoaderValue } from './types';

const Loader = createContext<LoaderValue>({
  loader: false,
  showLoader: () => {},
});

const LoaderProvider = ({ children }: PropsWithChildren) => {
  const [loader, setLoader] = useState(false);

  const showLoader = (value: boolean) => {
    setLoader(value);
  };

  return (
    <Loader.Provider value={{ loader, showLoader }}>
      {children}
      <LoaderComponent />
    </Loader.Provider>
  );
};

const useLoader = () => {
  const context = useContext(Loader);
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

export { LoaderProvider, useLoader };

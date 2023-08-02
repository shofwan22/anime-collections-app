import { PropsWithChildren, createContext, useContext, useState } from 'react';

import LoaderComponent from '../../components/Loader';

import { LoaderValue } from './types';

export const LoaderContext = createContext<LoaderValue>({
  loader: false,
  showLoader: () => {},
});

const LoaderProvider = ({ children }: PropsWithChildren) => {
  const [loader, setLoader] = useState(false);

  const showLoader = (value: boolean) => {
    setLoader(value);
  };

  return (
    <LoaderContext.Provider value={{ loader, showLoader }}>
      {children}
      <LoaderComponent />
    </LoaderContext.Provider>
  );
};

const useLoader = () => {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

export { LoaderProvider, useLoader };

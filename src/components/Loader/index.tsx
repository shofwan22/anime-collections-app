import { styLoaderContainer, styLoaderInner } from './styles';

import { useLoader } from '../../contexts/Loader';

const Loader = () => {
  const { loader } = useLoader();
  return (
    <>
      {loader && (
        <div className={styLoaderContainer} data-testid="loader">
          <div className={styLoaderInner}></div>
        </div>
      )}
    </>
  );
};

export default Loader;

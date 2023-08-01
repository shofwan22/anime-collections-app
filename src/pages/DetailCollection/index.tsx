import Button from '../../components/Base/Button';
import List from './components/List';

import {
  styDetailCollectionContainer,
  styDetailCollectionHeader,
} from './styles';

import useGetDetailCollection from './hooks/useGetDetailCollection';

const DetailCollection = () => {
  const { detail } = useGetDetailCollection();
  console.log(detail);

  return (
    <div className={styDetailCollectionContainer}>
      <div className={styDetailCollectionHeader}>
        <h1>{detail?.name}</h1>
        <Button label="Edit Collection" iconRight="fa fa-edit" />
      </div>
      {detail && <List data={detail?.list} />}
    </div>
  );
};

export default DetailCollection;

import Button from '../../components/Base/Button';
import List from './components/List';
import FormCollectionName from '../../components/ModalCollection/FormCollectionName';

import {
  styDetailCollectionContainer,
  styDetailCollectionHeader,
} from './styles';

import { useModal } from '../../contexts/Modal';
import { useCollection } from '../../contexts/Collection';
import { useNotif } from '../../contexts/Notifications';
import useGetDetailCollection from './hooks/useGetDetailCollection';

import { CollectionItem } from '../../contexts/Collection/types';

const DetailCollection = () => {
  const { detail } = useGetDetailCollection();
  const { showModal, closeModal } = useModal();
  const { handleUpdateNameCollection } = useCollection();
  const { showNotif } = useNotif();

  const handleEdit = (data: CollectionItem | null) => {
    if (data) {
      showModal({
        title: `Edit Data Collection ${data.name}`,
        width: '500px',
        content: (
          <FormCollectionName
            data={data}
            type="update"
            onCancel={() => closeModal()}
            onSubmit={(value) => handleEditCollectionName(data.id, value)}
          />
        ),
      });
    }
  };

  const handleEditCollectionName = (id: number, value: string) => {
    handleUpdateNameCollection(id, value);
    closeModal();
    showNotif({
      message: 'Success Edit Name Collection',
      type: 'success',
    });
  };

  return (
    <div className={styDetailCollectionContainer}>
      <div className={styDetailCollectionHeader}>
        <h1>{detail?.name}</h1>
        <Button
          label="Edit Collection"
          iconRight="fa fa-edit"
          onClick={() => handleEdit(detail)}
        />
      </div>
      {detail && <List data={detail?.list} />}
    </div>
  );
};

export default DetailCollection;

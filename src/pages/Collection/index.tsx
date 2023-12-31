import Button from '../../components/Base/Button';
import List from './components/List';

import { styCollectionContainer, styCollectionAction } from './styles';

import { useCollection } from '../../contexts/Collection';
import { useModal } from '../../contexts/Modal';
import { useNotif } from '../../contexts/Notifications';
import FormCollectionName from '../../components/ModalCollection/FormCollectionName';

const Collection = () => {
  const { collections, handleNewCollectionName } = useCollection();
  const { showModal, closeModal } = useModal();
  const { showNotif } = useNotif();

  const handleNewCollection = () => {
    showModal({
      title: 'Add New Collection Name',
      width: '500px',
      content: (
        <FormCollectionName
          type="add"
          onCancel={closeModal}
          onSubmit={(value) => handleSaveCollectionName(value)}
        />
      ),
    });
  };

  const handleSaveCollectionName = (value: string) => {
    handleNewCollectionName(value, []);
    closeModal();
    showNotif({
      message: 'Success Create New Collection',
      type: 'success',
    });
  };

  return (
    <div className={styCollectionContainer}>
      <div className={styCollectionAction}>
        <Button
          label="Add New Collection"
          iconRight="fa fa-plus"
          onClick={handleNewCollection}
        />
      </div>
      <List data={collections} />
    </div>
  );
};

export default Collection;

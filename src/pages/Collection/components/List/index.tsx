import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import { styListContainer } from './styles';

import { useModal } from '../../../../contexts/Modal';
import { useCollection } from '../../../../contexts/Collection';

import { CollectionItem } from '../../../../contexts/Collection/types';
import FormCollectionName from '../../../../components/ModalCollection/FormCollectionName';
import FormCollectionRemove from '../../../../components/ModalCollection/FormCollectionRemove';

interface ListProps {
  data: CollectionItem[];
}

const List = (props: ListProps) => {
  const navigate = useNavigate();
  const { data } = props;
  const { showModal, closeModal } = useModal();
  const { handleUpdateNameCollection, handleRemoveCollection } =
    useCollection();

  const handleDetail = (id: number) => {
    navigate(`/collection/${id}`);
  };

  const handleEdit = (data: CollectionItem) => {
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
  };

  const handleEditCollectionName = (id: number, value: string) => {
    handleUpdateNameCollection(id, value);
    closeModal();
  };

  const handleRemove = (data: CollectionItem) => {
    showModal({
      title: `Remove ${data.name}`,
      width: '500px',
      content: (
        <FormCollectionRemove
          onCancel={() => closeModal()}
          onConfirm={() => handleConfirmRemove(data.id)}
        />
      ),
    });
  };

  const handleConfirmRemove = (id: number) => {
    handleRemoveCollection(id);
    closeModal();
  };

  return (
    <div className={styListContainer}>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.name}
            image={
              item.list.length > 0 ? item.list[0].coverImage.large : undefined
            }
            length={item.list.length}
            onClick={() => handleDetail(item.id)}
            onEdit={() => handleEdit(item)}
            onRemove={() => handleRemove(item)}
          />
        );
      })}
    </div>
  );
};

export default List;

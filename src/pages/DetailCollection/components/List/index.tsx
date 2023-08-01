import { useNavigate, useParams } from 'react-router-dom';

import Card from '../Card';
import { styListContainer } from './styles';

import { useModal } from '../../../../contexts/Modal';
import { useCollection } from '../../../../contexts/Collection';

import {
  Media,
  QueryResponses,
} from '../../../Home/hooks/useGetAnimeList/types';
import FormCollectionRemove from '../../../../components/ModalCollection/FormCollectionRemove';

interface ListProps {
  data: QueryResponses['Page']['media'];
}

const List = (props: ListProps) => {
  const { data } = props;
  const navigate = useNavigate();
  const params = useParams();
  const { showModal, closeModal } = useModal();
  const { handleRemoveAnimeFromCollection } = useCollection();

  const handleDetailAnime = (id: number) => {
    navigate(`/anime/${id}`);
  };

  const handleRemoveAnime = (data: Media) => {
    showModal({
      title: `Remove Anime ${data.title.romaji}`,
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
    handleRemoveAnimeFromCollection(Number(params.id), id);
    closeModal();
  };

  return (
    <div className={styListContainer}>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            data={item}
            onClick={() => handleDetailAnime(item.id)}
            onRemove={() => handleRemoveAnime(item)}
          />
        );
      })}
    </div>
  );
};

export default List;

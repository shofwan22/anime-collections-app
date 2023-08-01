import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import { styListContainer } from './styles';

import { QueryResponses } from '../../../Home/hooks/useGetAnimeList/types';

interface ListProps {
  data: QueryResponses['Page']['media'];
}

const List = (props: ListProps) => {
  const { data } = props;
  const navigate = useNavigate();

  const handleDetailAnime = (id: number) => {
    navigate(`/anime/${id}`);
  };

  return (
    <div className={styListContainer}>
      {data.map((item) => {
        return <Card data={item} onClick={() => handleDetailAnime(item.id)} />;
      })}
    </div>
  );
};

export default List;

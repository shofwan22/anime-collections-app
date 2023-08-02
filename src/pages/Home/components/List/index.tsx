import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import Pagination from '../../../../components/Pagination';
import { styListContainer, stySectionPagination } from './styles';

import { QueryResponses, Media } from '../../hooks/useGetAnimeList/types';

interface ListProps {
  data: QueryResponses['Page']['media'];
  page: number;
  hasNextPage?: boolean;
  dataSelected: QueryResponses['Page']['media'];
  onChangePage: (pageNumber: number) => void;
  onSelectedData?: (value: QueryResponses['Page']['media']) => void;
}

const List = (props: ListProps) => {
  const {
    data,
    page,
    hasNextPage,
    dataSelected,
    onChangePage,
    onSelectedData,
  } = props;
  const navigate = useNavigate();

  const handleDetail = (id: number) => {
    navigate(`/anime/${id}`);
  };

  // This function to handle select data bookmark of anime
  const handleBookmark = (bookmark: boolean, item: Media) => {
    if (bookmark) {
      const result = [...dataSelected, item];
      if (onSelectedData) onSelectedData(result);
    } else {
      const updatedDataBookmark = dataSelected.filter(
        (bookmarkItem) => bookmarkItem.id !== item.id
      );
      if (onSelectedData) onSelectedData(updatedDataBookmark);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    onChangePage(pageNumber);
  };

  return (
    <>
      <div className={styListContainer}>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              data={item}
              showBookmark
              bookmark={
                dataSelected.find((dt) => dt.id === item.id) ? true : false
              }
              onBookmark={(bookmark) => handleBookmark(bookmark, item)}
              onClick={() => handleDetail(item.id)}
            />
          );
        })}
      </div>
      {data.length > 0 && (
        <div className={stySectionPagination}>
          <Pagination
            handlePageChange={handlePageChange}
            currentPage={page}
            hasNextPage={hasNextPage}
          />
        </div>
      )}
    </>
  );
};

export default List;

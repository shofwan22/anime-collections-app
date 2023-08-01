import { useState } from 'react';

import { useModal } from '../../contexts/Modal';
import useGetAnimeList from './hooks/useGetAnimeList';

import Search from '../../components/Search';
import Button from '../../components/Base/Button';
import List from './components/List';

import { QueryResponses } from './hooks/useGetAnimeList/types';

import { styHomeContainer, styHomeAction } from './styles';

const Home = () => {
  const { showModal } = useModal();
  const { listAnime, page, hasNextPage, handleSearch, handlePage } =
    useGetAnimeList();
  const [dataSelected, setDataSelected] = useState<
    QueryResponses['Page']['media']
  >([]);

  const handleBulkCollection = () => {
    showModal({
      title: 'Add To My Collection',
      width: '500px',
      content: <div>Halo</div>,
    });
  };

  return (
    <>
      <div className={styHomeAction}>
        <div className="home-action__left">
          <Search onSearch={(data) => handleSearch(data)} />
        </div>
        {dataSelected.length > 0 && (
          <div className="home-action__right">
            <p className="text-selected">{dataSelected.length} Selected</p>
            <Button
              label="Add Selected To Collections"
              iconRight="fa fa-plus"
              onClick={handleBulkCollection}
            />
          </div>
        )}
      </div>
      <div className={styHomeContainer}>
        <List
          data={listAnime}
          page={page}
          dataSelected={dataSelected}
          hasNextPage={hasNextPage}
          onChangePage={handlePage}
          onSelectedData={(selectedData) => setDataSelected(selectedData)}
        />
      </div>
    </>
  );
};

export default Home;

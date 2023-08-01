import { useState } from 'react';

import Search from '../../components/Search';
import Button from '../../components/Base/Button';
import List from './components/List';
import FormCollection from '../../components/ModalCollection/FormCollection';

import { styHomeContainer, styHomeAction } from './styles';

import { useModal } from '../../contexts/Modal';
import { useCollection } from '../../contexts/Collection';
import useGetAnimeList from './hooks/useGetAnimeList';

import { QueryResponses } from './hooks/useGetAnimeList/types';

const Home = () => {
  const { showModal, closeModal } = useModal();
  const { handleNewCollection, handleNewCollectionName } = useCollection();
  const { listAnime, page, hasNextPage, handleSearch, handlePage } =
    useGetAnimeList();
  const [dataSelected, setDataSelected] = useState<
    QueryResponses['Page']['media']
  >([]);

  const handleBulkCollection = () => {
    showModal({
      title: 'Add To My Collection',
      width: '500px',
      content: (
        <FormCollection
          dataSelected={dataSelected}
          onSelectCollection={(id) => handleSelectCollection(id)}
          onSubmitCollectionName={(value) => handleSubmitCollectionName(value)}
        />
      ),
    });
  };

  const handleSelectCollection = (id: number) => {
    handleNewCollection(id, dataSelected);
    closeModal();
    setDataSelected([]);
  };

  const handleSubmitCollectionName = (value: string) => {
    handleNewCollectionName(value, dataSelected);
    closeModal();
    setDataSelected([]);
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

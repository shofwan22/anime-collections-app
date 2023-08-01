import {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
} from 'react';

import { CollectionValue, CollectionItem } from './types';
import { Media } from '../../pages/Home/hooks/useGetAnimeList/types';

const Collection = createContext<CollectionValue>({
  collections: [],
  handleNewCollection: () => {},
  handleNewCollectionName: () => {},
  handleUpdateNameCollection: () => {},
  handleRemoveCollection: () => {},
  handleRemoveAnimeFromCollection: () => {},
});

const CollectionProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [collections, setCollections] = useState<CollectionItem[]>([]);

  const setDataCollections = (data: CollectionItem[]) => {
    setCollections(data);
    localStorage.setItem('LIST_COLLECTIONS', JSON.stringify(data));
  };

  const handleNewCollection = (id: number, value: Media[]) => {
    const findIndexCollection = collections.findIndex((item) => item.id === id);
    if (findIndexCollection > -1) {
      const ids = new Set(
        collections[findIndexCollection].list.map((d) => d.id)
      );
      const mergedData = [
        ...collections[findIndexCollection].list,
        ...value.filter((d) => !ids.has(d.id)),
      ];

      const newData = [...collections];
      newData[findIndexCollection].list = mergedData;
      setDataCollections(newData);
    }
  };

  const handleNewCollectionName = (name: string, value: Media[] | []) => {
    const newData = {
      id:
        collections.length > 0 ? collections[collections.length - 1].id + 1 : 1,
      name: name,
      list: value,
    };
    if (collections.length === 0) {
      setDataCollections([newData]);
    } else {
      const result = [...collections, newData];
      setDataCollections(result);
    }
  };

  const handleUpdateNameCollection = (id: number, value: string) => {
    const findIndexCollection = collections.findIndex((item) => item.id === id);
    if (findIndexCollection > -1) {
      const newData = [...collections];
      newData[findIndexCollection].name = value;
      setDataCollections(newData);
    }
  };

  const handleRemoveCollection = (id: number) => {
    const findIndexCollection = collections.findIndex((item) => item.id === id);
    if (findIndexCollection > -1) {
      const newData = [...collections];
      newData.splice(findIndexCollection, 1);
      setDataCollections(newData);
    }
  };

  const handleRemoveAnimeFromCollection = (
    idCollection: number,
    idAnime: number
  ) => {
    const findIndexCollection = collections.findIndex(
      (item) => item.id === idCollection
    );

    if (findIndexCollection > -1) {
      const newData = [...collections];
      const findIndexAnime = newData[findIndexCollection].list.findIndex(
        (item) => item.id === idAnime
      );

      if (findIndexAnime > -1) {
        newData[findIndexCollection].list.splice(findIndexAnime, 1);
        setDataCollections(newData);
      }
    }
  };

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('LIST_COLLECTIONS');
    if (getLocalStorage) {
      setCollections(JSON.parse(getLocalStorage));
    }
  }, []);

  return (
    <Collection.Provider
      value={{
        collections,
        handleNewCollection,
        handleNewCollectionName,
        handleUpdateNameCollection,
        handleRemoveCollection,
        handleRemoveAnimeFromCollection,
      }}
    >
      {children}
    </Collection.Provider>
  );
};

const useCollection = () => {
  const context = useContext(Collection);
  if (context === undefined) {
    throw new Error('useCollection must be used within a CollectionProvider');
  }
  return context;
};

export { CollectionProvider, useCollection };

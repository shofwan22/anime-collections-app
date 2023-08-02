import {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
} from 'react';

import { CollectionValue, CollectionItem } from './types';
import { Media } from '../../pages/Home/hooks/useGetAnimeList/types';

const CollectionContext = createContext<CollectionValue>({
  collections: [],
  handleNewCollection: () => {},
  handleNewCollectionBulk: () => {},
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
    // This function is used to add new anime bulk data to a collection
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

  const handleNewCollectionBulk = (id: number[], value: Media[]) => {
    // This function is used to add new anime data to bulk collections
    id.forEach((item) => {
      const findIndexCollection = collections.findIndex(
        (find) => find.id === item
      );

      if (findIndexCollection > -1) {
        const newData = [...collections];
        newData[findIndexCollection].list = [
          ...newData[findIndexCollection].list,
          ...value,
        ];
        setDataCollections(newData);
      }
    });
  };

  const handleNewCollectionName = (name: string, value: Media[] | []) => {
    // This function is used to add a new collection name as well as add data for the selected anime
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
    // This function is used to rename a collection
    const findIndexCollection = collections.findIndex((item) => item.id === id);
    if (findIndexCollection > -1) {
      const newData = [...collections];
      newData[findIndexCollection].name = value;
      setDataCollections(newData);
    }
  };

  const handleRemoveCollection = (id: number) => {
    // This function is used to delete a collection
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
    // This function is used to delete anime data from a collection
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
    <CollectionContext.Provider
      value={{
        collections,
        handleNewCollection,
        handleNewCollectionBulk,
        handleNewCollectionName,
        handleUpdateNameCollection,
        handleRemoveCollection,
        handleRemoveAnimeFromCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

const useCollection = () => {
  const context = useContext(CollectionContext);
  if (context === undefined) {
    throw new Error('useCollection must be used within a CollectionProvider');
  }
  return context;
};

export { CollectionProvider, useCollection };

import { Media } from '../../pages/Home/hooks/useGetAnimeList/types';

export interface CollectionItem {
  id: number;
  name: string;
  list: Media[];
}

export interface CollectionValue {
  collections: CollectionItem[];
  handleNewCollection: (id: number, value: Media[]) => void;
  handleNewCollectionName: (name: string, value: Media[]) => void;
  handleUpdateNameCollection: (id: number, value: string) => void;
  handleRemoveCollection: (id: number) => void;
  handleRemoveAnimeFromCollection: (
    idCollection: number,
    idAnime: number
  ) => void;
}

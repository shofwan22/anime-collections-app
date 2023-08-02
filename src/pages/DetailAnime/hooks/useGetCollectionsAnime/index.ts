import { useParams } from 'react-router-dom';

import { useCollection } from '../../../../contexts/Collection';

const useGetCollectionsAnime = () => {
  const params = useParams();
  const { collections } = useCollection();

  // This function is used to get collection data from an anime detail
  const handleCollectionsOfAnime = () => {
    const dataId = Number(params?.id) || null;
    const animeIdToFind = dataId;
    const collectionIdsWithAnime = collections.filter((collection) =>
      collection.list.some((anime) => anime.id === animeIdToFind)
    );

    return collectionIdsWithAnime;
  };
  return {
    handleCollectionsOfAnime,
  };
};

export default useGetCollectionsAnime;

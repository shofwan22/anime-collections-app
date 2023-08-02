import { useCollection } from '../../contexts/Collection';
import { QueryResponses } from '../../pages/Home/hooks/useGetAnimeList/types';

const useValidationForm = () => {
  const { collections } = useCollection();

  const handleValidationSpecialChar = (value: string) => {
    // To intercept user input with a special character
    const specialCharsRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    return specialCharsRegex.test(value);
  };

  const handleValidationUniqeName = (value: string, id: number | null) => {
    // To check whether the collection name entered by the user has been used or not
    const checkUniqueName = !id
      ? collections.find(
          (item) => item.name.toLowerCase() === value.toLowerCase()
        )
      : collections.find(
          (item) =>
            item.id !== id && item.name.toLowerCase() === value.toLowerCase()
        );
    return checkUniqueName ? true : false;
  };

  const handleValidationDataSelected = (
    dataSelected: QueryResponses['Page']['media']
  ) => {
    // To check whether anime data has been registered or not in the collection
    if (dataSelected.length === 1) {
      const animeIdToFind = dataSelected[0].id;
      const collectionIdsWithAnime = collections
        .filter((collection) =>
          collection.list.some((anime) => anime.id === animeIdToFind)
        )
        .map((collection) => collection.id);

      return collectionIdsWithAnime;
    } else {
      return [];
    }
  };

  return {
    handleValidationSpecialChar,
    handleValidationUniqeName,
    handleValidationDataSelected,
  };
};

export default useValidationForm;

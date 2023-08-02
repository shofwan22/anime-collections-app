import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { useLoader } from '../../../../contexts/Loader';

import { GET_ANIME_LIST } from './query';

import { QueryResponses, QueryVariables } from './types';

const useGetAnimeList = () => {
  const { showLoader } = useLoader();
  const [page, setPage] = useState(1);
  const [listAnime, setListAnime] = useState<QueryResponses['Page']['media']>(
    []
  );
  const [keyword, setKeyword] = useState('');

  const handlePage = (page: number) => {
    setPage(page);
  };

  const handleSearch = (query: string) => {
    setKeyword(query);
  };

  // To handle get data list anime from graphql
  const { loading, error, data } = useQuery<QueryResponses, QueryVariables>(
    GET_ANIME_LIST,
    {
      fetchPolicy: 'cache-and-network',
      variables: {
        page,
        perPage: 10,
        search: keyword || undefined,
      },
    }
  );

  useEffect(() => {
    const result = data?.Page?.media || [];
    if (data?.Page?.media) {
      setListAnime(result);
    }

    showLoader(loading);
  }, [data, showLoader, loading]);

  const hasNextPage = Boolean(data?.Page?.pageInfo?.hasNextPage);

  return {
    loading,
    error,
    data,
    listAnime,
    hasNextPage,
    page,
    handleSearch,
    handlePage,
  };
};

export default useGetAnimeList;

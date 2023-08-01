import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useLoader } from '../../../../contexts/Loader';

import { QueryResponses, QueryVariables, Media } from './types';

import { GET_DETAIL_ANIME } from './query';

const useGetDetailAnime = () => {
  const params = useParams();
  const dataId = Number(params?.id) || 0;
  const { showLoader } = useLoader();

  const { loading, error, data } = useQuery<QueryResponses, QueryVariables>(
    GET_DETAIL_ANIME,
    {
      fetchPolicy: 'cache-and-network',
      variables: {
        id: dataId,
      },
    }
  );

  useEffect(() => {
    showLoader(loading);
  }, [showLoader, loading]);

  const result: Media | null = data?.Media || null;
  return {
    loading,
    error,
    detail: result,
  };
};

export default useGetDetailAnime;

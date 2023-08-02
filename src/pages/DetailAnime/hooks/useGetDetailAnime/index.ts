import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useLoader } from '../../../../contexts/Loader';

import { QueryResponses, QueryVariables, Media } from './types';

import { GET_DETAIL_ANIME } from './query';

const useGetDetailAnime = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { showLoader } = useLoader();

  const dataId = Number(params?.id) || 0;

  // To handle get data detail anime from graphql
  const { loading, error, data } = useQuery<QueryResponses, QueryVariables>(
    GET_DETAIL_ANIME,
    {
      fetchPolicy: 'cache-and-network',
      variables: {
        id: dataId,
      },
    }
  );

  const result: Media | null = data?.Media || null;

  useEffect(() => {
    showLoader(loading);
    if (!loading && !result) {
      navigate(-1);
    }
  }, [showLoader, loading, navigate, result]);

  return {
    loading,
    error,
    detail: result,
  };
};

export default useGetDetailAnime;

import { useParams, useNavigate } from 'react-router-dom';

import { useCollection } from '../../../../contexts/Collection';

const useGetDetailCollection = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { collections } = useCollection();

  const dataId = Number(params?.id) || 0;
  const findCollection = collections.find((item) => item.id === dataId);

  const result = findCollection || null;

  if (!result) {
    navigate(-1);
  }

  return {
    detail: result,
  };
};

export default useGetDetailCollection;

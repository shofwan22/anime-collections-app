import { useState } from 'react';

import FormSelectCollection from '../FormSelectCollection';
import FormBulkCollection from '../FormBulkCollection';
import FormBulkAnime from '../FormCollectionName';
import { QueryResponses } from '../../../pages/Home/hooks/useGetAnimeList/types';

interface FormCollectionProps {
  typeBulk?: string;
  dataSelected?: QueryResponses['Page']['media'];
  onSelectCollection?: (id: number) => void;
  onSelectBulkCollection?: (id: number[]) => void;
  onSubmitCollectionName: (value: string) => void;
}

const FormCollection = (props: FormCollectionProps) => {
  const {
    typeBulk,
    dataSelected,
    onSelectCollection,
    onSelectBulkCollection,
    onSubmitCollectionName,
  } = props;
  const [formCollectionName, setFormCollectionName] = useState(false);

  const handleSelectCollection = (id: number) => {
    if (onSelectCollection) onSelectCollection(id);
  };

  const handleBulkSelectCollection = (id: number[]) => {
    if (onSelectBulkCollection) onSelectBulkCollection(id);
  };

  const handleSubmitCollectionName = (value: string) => {
    onSubmitCollectionName(value);
  };

  const handleCancelCollectionName = () => {
    setFormCollectionName(false);
  };

  return (
    <>
      {!formCollectionName && !typeBulk && (
        <FormSelectCollection
          dataSelected={dataSelected}
          onSelectCollection={(id) => handleSelectCollection(id)}
          onCollectionName={(value) => setFormCollectionName(value)}
        />
      )}

      {!formCollectionName && typeBulk === 'collection' && (
        <FormBulkCollection
          dataSelected={dataSelected}
          onSubmitCollection={(id) => handleBulkSelectCollection(id)}
          onCollectionName={(value) => setFormCollectionName(value)}
        />
      )}

      {formCollectionName && (
        <FormBulkAnime
          type="add"
          onSubmit={(value) => handleSubmitCollectionName(value)}
          onCancel={handleCancelCollectionName}
        />
      )}
    </>
  );
};

export default FormCollection;

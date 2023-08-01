import { useState } from 'react';

import FormSelectCollection from '../FormSelectCollection';
import FormCollectionName from '../FormCollectionName';
import { QueryResponses } from '../../../pages/Home/hooks/useGetAnimeList/types';

interface FormCollectionProps {
  dataSelected?: QueryResponses['Page']['media'];
  onSelectCollection: (id: number) => void;
  onSubmitCollectionName: (value: string) => void;
}

const FormCollection = (props: FormCollectionProps) => {
  const { dataSelected, onSelectCollection, onSubmitCollectionName } = props;
  const [formCollectionName, setFormCollectionName] = useState(false);

  const handleSelectCollection = (id: number) => {
    onSelectCollection(id);
  };

  const handleSubmitCollectionName = (value: string) => {
    onSubmitCollectionName(value);
  };

  const handleCancelCollectionName = () => {
    setFormCollectionName(false);
  };

  return (
    <>
      {!formCollectionName && (
        <FormSelectCollection
          dataSelected={dataSelected}
          onSelectCollection={(id) => handleSelectCollection(id)}
          onCollectionName={(value) => setFormCollectionName(value)}
        />
      )}

      {formCollectionName && (
        <FormCollectionName
          type="add"
          onSubmit={(value) => handleSubmitCollectionName(value)}
          onCancel={handleCancelCollectionName}
        />
      )}
    </>
  );
};

export default FormCollection;

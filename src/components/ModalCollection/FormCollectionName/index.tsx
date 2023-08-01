import { useEffect, useState } from 'react';

import { styFormContainer, styFormError } from './styles';

import Input from '../../Base/Input';
import Button from '../../Base/Button';

import { CollectionItem } from '../../../contexts/Collection/types';
import useValidationForm from '../../../hooks/UseValidationForm';

interface FormBulkAnimeProps {
  type: string;
  data?: CollectionItem;
  onSubmit: (value: string) => void;
  onCancel: () => void;
}

const FormBulkAnime = (props: FormBulkAnimeProps) => {
  const { type, data, onSubmit, onCancel } = props;
  const { handleValidationSpecialChar, handleValidationUniqeName } =
    useValidationForm();

  const [newCollectionName, setNewCollectionName] = useState('');
  const [saveDisabled, setSaveDisabled] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const [errorFormMessage, setErrorFormMessage] = useState('');

  const handleValidationName = (value: string) => {
    const currentId = data ? data.id : null;
    const checkUniqueName =
      type === 'add'
        ? handleValidationUniqeName(value, currentId)
        : handleValidationUniqeName(value, currentId);
    const validationString = handleValidationSpecialChar(value);

    if (checkUniqueName && validationString) {
      setSaveDisabled(true);
      setErrorForm(true);
      setErrorFormMessage(
        'Collection Name already exist and Collection Name cannot contain special characters'
      );
    } else if (checkUniqueName) {
      setSaveDisabled(true);
      setErrorForm(true);
      setErrorFormMessage('Collection Name already exist');
    } else if (validationString) {
      setSaveDisabled(true);
      setErrorForm(true);
      setErrorFormMessage('Collection Name cannot contain special characters');
    } else {
      setSaveDisabled(false);
      setErrorForm(false);
      setErrorFormMessage('');
    }
  };

  const handleChangeCollectionName = (value: string) => {
    setNewCollectionName(value);
    handleValidationName(value);

    if (!value) setSaveDisabled(true);
  };

  const handleSubmit = () => {
    onSubmit(newCollectionName);
  };

  const handleCancel = () => {
    onCancel();
  };

  useEffect(() => {
    if (data?.name) setNewCollectionName(data.name);
    else setSaveDisabled(true);
  }, [data]);

  return (
    <div className={styFormContainer}>
      <Input
        value={newCollectionName}
        placeholder="New Collection Name"
        onChangeValue={(value) => handleChangeCollectionName(value)}
      />
      {errorForm && (
        <div className={styFormError}>
          <small className="error">{errorFormMessage}</small>
        </div>
      )}

      <Button
        label={type === 'add' ? `Save` : 'Update'}
        disabled={saveDisabled}
        onClick={handleSubmit}
      />
      <Button label="Cancel" bgColor="#dc3545" onClick={handleCancel} />
    </div>
  );
};

export default FormBulkAnime;

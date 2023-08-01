import { useState } from 'react';

import { styFormContainer } from './styles';

import Input from '../../Base/Input';
import Button from '../../Base/Button';

interface FormCollectionNameProps {
  type: string;
  onSubmit: (value: string) => void;
  onCancel: () => void;
}

const FormCollectionName = (props: FormCollectionNameProps) => {
  const { type, onSubmit, onCancel } = props;
  const [newCollectionName, setNewCollectionName] = useState('');

  const handleSubmit = () => {
    onSubmit(newCollectionName);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className={styFormContainer}>
      <Input
        value={newCollectionName}
        placeholder="New Collection Name"
        onChangeValue={(value) => setNewCollectionName(value)}
      />
      <Button
        label={type === 'add' ? `Save` : 'Update'}
        disabled={newCollectionName ? false : true}
        onClick={handleSubmit}
      />
      <Button label="Cancel" bgColor="#dc3545" onClick={handleCancel} />
    </div>
  );
};

export default FormCollectionName;

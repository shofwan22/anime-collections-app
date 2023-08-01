import Button from '../../Base/Button';

import { styBodyContainer } from './styles';

interface FormCollectionRemoveProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const FormCollectionRemove = (props: FormCollectionRemoveProps) => {
  const { onConfirm, onCancel } = props;

  return (
    <div className={styBodyContainer}>
      <p>Are you sure want to remove this data?</p>

      <Button label="Yes" onClick={onConfirm} />
      <Button label="Cancel" bgColor="#dc3545" onClick={onCancel} />
    </div>
  );
};

export default FormCollectionRemove;

import Button from '../../Base/Button';

import { styListCollections, styListCollectionItem } from './styles';

import { useCollection } from '../../../contexts/Collection';

interface FormSelectCollectionProps {
  onSelectCollection: (id: number) => void;
  onCollectionName: (value: boolean) => void;
}

const FormSelectCollection = (props: FormSelectCollectionProps) => {
  const { onSelectCollection, onCollectionName } = props;
  const { collections } = useCollection();

  const handleSelectCollection = (id: number) => {
    onSelectCollection(id);
  };

  const handleCollectionName = (value: boolean) => {
    onCollectionName(value);
  };

  return (
    <div className={styListCollections}>
      {collections.map((item) => {
        return (
          <div key={item.id} className={styListCollectionItem}>
            <span className="collection-name">{item.name}</span>
            <Button
              label="Select"
              onClick={() => handleSelectCollection(item.id)}
            />
          </div>
        );
      })}
      <Button
        iconRight="fa fa-plus"
        label="New Collection"
        onClick={() => handleCollectionName(true)}
      />
    </div>
  );
};

export default FormSelectCollection;

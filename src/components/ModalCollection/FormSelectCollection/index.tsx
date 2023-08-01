import { cx } from '@emotion/css';

import Button from '../../Base/Button';

import {
  styListCollections,
  styListCollectionItem,
  styListCollectionItemDisabled,
} from './styles';

import { useCollection } from '../../../contexts/Collection';
import useValidationForm from '../../../hooks/UseValidationForm';

import { QueryResponses } from '../../../pages/Home/hooks/useGetAnimeList/types';

interface FormSelectCollectionProps {
  dataSelected?: QueryResponses['Page']['media'];
  onSelectCollection: (id: number) => void;
  onCollectionName: (value: boolean) => void;
}

const FormSelectCollection = (props: FormSelectCollectionProps) => {
  const { dataSelected, onSelectCollection, onCollectionName } = props;
  const { collections } = useCollection();
  const { handleValidationDataSelected } = useValidationForm();

  const handleSelectCollection = (id: number) => {
    onSelectCollection(id);
  };

  const handleCollectionName = (value: boolean) => {
    onCollectionName(value);
  };

  const handleDisabledItem = (id: number) => {
    let result = false;
    if (dataSelected) {
      const checkData = handleValidationDataSelected(dataSelected);
      result = checkData.find((dt) => dt === id) ? true : false;
    }

    return result;
  };

  return (
    <div className={styListCollections}>
      {collections.map((item) => {
        return (
          <div
            key={item.id}
            className={cx(styListCollectionItem, {
              [styListCollectionItemDisabled]: handleDisabledItem(item.id),
            })}
          >
            <span className="collection-name">{item.name}</span>
            <Button
              label="Select"
              disabled={handleDisabledItem(item.id)}
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

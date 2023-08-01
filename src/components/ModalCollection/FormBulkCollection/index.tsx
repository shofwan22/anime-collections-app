import { ChangeEvent, useState } from 'react';
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

interface FormBulkCollectionProps {
  dataSelected?: QueryResponses['Page']['media'];
  onSubmitCollection: (id: number[]) => void;
  onCollectionName: (value: boolean) => void;
}

const FormBulkCollection = (props: FormBulkCollectionProps) => {
  const { dataSelected, onSubmitCollection, onCollectionName } = props;
  const { collections } = useCollection();
  const { handleValidationDataSelected } = useValidationForm();

  const [dataCollections, setDataCollections] = useState<number[]>([]);

  const handleSelectCollection = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (event.target.checked) {
      const newData = [...dataCollections, id];
      setDataCollections(newData);
    } else {
      const newData = [...dataCollections];
      const findIndex = newData.findIndex((item) => item === id);
      if (findIndex > -1) {
        newData.splice(findIndex, 1);
        setDataCollections(newData);
      }
    }
  };

  const handleSubmit = () => {
    onSubmitCollection(dataCollections);
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
      <Button
        iconRight="fa fa-plus"
        label="New Collection"
        onClick={() => handleCollectionName(true)}
      />
      {collections.map((item) => {
        return (
          <div
            key={item.id}
            className={cx(styListCollectionItem, {
              [styListCollectionItemDisabled]: handleDisabledItem(item.id),
            })}
          >
            <span className="collection-name">{item.name}</span>
            <input
              type="checkbox"
              disabled={handleDisabledItem(item.id)}
              onChange={(event) => handleSelectCollection(event, item.id)}
            ></input>
          </div>
        );
      })}
      <Button
        iconRight="fa fa-save"
        label="Save Anime To Collection"
        onClick={() => handleSubmit()}
      />
    </div>
  );
};

export default FormBulkCollection;

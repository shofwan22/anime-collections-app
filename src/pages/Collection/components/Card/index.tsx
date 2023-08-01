import Button from '../../../../components/Base/Button';
import { styCardContainer } from './styles';

interface CardProps {
  title: string;
  image?: string | undefined;
  length?: number;
  onClick?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
}

const Card = (props: CardProps) => {
  const { title, image, length, onClick, onEdit, onRemove } = props;

  const handleEdit = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    if (onEdit) onEdit();
  };

  const handleRemove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (onRemove) onRemove();
  };

  const imageCard =
    image || require('../../../../assets/images/default-image.png');
  const lenghtCollections = length || 0;

  return (
    <div className={styCardContainer} onClick={onClick}>
      <div className="card-image-container">
        <img src={imageCard} alt="cover" />
      </div>
      <div className="card-content-container">
        <h2>{title}</h2>
        <div className="card-content__text">
          <span>{lenghtCollections} Collections</span>
        </div>
        <div className="card-content__actions">
          <div onClick={handleEdit}>
            <Button label="Edit" iconRight="fa fa-edit" />
          </div>
          <div onClick={handleRemove}>
            <Button label="Remove" iconRight="fa fa-trash" bgColor="#dc3545" />
          </div>
          {/* <i className="fa fa-edit icon-edit" onClick={handleEdit}></i>
          <i className="fa fa-trash icon-remove" onClick={handleRemove}></i> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

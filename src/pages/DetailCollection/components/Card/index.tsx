import Button from '../../../../components/Base/Button';

import { styCardContainer } from './styles';

import { Media } from '../../../Home/hooks/useGetAnimeList/types';

interface CardProps {
  data: Media;
  onClick?: () => void;
  onRemove?: () => void;
}

const Card = (props: CardProps) => {
  const { data, onClick, onRemove } = props;

  const handleRemove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (onRemove) onRemove();
  };

  return (
    <div className={styCardContainer} onClick={onClick}>
      <div className="card-image-container">
        <img src={data.coverImage.large} alt="cover" />
      </div>
      <div className="card-content-container">
        <h2>{data.title.romaji}</h2>
        <div className="card-content__text">
          <span>{data.format}</span>
          {data.averageScore && (
            <>
              <div className="dot"></div>
              <span>{data.averageScore} %</span>
            </>
          )}
        </div>
        <div className="card-content__actions">
          <div onClick={handleRemove}>
            <Button label="Remove" iconRight="fa fa-trash" bgColor="#dc3545" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

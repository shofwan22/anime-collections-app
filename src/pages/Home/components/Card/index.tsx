import Pill from '../../../../components/Base/Pill';

import { styCardContainer, styBookmarkContainer } from './styles';

import { Media } from '../../hooks/useGetAnimeList/types';

interface CardProps {
  data: Media;
  showBookmark?: boolean;
  bookmark?: boolean;
  onClick?: () => void;
  onBookmark?: (value: boolean) => void;
}

const Card = (props: CardProps) => {
  const { data, showBookmark, bookmark, onClick, onBookmark } = props;

  const handleBookmark = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (onBookmark) onBookmark(!bookmark);
    event.stopPropagation();
  };

  return (
    <div className={styCardContainer} onClick={onClick}>
      <div className="card-image-container">
        <img src={data.coverImage.large} alt="cover" />
      </div>
      {showBookmark && (
        <div className={styBookmarkContainer} onClick={handleBookmark}>
          <i className={`fa fa-bookmark${bookmark ? '' : '-o'}`}></i>
          <span className="tooltiptext">
            {bookmark ? 'Remove Selected' : 'Add to my list'}
          </span>
        </div>
      )}

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
        <div className="card-content__genre">
          {data.genres.map((item, index) => {
            return index < 2 && <Pill key={index} name={item} />;
          })}
          {data.genres.length > 2 && <span>+{data.genres.length - 2}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;

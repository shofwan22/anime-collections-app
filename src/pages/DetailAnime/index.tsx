import Pill from '../../components/Base/Pill';
import { styDetailAnimeContainer } from './styles';

import useGetDetailAnime from './hooks/useGetDetailAnime';

const Detail = () => {
  const { detail } = useGetDetailAnime();

  return (
    <>
      {detail && (
        <div className={styDetailAnimeContainer}>
          <div className="detail-image">
            <img src={detail?.coverImage?.extraLarge} alt="cover" />
          </div>
          <div className="detail-content">
            <h1>{detail?.title?.romaji}</h1>
            <div className="detail-content__text">
              <span>{detail?.episodes} episodes</span>
              <div className="dot"></div>
              <span>{detail?.averageScore} %</span>
            </div>
            <div className="detail-content__genre">
              {detail?.genres.map((item, index) => {
                return <Pill key={index} name={item} />;
              })}
            </div>
            <div
              className="detail-content__description"
              dangerouslySetInnerHTML={{ __html: detail?.description }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;

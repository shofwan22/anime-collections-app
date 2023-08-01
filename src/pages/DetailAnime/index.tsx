import { useNavigate } from 'react-router-dom';

import Pill from '../../components/Base/Pill';
import Button from '../../components/Base/Button';
import { styDetailAnimeContainer, styListCollectionItem } from './styles';

import useGetDetailAnime from './hooks/useGetDetailAnime';
import useGetCollectionsAnime from './hooks/useGetCollectionsAnime';

const Detail = () => {
  const navigate = useNavigate();
  const { detail } = useGetDetailAnime();
  const { handleCollectionsOfAnime } = useGetCollectionsAnime();
  const dataCollections = handleCollectionsOfAnime();

  const handleDetailCollection = (id: number) => {
    navigate(`/collection/${id}`);
  };

  const handleBulkCollection = () => {};

  return (
    <>
      {detail && (
        <div className={styDetailAnimeContainer}>
          <div className="detail-image">
            <img src={detail?.coverImage?.extraLarge} alt="cover" />
            <Button
              label="Add To Collections"
              iconRight="fa fa-plus"
              onClick={handleBulkCollection}
            />
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
            {dataCollections.length > 0 && (
              <div className="detail-content__collections">
                <h2>Collections</h2>
                {dataCollections.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={styListCollectionItem}
                      onClick={() => handleDetailCollection(item.id)}
                    >
                      <span className="collection-name">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;

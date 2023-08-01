import { css } from '@emotion/css';

export const styDetailAnimeContainer = css`
  display: grid;
  grid-template-columns: 21.75rem 60%;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  .detail {
    &-image {
      width: 21.75rem;
      height: 21.75rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }

      @media (max-width: 992px) {
        width: 100%;
      }
    }

    &-content {
      margin-left: 32px;

      @media (max-width: 992px) {
        margin-left: 0;
        margin-top: 64px;
      }

      h1 {
        font-size: 24px;
        margin-top: 0;
        text-transfrom: capitalize;
        margin-bottom: 8px;
      }

      &__text {
        color: gray;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        display: flex;
        align-items: center;

        .dot {
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: gray;
          margin: 0px 8px;
        }
      }

      &__genre {
        margin-top: 8px;
        display: flex;

        div {
          padding: 4px 8px;

          &:not(:last-child) {
            margin-right: 4px;
          }
        }
      }

      &__description {
        margin-top: 16px;
        font-size: 14px;
        text-align: justify;
      }

      &__collections {
        h2 {
          margin-bottom: 16px;
        }
      }
    }
  }
`;

export const styListCollectionItem = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  background-color: #fff;
  cursor: pointer;

  .collection-name {
    color: black;
    font-weight: 600;
    font-size: 16px;
    margin-left: 12px;
  }

  &:hover {
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

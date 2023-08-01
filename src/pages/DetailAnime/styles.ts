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
        margin-top: 32px;
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
    }
  }
`;

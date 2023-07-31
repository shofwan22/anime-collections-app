import { css } from '@emotion/css';

export const styHomeAction = css`
  z-index: 2;
  padding: 16px 0 24px 0;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  background: #edf1f5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    top: 60px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }

  .home-action {
    &__left {
      width: fit-content;

      @media (max-width: 560px) {
        width: 100%;
        margin-bottom: 8px;
      }
    }

    &__right {
      display: flex;
      align-items: center;

      .text-selected {
        font-size: 12px;
        width: 120px;

        @media (max-width: 560px) {
          width: 100%;
          order: 2;
        }
      }

      @media (max-width: 560px) {
        flex-direction: column;
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const styHomeContainer = css``;

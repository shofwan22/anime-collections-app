import { css } from '@emotion/css';

export const styDetailCollectionContainer = css``;

export const styDetailCollectionHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 0;
    word-wrap: break-word;
    word-break: break-all;
  }

  button {
    width: fit-content;
    height: fit-content;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

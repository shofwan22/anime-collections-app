import { css } from '@emotion/css';

export const styListContainer = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;

  @media (max-width: 1401px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1138px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 788px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 526px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

import { css } from '@emotion/css';

export const styListContainer = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
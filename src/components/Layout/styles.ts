import { css } from '@emotion/css';

export const styLayoutContainer = css`
  font-family: 'Poppins', sans-serif;
  background: #edf1f5;
  min-height: 100vh;
  position: relative;
`;

export const styLayoutContent = css`
  padding: 120px 60px 40px 60px;

  @media (max-width: 992px) {
    padding: 120px 16px 24px 16px;
  }
`;

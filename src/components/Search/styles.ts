import { css } from '@emotion/css';

export const stySearchContainer = css`
  background: white;
  display: flex;
  aling-items: center;
  padding: 12px;
  border-radius: 8px;

  .icon-container {
    color: #707070;
    cursor: pointer;
  }

  input {
    border: none;
    width: 100%;
    margin-left: 8px;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

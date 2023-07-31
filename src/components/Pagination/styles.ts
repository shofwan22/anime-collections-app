import { css } from '@emotion/css';

export const styPaginationContainer = css`
  button {
    cursor: pointer;
    color: black;
    padding: 8px 16px;
    border: 1px solid #ddd;
    background-color: white;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ddd;
    }

    &:disabled,
    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

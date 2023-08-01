import { css } from '@emotion/css';

export const styInputContainer = css`
  background: white;
  display: flex;
  aling-items: center;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #2b2242;

  input {
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

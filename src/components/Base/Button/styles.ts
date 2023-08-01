import { css } from '@emotion/css';

export const styButtonContainer = (bgColor: string) => css`
  font-family: 'Poppins', sans-serif;
  background-color: ${bgColor};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  width: -webkit-fill-available;

  &:hover {
    opacity: 0.9;
  }

  .button-icon {
    margin-right: 8px;
  }

  &.button-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

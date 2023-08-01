import { css } from '@emotion/css';

export const styListCollections = css`
  padding: 1rem 2rem;
  display: grid;
  row-gap: 8px;

  button {
    &:first-child {
      width: fit-content;
      margin-bottom: 16px;
    }

    &:last-child {
      margin-top: 8px;
    }
  }
`;

export const styListCollectionItem = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  background-color: #fff;

  .collection-name {
    color: #979cb0;
    font-weight: 600;
    font-size: 16px;
    margin-left: 12px;
  }

  &:hover {
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  }
`;

export const styListCollectionItemDisabled = css`
  opacity: 0.6;
  cursor: not-allowed;

  &:hover {
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  }
`;

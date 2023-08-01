import { css } from '@emotion/css';

export const styModalContainer = css`
  z-index: 99;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s ease both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const styModalContent = css`
  overflow: scroll;
  max-height: 500px;
`;

export const styModalWidth = (width: string) => css`
  width: ${width};
`;

export const styModalBox = css`
  background: white;
  border-radius: 20px;
  border: 0;
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);

  .modal-header {
    padding: 1rem 1rem 1rem 2rem;
    display: flex;
    justify-content: space-between;

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      display: inline-block;
      font-family: Poppins, 'sans-serif';
    }

    .icon-close {
      cursor: pointer;
      float: right;
      color: gray;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

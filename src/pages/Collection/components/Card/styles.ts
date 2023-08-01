import { css } from '@emotion/css';

export const styCardContainer = css`
  background: white;
  border: 4px solid white;
  border-radius: 10px;
  box-shadow: 155px 148px 85px 0px rgba(32, 32, 35, 0.07);
  cursor: pointer;
  position: relative;

  .card-image-container {
    position: relative;
    width: 100%;
    height: 256px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      transition: all 0.5s ease;
    }
  }

  .card-content-container {
    margin-top: 10px;

    h2 {
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      text-transform: capitalize;
      opacity: 0.7;
      margin-bottom: 0;
    }
  }

  .card-content__text {
    padding: 4px 16px;
    color: gray;
    font-size: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    .card-image-container {
      img {
        opacity: 1;
        scale: 1.2;
      }
    }

    .card-content-container {
      h2 {
        opacity: 1;
      }
    }
  }

  .card-content__actions {
    display: flex;
    padding: 8px 16px;

    div {
      width: 100%;
      &:first-child {
        margin-right: 8px;
      }
    }
  }
`;

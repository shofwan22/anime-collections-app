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
    background: black;

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
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      white-space: pre-wrap;
    }

    .card-content__genre {
      padding: 8px 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        margin-right: 2px;
        padding: 8px;
      }

      span {
        color: gray;
        font-size: 10px;
      }
    }
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

  .card-content__text {
    padding: 4px 16px;
    color: gray;
    font-size: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .dot {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: gray;
      margin: 0px 8px;
    }
  }
`;

export const styBookmarkContainer = css`
  position: absolute;
  top: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 8px;

  .tooltiptext {
    font-size: 12px;
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 3;
    bottom: 150%;
    left: 50%;
    margin-left: -60px;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }

  &:hover .tooltiptext {
    visibility: visible;
  }
`;

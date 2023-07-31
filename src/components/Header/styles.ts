import { css } from '@emotion/css';

export const styHeaderContainer = css`
  position: fixed;
  z-index: 10;
  width: -webkit-fill-available;
  background-color: #2b2d42;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 12px 60px;
  align-items: center;

  @media (max-width: 992px) {
    display: initial;
    padding: 8px 16px;
  }
`;

export const styHeaderLogoContainer = css`
  @media (max-width: 992px) {
    display: inline-block;
    padding: 12px;
    margin-left: 32px;
  }
`;

export const styHeaderLogo = css`
  text-decoration: none;
  font-weight: bold;
  color: white;
`;

export const styMenuBar = css`
  display: none;
  @media (max-width: 992px) {
    display: inline-block;
    position: absolute;
    top: 30px;
  }

  .menu-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 16px;
    position: relative;
    user-select: none;

    .navicon {
      background: white;
      display: block;
      height: 2px;
      position: relative;
      transition: background 0.2s easy-out;
      width: 18px;

      &:before,
      &:after {
        background: white;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
      }

      &:before {
        top: 5px;
      }
      &:after {
        top: -5px;
      }
    }
  }

  .menu-btn {
    display: none;

    &:checked ~ .menu-icon .navicon {
      background: transparent;

      &:before {
        transform: rotate(-45deg);
      }

      &:after {
        transform: rotate(45deg);
      }
    }

    &:checked ~ .menu-icon:not(.steps) .navicon:before,
    &:checked ~ .menu-icon:not(.steps) .navicon:after {
      top: 0;
    }
  }
`;

export const styNavContainer = css`
  list-style: none;

  li {
    display: inline;

    a {
      padding: 20px 30px;
      color: white;
      text-decoration: none;

      &:hover {
        font-weight: 500;
      }
    }
  }

  @media (max-width: 992px) {
    display: none;
    padding-left: 0;

    li {
      display: block;
      padding: 4px 0;

      &:not(:first-child) {
        margin-top: 8px;
      }

      a {
        padding: 0;
      }
    }
  }
`;

export const styDisplayNavMobile = css`
  display: block !important;
`;

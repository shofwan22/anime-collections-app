import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';

import {
  styHeaderContainer,
  styHeaderLogoContainer,
  styHeaderLogo,
  styMenuBar,
  styNavContainer,
  styDisplayNavMobile,
} from './styles';

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <div className={styHeaderContainer}>
      <div className={styMenuBar}>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          onChange={() => setMenuMobile(!menuMobile)}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
      </div>
      <div className={styHeaderLogoContainer}>
        <Link className={styHeaderLogo} to={'/'}>
          Anime List
        </Link>
      </div>
      <ul
        className={cx(styNavContainer, { [styDisplayNavMobile]: menuMobile })}
      >
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/collection'}>Collection</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

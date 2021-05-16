import React, { useState, useEffect, HTMLAttributes } from 'react';
import Dompurify from 'dompurify';
import {
  MenuItem,
  hamburgerIcon,
  mobileMenu,
  navLogo,
  desktopMenu,
} from '../../src/constants/menu';
import { Link } from 'react-scroll';
import { ScrollSettings } from '../constants/scrollSettings';
import Typewriter from 'typewriter-effect';

type Props = { logo: string } & HTMLAttributes<HTMLDivElement>;
const Header = (props: Props) => {
  const { className = '', logo, ...restProps } = props;
  const [floating, setFloating] = useState(false);
  const [drawerActive, setDrawerActive] = useState(false);

  const scrollHandler = () => {
    setFloating(window.scrollY >= 20);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.addEventListener('scroll', scrollHandler);
  });

  const renderLink = (menuItem: MenuItem) => {
    if (menuItem.to)
      return (
        <Link
          className="c-header__menu-item"
          to={menuItem.to}
          {...ScrollSettings}
        >
          {menuItem.icon ? Dompurify.sanitize(menuItem.icon) : menuItem.label}
        </Link>
      );

    return (
      <a
        className="c-header__menu-item"
        href={menuItem.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {menuItem.icon ? Dompurify.sanitize(menuItem.icon) : menuItem.label}
      </a>
    );
  };

  return (
    <React.Fragment>
      <header
        className={`c-header${floating ? ' is-floating' : ''}${className}`}
        {...restProps}
      >
        <ul className="is-desktop-only">
          <div className="c-header-logo">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Alen_Basar')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Developer')
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>

          {/* <Link
            className="c-header-logo"
            to="home"
            {...ScrollSettings}
            dangerouslySetInnerHTML={{ __html: Dompurify.sanitize() }}
          /> */}

          {/* {navLogo.map((m) => (
            <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>
          ))} */}
        </ul>
        <ul className="is-desktop-only">
          {desktopMenu.map((m) => (
            <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>
          ))}
        </ul>
      </header>
    </React.Fragment>
  );
};

export default Header;

import React, { useState, useEffect, HTMLAttributes } from "react";
import Dompurify from "dompurify";
import {
  MenuItem,
  desktopMenu,
  mobileMenu,
  mobileMenuPrimary,
} from "../../src/constants/menu";
import { Link } from "react-scroll";
import {
  ScrollSettings,
  ContactScrollSettings,
} from "../constants/scrollSettings";
import Typewriter from "typewriter-effect";

type Props = { logo: string } & HTMLAttributes<HTMLDivElement>;
const Header = (props: Props) => {
  const { className = "", logo, ...restProps } = props;
  const [floating, setFloating] = useState(false);
  const [drawerActive, setDrawerActive] = useState(false);

  const scrollHandler = () => {
    setFloating(window.scrollY >= 20);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.addEventListener("scroll", scrollHandler);
  });

  const renderLink = (menuItem: MenuItem) => {
    if (menuItem.to) {
      if (menuItem.to === "contact") {
        return (
          <Link
            className="c-header__menu-item"
            to={menuItem.to}
            {...ContactScrollSettings}
          >
            {menuItem.icon ? Dompurify.sanitize(menuItem.icon) : menuItem.label}
          </Link>
        );
      } else {
        return (
          <Link
            className="c-header__menu-item"
            to={menuItem.to}
            {...ScrollSettings}
          >
            {menuItem.icon ? Dompurify.sanitize(menuItem.icon) : menuItem.label}
          </Link>
        );
      }
    }

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

  const renderHamburger = () => {
    return (
      <li className="c-header__side-drawer-trigger">
        <button
          className={`hamburger hamburger--spring${
            drawerActive ? " is-active" : ""
          }`}
          onClick={() => setDrawerActive(!drawerActive)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </li>
    );
  };

  return (
    <React.Fragment>
      <header
        className={`c-header ${floating ? " is-floating" : ""} ${className} `}
        {...restProps}
      >
        <div className="c-header-spacer"></div>
        {/* Mobile menu */}
        <ul className="is-mobile-only">
          <div className="c-header-logo">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Alen Basar")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Fullstack Engineer")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>
          {mobileMenuPrimary.map((m) => (
            <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>
          ))}
        </ul>
        <div
          className={`c-header__side-drawer is-mobile-only${
            drawerActive ? " is-active" : ""
          }`}
        >
          {mobileMenu.map((m) => (
            <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>
          ))}
        </div>
        <div
          className={`c-header__backdrop is-mobile-only${
            drawerActive ? " is-active" : ""
          }`}
          onClick={() => setDrawerActive(false)}
        />
        <ul className="is-mobile-only">{renderHamburger()}</ul>

        {/* Desktop Menu */}
        <ul className="is-desktop-only">
          <div className="c-header-logo">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Alen Basar")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Fullstack Engineer")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>
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

import "./Navbar.css";
import { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { NavUnlisted } from "./NavbarStyles";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthContext } from "../../providers/AuthProvider";

//! implement search bar functionality

export const Navbar = () => {
  const { loggedIn } = useAuthContext();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navbarLinks = [{ linkName: "Account", linkRoute: "/account" }];

  const AccountLink = (
    <NavLink
      to={loggedIn ? "/account" : "/signin"}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >
      <li>
        <AccountCircleIcon fontSize="large" />
      </li>
    </NavLink>
  );

  const linksWithNavLink = (
    <div className="navbar-links-container">
      {navbarLinks.map((link, index) => (
        <NavLink
          onClick={() => setShowNavbar(false)}
          key={index}
          to={link.linkRoute}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          <li>{link.linkName}</li>
        </NavLink>
      ))}
      {AccountLink}
    </div>
  );

  const logoHeaderLink = (
    <NavLink onClick={() => setShowNavbar(false)} to="/" id="logo-with-title">
      <img className="navbar-logo" src="" alt="tkd-main-logo" />
      <h2>Medium Clone!</h2>
    </NavLink>
  );

  return (
    <div className="root-layout">
      <header className="bg-gray-800">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              <a href="#">Logo</a>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button className="outline-none mobile-menu-button">
                <svg
                  className="w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mobile-menu hidden md:hidden">
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <header className="nav-bar">
        <nav>
          <NavUnlisted
            aria-label="Larger viewport navigation menu with links"
            className="main-navbar-ul"
          >
            <ul className="main-regular-links">{linksWithNavLink}</ul>

            <div className="menu-icon" onClick={handleShowNavbar}>
              <MenuIcon />
            </div>
            <div className="cart-small-screen">{AccountLink}</div>
            {showNavbar && (
              <div className="nav-elements">
                <ul>{linksWithNavLink}</ul>
              </div>
            )}
            {logoHeaderLink}
          </NavUnlisted>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

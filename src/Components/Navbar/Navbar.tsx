import "./Navbar.css";
import { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { NavUnlisted } from "./NavbarStyles";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthContext } from "../../providers/AuthProvider";

export const Navbar = () => {
  const { loggedIn } = useAuthContext();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navbarLinks = [
    { linkName: "Account", linkRoute: "/account" },
    { linkName: "Home", linkRoute: "/" },
  ];

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

import "./Navbar.css";
// import { useState } from "react";
import { Outlet } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useAuthContext } from "../../providers/AuthProvider";

export const Navbar = () => {
  // const { loggedIn } = useAuthContext();
  // const [showNavbar, setShowNavbar] = useState(false);
  // const handleShowNavbar = () => {
  //   setShowNavbar(!showNavbar);
  // };

  const navbarLinks = [
    { linkName: "Home", linkRoute: "/" },
    { linkName: "About", linkRoute: "/about" },
    { linkName: "Account", linkRoute: "/account" },
  ];

  const desktopLinks = (
    <div className="hidden md:block">
      <ul className="flex items-center space-x-8">
        {navbarLinks.map((link) => {
          return (
            <li key={link.linkName}>
              <a href={link.linkName} className="text-white">
                {link.linkName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const mobileLinks = (
    <div className="mobile-menu hidden md:hidden">
      <ul className="mt-4 space-y-4">
        {navbarLinks.map((link) => {
          return (
            <li key={link.linkName}>
              <a href={link.linkName} className="block px-4 py-2 text-white bg-gray-900 rounded">
                {link.linkName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  // const AccountLink = (
  //   <NavLink
  //     to={loggedIn ? "/account" : "/signin"}
  //     className={({ isActive, isPending, isTransitioning }) =>
  //       [
  //         isPending ? "pending" : "",
  //         isActive ? "active" : "",
  //         isTransitioning ? "transitioning" : "",
  //       ].join(" ")
  //     }
  //   >
  //     <li>
  //       <AccountCircleIcon fontSize="large" />
  //     </li>
  //   </NavLink>
  // );

  // const linksWithNavLink = (
  //   <div className="navbar-links-container">
  //     {navbarLinks.map((link, index) => (
  //       <NavLink
  //         onClick={() => setShowNavbar(false)}
  //         key={index}
  //         to={link.linkRoute}
  //         className={({ isActive, isPending, isTransitioning }) =>
  //           [
  //             isPending ? "pending" : "",
  //             isActive ? "active" : "",
  //             isTransitioning ? "transitioning" : "",
  //           ].join(" ")
  //         }
  //       >
  //         <li>{link.linkName}</li>
  //       </NavLink>
  //     ))}
  //     {AccountLink}
  //   </div>
  // );

  {
    /* <header className="nav-bar">
          <nav>
            <nav aria-label="Larger viewport navigation menu with links" className="main-navbar-ul">
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
            </nav>
          </nav>
        </header> */
  }

  return (
    <div className="root-layout">
      <header className="bg-gray-800">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              <a href="#">Logo</a>
            </div>
            {desktopLinks}
            <div className="md:hidden">
              <button className="outline-none mobile-menu-button">
                <svg
                  className="w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          {mobileLinks}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

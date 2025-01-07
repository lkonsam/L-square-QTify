import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.searchDesktop}>
          <Search
            placeholder="Search a song of your choice"
            searchData={searchData}
          />
        </div>
        <Button>Give Feedback</Button>
      </nav>

      {/* Mobile Search Bar */}
      <div className={styles.searchMobile}>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
      </div>
    </>
  );
}

export default Navbar;

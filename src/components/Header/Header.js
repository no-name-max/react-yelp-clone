import React from "react";
import { Link } from "react-router";

import styles from "./styles.module.css";

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Link className={styles.logo} to="/">
          <h1>Yelp Clone</h1>
        </Link>
        <section>
          <a href="https://github.com/ahmed-belhadj/react-yelp-clone">
            View source on GitHub
          </a>
        </section>
      </div>
    );
  }
}

export default Header;

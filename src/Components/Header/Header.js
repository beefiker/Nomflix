import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/tv">TV</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
// export default () => (
//   <header>
//     <ul>
//       <li>
//         <a href="/">Home</a>
//       </li>
//       <li>
//         <a href="/tv">TV</a>
//       </li>
//       <li>
//         <a href="/search">Search</a>
//       </li>
//     </ul>
//   </header>
// );

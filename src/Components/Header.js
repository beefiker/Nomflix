import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

const Header = () => {
  return (
    <header>
      <List>
        <Item>
          <SLink to="/">Home</SLink>
        </Item>
        <Item>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
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

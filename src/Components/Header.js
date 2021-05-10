import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const MyHeader = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${(props) => (props.current ? "yellow" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  &:hover {
    border-bottom: 3px solid ${(props) => (!props.current ? "gray" : "yellow")};
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <MyHeader>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </MyHeader>
  );
};

export default withRouter(Header);
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

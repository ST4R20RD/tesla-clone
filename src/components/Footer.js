import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <List>
      <li>Tesla © 2022</li>
      <li>Privacy & Legal</li>
      <li>Vehicle Recalls</li>
      <li>Contact</li>
      <li>Careers </li>
      <li>News</li>
      <li>Engage</li>
      <li>Locations</li>
    </List>
  );
}

export default Footer;

const List = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  margin: 20px;
  li {
    padding: 0 0 5px 15px;
    color: rgba(60, 60, 60, 0.8);
  }
`;

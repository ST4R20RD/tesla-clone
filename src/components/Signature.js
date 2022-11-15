import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

function Signature() {
  return (
    <Container>
      <p>
        Clone by{" "}
        <a
          href="https://www.linkedin.com/in/goncaloestrelado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gonçalo Estrelado
        </a>
      </p>
      <p>
        <Link
          href="https://github.com/ST4R20RD/tesla-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          &nbsp;ST4RL0RD
        </Link>
      </p>
    </Container>
  );
}

export default Signature;

const Container = styled.div`
  position: absolute;
  font-size: 10px;
  margin-top: 40px;
  padding: 15px;
  min-width: 150px;
  @media (max-width: 385px) {
    font-size: 15px;
    p {
      padding-top: 5px
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

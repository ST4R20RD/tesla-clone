import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const cars = useSelector(selectCars);

  const isDesktop = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <Container>
      <LogoWrapper>
        <a href="/">
          <img src="/images/logo.svg" alt="" />
        </a>
      </LogoWrapper>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <Button href="#" key={index}>
                {car}
              </Button>
            );
          })}
        <Button href="#">Solar Roof</Button>
        <Button href="#">Solar Panels</Button>
      </Menu>
      <RightMenu>
        <Button href="#">Shop</Button>
        <Button href="#">Account</Button>
        <CustomMenu onClick={() => setBurgerOpen(true)}>Menu</CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerOpen(false)} />
        </CloseWrapper>
        {cars &&
          isDesktop &&
          cars.map((car, index) => {
            return (
              <li>
                <Button href="#" key={index}>
                  {car}
                </Button>
              </li>
            );
          })}
        <li>
          <Button href="#">Existing Inventory</Button>
        </li>
        <li>
          <Button href="#">Used Inventory</Button>
        </li>
        <li>
          <Button href="#">Trade-in</Button>
        </li>
        <li>
          <Button href="#">Cybertruck</Button>
        </li>
        <li>
          <Button href="#">Roadster</Button>
        </li>
        <li>
          <Button href="#">Semi</Button>
        </li>
        <li>
          <Button href="#">Charging</Button>
        </li>
        <li>
          <Button href="#">Powerwall</Button>
        </li>
        <li>
          <Button href="#">Commercial Energy</Button>
        </li>
        <li>
          <Button href="#">Utilities</Button>
        </li>
        <li>
          <Button href="#">Find Us</Button>
        </li>
        <li>
          <Button href="#">Support</Button>
        </li>
        <li>
          <Button href="#">Investor Relations</Button>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const LogoWrapper = styled.div`
  width: 12vw;
`;

const Button = styled.a`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 8px 10px;
  border-radius: 5px;
  flex-wrap: nowrap;
  text-decoration: none;
  :hover {
    background-color: rgba(63, 63, 63, 0.1);
    transition: background-color 500ms linear;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  width: 12vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 385px) {
    a {
      display: none;
    }
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 8px 10px;
  border-radius: 5px;
  flex-wrap: nowrap;
  text-decoration: none;
  :hover {
    background-color: rgba(63, 63, 63, 0.1);
    transition: background-color 500ms linear;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  border-radius: 5px;
  :hover {
    background-color: rgba(63, 63, 63, 0.1);
    transition: background-color 500ms linear;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

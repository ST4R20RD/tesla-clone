import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
  const sectionId = title.replaceAll(' ', '').toLowerCase()
  return (
    <Wrap bgImage={backgroundImg} id={sectionId}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          {description === "car" ? (
            <div style={{padding: '20px 0'}}>
              <p>
                Order Online for <a href="#">Touchless Delivery</a>
              </p>
            </div>
          ) : (
            <p>{description}</p>
          )}
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          {rightBtnText ? (
            <>
              <Fade left>
                <LeftButton>{leftBtnText}</LeftButton>
              </Fade>
              <Fade right>
                <RightButton>{rightBtnText}</RightButton>
              </Fade>
            </>
          ) : (
            <Fade>
              <LeftButton>{leftBtnText}</LeftButton>
            </Fade>
          )}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  @media (max-width: 385px) {
    height: 93.5vh;
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-weight: 300;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

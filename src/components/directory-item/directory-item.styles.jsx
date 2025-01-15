import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 15px;
  padding: 0 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* outline: 25px solid #ff635e; */
  background-color: #ff635e;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-family: "Press Start 2P", serif;
    font-weight: 400;
    font-style: normal;

    margin: 0 6px 0;
    font-size: 10px;
    color: white;
    text-shadow: black -2px 1px;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-bottom: 3px solid #ff635e;
  border-left: 3px solid #ff635e;
  border-top: 3px solid #f4cbca;
  border-right: 3px solid #f4cbca;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      height: 60px;
      padding: 0 10px;
      opacity: 1;
      border-bottom: 10px solid #9c1c18;
      border-left: 10px solid #9c1c18;
      /* outline: 25px solid #ff635e; */
      background-color: #ff635e;
      h2 {
        color: white;
        text-shadow: none;
      }
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

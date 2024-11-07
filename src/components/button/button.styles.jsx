import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-family: "Pixelify Sans", serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  background-color: black;
  color: white;
  text-transform: uppercase;
  //font-family: "Open Sans Condensed";
  /* font-weight: bolder; */
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #ff635e;
  color: white;

  &:hover {
    background-color: #9c1c18;
    border: none;
    color: #ff635e;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #ff635e;
  color: white;
  border: none;
  text-shadow: black -2px 1px;

  &:hover {
    /* outline: 25px solid #ff635e; */
    background-color: #9c1c18;
    color: white;
    border: 1px solid #9c1c18;
    text-shadow: none;
  }
`;

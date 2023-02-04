import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./Button";
import { darkTheme, GlobalStyles, lightTheme } from "./theme";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
 console.log('togge')
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <HeaderStyle>
        <H1>Type Calculator</H1>
        <BoxButton>
          {isDarkTheme ? (
            <Button onClick={toggleTheme}>🌙</Button>
          ) : (
            <Button onClick={toggleTheme}>☀️</Button>
          )}
        </BoxButton>
      </HeaderStyle>
    </ThemeProvider>
  );
};

export default Header;

const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(
      217deg,
      rgba(235, 54, 54, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(51, 237, 51, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(
      336deg,
      hsla(240, 72.33201581027666%, 49.6078431372549%, 0.8),
      rgba(0, 0, 255, 0) 70.71%
    );
  display: flex;
  justify-content: space-around;
`;
const H1 = styled.h1`
  margin-top: 2rem;
`;
const BoxButton=styled.div`
  margin-top: 1.5rem;
`
import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
export const lightTheme = {
  body: 'bisque',
  text: '#121212'
};
export const darkTheme = {
  body: '#121212',
  text: 'bisque'
};
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px; 
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }

  img {
    width: 100%;
    border-radius: 4px;
}

  figure {
    margin: 0;
    display: flex;
    margin-bottom: 10px;
    break-inside: avoid;
}


.container {
  margin: 10px 5px 10px 5px; 
  column-count: 5;
  column-gap: 10px;
}
`;
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  button{
    margin:0;
    padding:0;
    border:none;
    background-color:inherit;
    border-radius: inherit;
    cursor:pointer;
  }
`;

export default GlobalStyle;

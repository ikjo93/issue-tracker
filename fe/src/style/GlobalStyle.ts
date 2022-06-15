import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  button{
    margin:0;
    padding:0;
    border:none;
    background-color:inherit;
    border-radius: inherit;
    cursor:pointer;
  }
  input{
    border:none;
    border-radius:inherit;
    margin:0;
    padding:0;
    :focus-visible{
      outline:none;
    }
  }
  a{
    text-decoration:none;
  }
`;

export default GlobalStyle;

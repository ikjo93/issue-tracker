import githubMarkdownDark from 'github-markdown-css/github-markdown-dark.css';
import githubMarkdownLight from 'github-markdown-css/github-markdown-light.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  ${({ isDarkMode }) => (isDarkMode ? githubMarkdownDark : githubMarkdownLight)}
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
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
  textarea{
    margin:0;
    padding:0;
    border:none;
    height:auto;
    max-width:100%;
    background-color:inherit;
    border-radius:inherit;
    color:inherit;
    :focus-visible{
      outline:none;
    }
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  body{
    background-color: ${({ theme }) => theme.palette.bgColor};
    color: ${({ theme }) => theme.palette.fontColor};
  }
  // custom github-markdown-css
  .markdown-body {
    background-color: inherit;
    color: inherit;
  }
  .markdown-body pre {
    background-color: ${({ theme }) => theme.palette.darkerBgColor};
  }
  .markdown-body [type=checkbox] {
    margin-right: 1rem;
  }
  .markdown-body ul {
    list-style: revert;
  }
`;

export default GlobalStyle;

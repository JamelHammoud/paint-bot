import { createGlobalStyle } from 'styled-components'
import '../fonts/index.css'

export const Global = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    background-color: ${({ theme }) => theme.color.gray[100]};
    color: ${({ theme }) => theme.color.foreground};
    font-size: 1rem;
    margin: 0;
    font-family: ${({ theme }) => theme.typeface.sans};
    overscroll-behavior-y: none;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0;
  }

  label {
    cursor: auto;
  }

  input, button, select, textarea {
    -webkit-appearance: none;
    outline: none;
    font-family: ${({ theme }) => theme.typeface.sans};
    margin: 0;
    padding: 0;
    font-size: 1rem;
    border: 0;
  }

  input::placeholder {
    color: ${({ theme }) => theme.color.gray[500]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: inherit;
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.amber[50]} inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.amber[50]} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-webkit-autofill::first-line {
    font-family: ${({ theme }) => theme.typeface.sans};
    font-size: 1rem !important;
    color: ${({ theme }) => theme.color.gray[700]};
  }

  button:hover, a:hover {
    cursor: pointer;
  }
`

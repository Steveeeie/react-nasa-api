import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme: { color, spacing } }) => css`
    * {
      border: 0;
      box-sizing: border-box;
      color: inherit;
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 14px;
    }

    body {
      background-color: ${color.red.regular};
      color: ${color.dark.regular};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      line-height: 1.6;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      &:not(:last-child) {
        margin-bottom: ${spacing(4)};
      }
    }

    img,
    video {
      width: 100%;
    }
  `}
`;

export default GlobalStyle;

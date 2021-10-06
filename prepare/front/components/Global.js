import { css, Global } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

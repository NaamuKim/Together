import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

const style = css`
  ${emotionReset} {
    @font-face {
      font-family: "Noto Sans CJK KR", serif;
      font-style: normal;
      font-weight: 100;
      src: url("../styles/fonts/NotoSansKR-Light.woff2") format("woff2"),
        url("../styles/fonts/NotoSansKR-Light.woff") format("woff"),
        url("../styles/fonts/NotoSansKR-Light.otf") format("truetype");
    }
  }

  @font-face {
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: normal;
    src: url("../styles/fonts/NotoSansKR-Regular.woff2") format("woff2"),
      url("../styles/fonts/NotoSansKR-Regular.woff") format("woff"),
      url("../styles/fonts/NotoSansKR-Regular.otf") format("truetype");
  }

  @font-face {
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    src: url("../styles/fonts/NotoSansKR-Medium.woff2") format("woff2"),
      url("../styles/fonts/NotoSansKR-Medium.woff") format("woff"),
      url("../styles/fonts/NotoSansKR-Medium.otf") format("truetype");
  }

  @font-face {
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: bold;
    src: url("../styles/fonts/NotoSansKR-Bold.woff2") format("woff2"),
      url("../styles/fonts/NotoSansKR-Bold.woff") format("woff"),
      url("../styles/fonts/NotoSansKR-Bold.otf") format("truetype");
  }
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Noto Sans CJK KR", sans-serif;
    box-sizing: border-box;
    background-color: #1f3b4d;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .ant-col:first-of-type {
    padding-left: 0 !important;
  }
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

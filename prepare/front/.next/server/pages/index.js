(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global */ "./components/Global.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _LogInForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogInForm */ "./components/LogInForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\AppLayout.js";










const AppLayout = ({
  children
}) => {
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Global__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
      gutter: 8,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
        xs: 24,
        md: 6,
        children: me ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_UserProfile__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_LogInForm__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 35
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
        xs: 24,
        md: 12,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
        xs: 24,
        md: 6,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          href: "https://lost731.github.io",
          target: "_black",
          rel: "noreferrer noopener",
          children: "made by KimNaMu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          href: "https://github.com/CheezeLatte",
          target: "_black",
          rel: "noreferrer noopener",
          children: "made by CheeseLatte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

AppLayout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\CommentForm.js";







const CommentForm = ({
  post
}) => {
  const [commentText, onChangeCommentText, setCommentText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)("");
  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    console.log(commentText);
  }, [commentText]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
        type: "primary",
        htmlType: "submit",
        children: "\u2714"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

CommentForm.propTypes = {
  post: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);

/***/ }),

/***/ "./components/Global.js":
/*!******************************!*\
  !*** ./components/Global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion-reset */ "emotion-reset");
/* harmony import */ var emotion_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion_reset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\Global.js";



const style = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  ${(emotion_reset__WEBPACK_IMPORTED_MODULE_1___default())} {
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
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const GlobalStyle = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.Global, {
    styles: style
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\Header.js";






const NavStyle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().nav)`
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #017374;
  z-index: 10;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 8px 8px;
  }
`;
const TogetherDiv = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  padding-left: 10px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    padding-right: 15px;
    padding-bottom: 10px;
  }
`;
const List = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().ul)`
  display: flex;
  justify-content: center;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    align-items: center;
    display: ${({
  openedMenu
}) => openedMenu ? "none" : "flex"};
  } ;
`;
const Item = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().li)`
  width: 100px;
  border-bottom: 5px solid transparent;
  transition: border-bottom.5s ease-in-out;
  display: flex;
  justify-content: center;
  padding: 8px 12px;
  align-items: center;
  &:hover {
    background-color: #d49466;
    border-radius: 7px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    &:hover {
      border-radius: 5px;
    }
  }
`;
const MenuContent = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().span)`
  cursor: pointer;
`;
const Home = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().span)`
  cursor: pointer;
  padding-left: 5px;
`;
const Menu = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().a)`
  display: none;
  position: absolute;
  left: 10px;
  font-size: 20px;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const {
    0: openedMenu,
    1: setOpenedMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onCLickMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setOpenedMenu(prev => !prev);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavStyle, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TogetherDiv, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Home, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGlobeAsia,
            color: "#D0FEFE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined), "Together"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(List, {
      openedMenu: openedMenu,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Item, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/profile",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuContent, {
            children: "\uD504\uB85C\uD544"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Item, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuContent, {
            children: "\uCEE4\uBBA4\uB2C8\uD2F0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Item, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/signup",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuContent, {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Menu, {
      href: "#",
      onClick: onCLickMenu,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBars
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./components/LogInForm.js":
/*!*********************************!*\
  !*** ./components/LogInForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useinput */ "./hooks/useinput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\LogInForm.js";








const FormWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Form)`
  padding: 10px;
`;
const EmailDiv = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  margin-bottom: 5px;
`;
const PasswordDiv = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  outline: none;
`;
const Input = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().input)`
  width: 100%;
  height: 30px;
  border-radius: 30px;
  padding: 0 20px;
  margin-top: 10px;
  border: 1px solid lightgray;
  font-size: 12px;
`;
const ButtonWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Label = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().label)`
  color: white;
`;
const Button = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().button)`
  background: linear-gradient(to left, rgb(255, 77, 46), rgb(255, 155, 47));
  width: 100%;
  height: 35px;
  border: 0;
  outline: none;
  border-radius: 40px;
  color: white;
  font-size: 15px;
  letter-spacing: 2px;
  cursor: pointer;
`;

const LogInForm = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    logInLoading,
    logInError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user);
  const [email, onChangeEmail] = (0,_hooks_useinput__WEBPACK_IMPORTED_MODULE_4__.default)("");
  const [password, onChangePassword] = (0,_hooks_useinput__WEBPACK_IMPORTED_MODULE_4__.default)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  const onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_6__.loginRequestAction)({
      email,
      password
    }));
  }, [email, password]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(FormWrapper, {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(EmailDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Label, {
        htmlFor: "user-id",
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Input, {
        name: "user-id",
        value: email,
        onChange: onChangeEmail,
        type: "email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(PasswordDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Label, {
        htmlFor: "user-password",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Input, {
        name: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ButtonWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Button, {
        type: "primary",
        htmlType: "submit",
        loading: logInLoading,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Button, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "signup",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogInForm);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\PostCard.js";











const StyledDiv = (_emotion_styled__WEBPACK_IMPORTED_MODULE_5___default().div)`
  margin-bottom: 20px;
`;

const PostCard = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.user);
  const {
    0: liked,
    1: setLiked
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onLike = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__.LIKE_POST_REQUEST,
      data: post.id
    });
  }, [id]);
  const onUnlike = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id
    });
  }, []);
  const onToggleComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(StyledDiv, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
      cover: post.Images[0] && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_PostImages__WEBPACK_IMPORTED_MODULE_4__.default, {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 34
      }, undefined),
      actions: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.RetweetOutlined, {
        onClick: onShare
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined), liked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.HeartTwoTone, {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.HeartOutlined, {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined), commentFormOpened ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.MessageTwoTone, {
        twoToneColor: "#eb2f96",
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.MessageOutlined, {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Popover, {
        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button.Group, {
          children: id && post.User.id === id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
              type: "danger",
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 21
            }, undefined)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }, undefined),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EllipsisOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined)],
      extra: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(FollowButton, {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 16
      }, undefined),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Image, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), commentFormOpened && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_CommentForm__WEBPACK_IMPORTED_MODULE_6__.default, {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        header: `${post.Comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Comment, {
            author: item.User.nickname,
            avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
              children: "item.User.nickname"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 27
            }, undefined),
            content: item.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    User: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    createdAt: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
    TogetherId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    Together: prop_types__WEBPACK_IMPORTED_MODULE_3___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().any))
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);

/***/ }),

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\PostForm.js";







const PostForm = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    imagePaths,
    addPostDone
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.post);
  const [text, onChangeText, setText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!text || text.trim()) {
      return alert("게시글을 작성하세요.");
    }

    const formData = new FormData();
    imagePaths.forEach(p => {
      formData.append("image", p);
    });
    formData.append("context", text);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__.ADD_POST_REQUEST,
      data: data
    });
  }, [text, imagePaths]);
  const imageInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const onClickImageUpload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__.UPLOAD_IMAGES_REQUEST,
      data: imageFormData
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
    style: {
      margin: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input.TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC624\uB298 \uC720\uC800\uB2D8\uC774 \uBB34\uC2A8 \uC77C\uC774 \uC788\uC73C\uC168\uB294 \uC9C0 \uAD81\uAE08\uD569\uB2C8\uB2E4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        type: "primary",
        style: {
          float: "right"
        },
        htmlType: "submit",
        children: "Together"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostForm);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagesZoom */ "./components/imagesZoom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\PostImages.js";







const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onZoom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
        role: "presentation",
        src: `http://localhost:8080/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), showImagesZoom && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_imagesZoom__WEBPACK_IMPORTED_MODULE_3__.default, {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 28
      }, undefined)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
        role: "presentation",
        width: "50%",
        src: `http://localhost:8080/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
        role: "presentation",
        width: "50%",
        src: `http://localhost:8080/${images[1].src}`,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
      role: "presentation",
      width: "50%",
      src: "data:image/jpeg;base64,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",
      alt: images[0].src,
      onClick: onZoom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      role: "presentation",
      style: {
        display: "inline-block",
        width: "50%",
        textAlign: "center",
        verticalAlign: "middle"
      },
      onClick: onZoom,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.PlusOutlined, {
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), showImagesZoom && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_imagesZoom__WEBPACK_IMPORTED_MODULE_3__.default, {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostImages);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\UserProfile.js";







const UserProfile = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    me,
    logOutLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user);
  const onLogOut = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_4__.logoutRequestAction)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
    actions: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/user/${me.id}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: ["\uAC8C\uC2DC\uBB3C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined), me.posts.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined)
    }, "posts", false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/profile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: ["\uD314\uB85C\uC789", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined), me.followings.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)
    }, "followings", false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/profile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, undefined), me.followers.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined)
    }, "followers", false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined)],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
      avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/user/${me.id}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            children: me.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: onLogOut,
      loading: logOutLoading,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);

/***/ }),

/***/ "./components/imagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/imagesZoom/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/imagesZoom/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\imagesZoom\\index.js";






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Overlay, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Header, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CloseBtn, {
        onClick: onClose,
        children: "\u2716"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.SlickWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
          initialSlide: 0,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ImgWrapper, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: `http://localhost:8080/${v.src}`,
              alt: v.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, undefined)
          }, v.src, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Indicator, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            children: [currentSlide + 1, " / ", images.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagesZoom);

/***/ }),

/***/ "./components/imagesZoom/styles.js":
/*!*****************************************!*\
  !*** ./components/imagesZoom/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overlay": () => (/* binding */ Overlay),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "CloseBtn": () => (/* binding */ CloseBtn),
/* harmony export */   "SlickWrapper": () => (/* binding */ SlickWrapper),
/* harmony export */   "ImgWrapper": () => (/* binding */ ImgWrapper),
/* harmony export */   "Indicator": () => (/* binding */ Indicator)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);



const Overlay = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Header = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().header)`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;
const CloseBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;
const SlickWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  height: calc(100% - 44px);
  background: #898989;
`;
const ImgWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  padding: 32px;
  text-align: center;
  &img {
    margin: 0 auto;
    max-height: 750px;
  }
`;
const Indicator = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backUrl": () => (/* binding */ backUrl)
/* harmony export */ });
const backUrl = "http://www.2gether.tk:3000";

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = (initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

/***/ }),

/***/ "./hooks/useinput.js":
/*!***************************!*\
  !*** ./hooks/useinput.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = (initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\pages\\index.js";














const Home = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.post); // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     dispatch({
  //       type: LOG_OUT_REQUEST,
  //     });
  //   }
  // });

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__.LOAD_POSTS_REQUEST,
            lastId
          });
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("title", {
        children: "Together"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), mainPosts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_8__.default.getServerSideProps(async context => {
  const refreshToken = context.req ? context.req.headers.common["x-refresh-token"] : "";
  (axios__WEBPACK_IMPORTED_MODULE_10___default().defaults.headers.common["x-refresh-token"]) = "";
  console.log(refreshToken);

  if (context.req && refreshToken) {
    (axios__WEBPACK_IMPORTED_MODULE_10___default().defaults.headers.common["x-refresh-token"]) = refreshToken;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__.LOAD_MY_INFO_REQUEST
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__.LOAD_POSTS_REQUEST
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_9__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



 //(이전 상태 , 액션)=> 다음 상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;

    default:
      {
        const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
          user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
          post: _post__WEBPACK_IMPORTED_MODULE_3__.default
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "LIKE_POST_REQUEST": () => (/* binding */ LIKE_POST_REQUEST),
/* harmony export */   "LIKE_POST_SUCCESS": () => (/* binding */ LIKE_POST_SUCCESS),
/* harmony export */   "LIKE_POST_FAILURE": () => (/* binding */ LIKE_POST_FAILURE),
/* harmony export */   "UNLIKE_POST_REQUEST": () => (/* binding */ UNLIKE_POST_REQUEST),
/* harmony export */   "UNLIKE_POST_SUCCESS": () => (/* binding */ UNLIKE_POST_SUCCESS),
/* harmony export */   "UNLIKE_POST_FAILURE": () => (/* binding */ UNLIKE_POST_FAILURE),
/* harmony export */   "ADD_POST_REQUEST": () => (/* binding */ ADD_POST_REQUEST),
/* harmony export */   "ADD_POST_SUCCESS": () => (/* binding */ ADD_POST_SUCCESS),
/* harmony export */   "ADD_POST_FAILURE": () => (/* binding */ ADD_POST_FAILURE),
/* harmony export */   "UPLOAD_IMAGES_REQUEST": () => (/* binding */ UPLOAD_IMAGES_REQUEST),
/* harmony export */   "UPLOAD_IMAGES_SUCCESS": () => (/* binding */ UPLOAD_IMAGES_SUCCESS),
/* harmony export */   "UPLOAD_IMAGES_FAILURE": () => (/* binding */ UPLOAD_IMAGES_FAILURE),
/* harmony export */   "LOAD_POSTS_REQUEST": () => (/* binding */ LOAD_POSTS_REQUEST),
/* harmony export */   "LOAD_POSTS_SUCCESS": () => (/* binding */ LOAD_POSTS_SUCCESS),
/* harmony export */   "LOAD_POSTS_FAILURE": () => (/* binding */ LOAD_POSTS_FAILURE),
/* harmony export */   "REMOVE_POST_REQUEST": () => (/* binding */ REMOVE_POST_REQUEST),
/* harmony export */   "REMOVE_POST_SUCCESS": () => (/* binding */ REMOVE_POST_SUCCESS),
/* harmony export */   "REMOVE_POST_FAILURE": () => (/* binding */ REMOVE_POST_FAILURE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePOstError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null
};
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

const postReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
        }
        break;

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postReducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "LOAD_MY_INFO_REQUEST": () => (/* binding */ LOAD_MY_INFO_REQUEST),
/* harmony export */   "LOAD_MY_INFO_SUCCESS": () => (/* binding */ LOAD_MY_INFO_SUCCESS),
/* harmony export */   "LOAD_MY_INFO_FAILURE": () => (/* binding */ LOAD_MY_INFO_FAILURE),
/* harmony export */   "LOAD_USER_REQUEST": () => (/* binding */ LOAD_USER_REQUEST),
/* harmony export */   "LOAD_USER_SUCCESS": () => (/* binding */ LOAD_USER_SUCCESS),
/* harmony export */   "LOAD_USER_FAILURE": () => (/* binding */ LOAD_USER_FAILURE),
/* harmony export */   "LOG_IN_REQUEST": () => (/* binding */ LOG_IN_REQUEST),
/* harmony export */   "LOG_IN_SUCCESS": () => (/* binding */ LOG_IN_SUCCESS),
/* harmony export */   "LOG_IN_FAILURE": () => (/* binding */ LOG_IN_FAILURE),
/* harmony export */   "LOG_OUT_REQUEST": () => (/* binding */ LOG_OUT_REQUEST),
/* harmony export */   "LOG_OUT_SUCCESS": () => (/* binding */ LOG_OUT_SUCCESS),
/* harmony export */   "LOG_OUT_FAILURE": () => (/* binding */ LOG_OUT_FAILURE),
/* harmony export */   "SIGN_UP_REQUEST": () => (/* binding */ SIGN_UP_REQUEST),
/* harmony export */   "SIGN_UP_SUCCESS": () => (/* binding */ SIGN_UP_SUCCESS),
/* harmony export */   "SIGN_UP_FAILURE": () => (/* binding */ SIGN_UP_FAILURE),
/* harmony export */   "CHANGE_NICKNAME_REQUEST": () => (/* binding */ CHANGE_NICKNAME_REQUEST),
/* harmony export */   "CHANGE_NICKNAME_SUCCESS": () => (/* binding */ CHANGE_NICKNAME_SUCCESS),
/* harmony export */   "CHANGE_NICKNAME_FAILURE": () => (/* binding */ CHANGE_NICKNAME_FAILURE),
/* harmony export */   "FOLLOW_REQUEST": () => (/* binding */ FOLLOW_REQUEST),
/* harmony export */   "FOLLOW_SUCCESS": () => (/* binding */ FOLLOW_SUCCESS),
/* harmony export */   "FOLLOW_FAILURE": () => (/* binding */ FOLLOW_FAILURE),
/* harmony export */   "UNFOLLOW_REQUEST": () => (/* binding */ UNFOLLOW_REQUEST),
/* harmony export */   "UNFOLLOW_SUCCESS": () => (/* binding */ UNFOLLOW_SUCCESS),
/* harmony export */   "UNFOLLOW_FAILURE": () => (/* binding */ UNFOLLOW_FAILURE),
/* harmony export */   "REMOVE_FOLLOWER_REQUEST": () => (/* binding */ REMOVE_FOLLOWER_REQUEST),
/* harmony export */   "REMOVE_FOLLOWER_SUCCESS": () => (/* binding */ REMOVE_FOLLOWER_SUCCESS),
/* harmony export */   "REMOVE_FOLLOWER_FAILURE": () => (/* binding */ REMOVE_FOLLOWER_FAILURE),
/* harmony export */   "LOAD_FOLLOWINGS_REQUEST": () => (/* binding */ LOAD_FOLLOWINGS_REQUEST),
/* harmony export */   "LOAD_FOLLOWINGS_SUCCESS": () => (/* binding */ LOAD_FOLLOWINGS_SUCCESS),
/* harmony export */   "LOAD_FOLLOWINGS_FAILURE": () => (/* binding */ LOAD_FOLLOWINGS_FAILURE),
/* harmony export */   "LOAD_FOLLOWERS_REQUEST": () => (/* binding */ LOAD_FOLLOWERS_REQUEST),
/* harmony export */   "LOAD_FOLLOWERS_SUCCESS": () => (/* binding */ LOAD_FOLLOWERS_SUCCESS),
/* harmony export */   "LOAD_FOLLOWERS_FAILURE": () => (/* binding */ LOAD_FOLLOWERS_FAILURE),
/* harmony export */   "loginRequestAction": () => (/* binding */ loginRequestAction),
/* harmony export */   "logoutRequestAction": () => (/* binding */ logoutRequestAction),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadMyInfoLoading: false,
  // 내 정보 로딩 시도중
  loadMyInfoDone: false,
  loadMyInfoError: false,
  loadUserLoading: false,
  // 유저 정보 로딩중
  loadUserError: false,
  loadUserDone: false,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: false,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: false,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: false,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpFailure: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameFailure: null,
  me: null,
  userinfo: null,
  signUpData: {},
  logInData: {}
};
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.removeFollowerDone = true;
      draft.me.followers = draft.me.followers.filter(v => v.id !== action.data.UserId);
      break;

    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsDone = true;
      draft.me.followings = action.data;
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.loadFollowersDone = true;
      draft.me.followers = action.data;
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true;
      draft.me = action.data;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error.message;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");





(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = _config_config__WEBPACK_IMPORTED_MODULE_4__.backUrl;
function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_user__WEBPACK_IMPORTED_MODULE_3__.default), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_post__WEBPACK_IMPORTED_MODULE_2__.default)]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");




function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(likePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LIKE_POST_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LIKE_POST_FAILURE,
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(unlikePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.UNLIKE_POST_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.UNLIKE_POST_FAILURE,
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addPostAPI, action, data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_FAILURE,
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/post", data);
}

function* uploadImages(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(uploadImagesAPI, action, data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.UPLOAD_IMAGES_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.UPLOAD_IMAGES_FAILURE,
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadPostsAPI, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_POSTS_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_POSTS_FAILURE,
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST, addPost);
}

function* watchUploadImages() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLoadPosts() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_POSTS_REQUEST, loadPosts);
}

function* watchLikePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.UNLIKE_POST_REQUEST, unlikePost);
}

function* postSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUploadImages), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnlikePost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ userSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(followAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_FAILURE,
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/user/followings/${data}/option=unfollow`);
}

function* unfollow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(unfollowAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_FAILURE,
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/user/followers", data);
}

function* loadFollowers(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadFollowersAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_FOLLOWERS_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_FOLLOWERS_FAILURE,
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/user/followings", data);
}

function* loadFollowings(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadFollowingsAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_FOLLOWINGS_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_FOLLOWINGS_FAILURE,
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch("/auth/nickname", {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(changeNicknameAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_NICKNAME_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_NICKNAME_FAILURE,
      error: err.response.data
    });
  }
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/auth/me");
}

function* loadMyInfo() {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadMyInfoAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_MY_INFO_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_MY_INFO_FAILURE,
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api//users/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadUserAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_USER_FAILURE,
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/auth/login", data);
}

function* logIn(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logInAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_SUCCESS,
      data: result.data.data.me
    });
    console.log(result.data);
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["x-refresh-token"]) = result.data.data.refreshToken;
    localStorage.setItem("accessToken", result.data.data.accessToken);
    localStorage.setItem("refreshToken", result.data.data.refreshToken);
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_FAILURE,
      error: err.response.data
    });
  }
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/auth/logout");
}

function* logOut(action) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logOutAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_SUCCESS
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_FAILURE,
      data: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/auth/users", data);
}

function* signUp(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(signUpAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_SUCCESS
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_FAILURE,
      data: err.response.data
    });
  }
}

function* watchSignUp() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_REQUEST, signUp);
}

function* watchChangeNickname() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchLoadMyInfo() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchFollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_REQUEST, logOut);
}

function* userSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchFollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnfollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchChangeNickname), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadMyInfo), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const configureStore = context => {
  console.log(context);
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const middlewares = [sagaMiddleware];
  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middlewares));
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__.default, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__.default);
  return store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(configureStore, {
  debug: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "emotion-reset":
/*!********************************!*\
  !*** external "emotion-reset" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("emotion-reset");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvR2xvYmFsLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL0xvZ0luRm9ybS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvUG9zdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvaW1hZ2VzWm9vbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvaW1hZ2VzWm9vbS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ob29rcy91c2VpbnB1dC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJlbW90aW9uLXJlc2V0XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvaWdub3JlZHxDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi9HbG9iYWxcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTG9nSW5Gb3JtIGZyb20gXCIuL0xvZ0luRm9ybVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xuXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHbG9iYWwgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9nSW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbG9zdDczMS5naXRodWIuaW9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYWNrXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIG1hZGUgYnkgS2ltTmFNdVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DaGVlemVMYXR0ZVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhY2tcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgbWFkZSBieSBDaGVlc2VMYXR0ZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KFwiXCIpO1xuXG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb21tZW50VGV4dCk7XG4gIH0sIFtjb21tZW50VGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XG4gICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9XG4gICAgICAgICAgcm93cz17NH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAg4pyUXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcbiIsImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgZW1vdGlvblJlc2V0IGZyb20gXCJlbW90aW9uLXJlc2V0XCI7XG5cbmNvbnN0IHN0eWxlID0gY3NzYFxuICAke2Vtb3Rpb25SZXNldH0ge1xuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiLCBzZXJpZjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUxpZ2h0Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgQ0pLIEtSXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1NZWRpdW0ub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUJvbGQub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICB9XG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmM2I0ZDtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5hbnQtcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtY29sOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuYW50LWNvbDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gKCkgPT4ge1xuICByZXR1cm4gPEdsb2JhbCBzdHlsZXM9e3N0eWxlfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUdsb2JlQXNpYSwgZmFCYXJzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5jb25zdCBOYXZTdHlsZSA9IHN0eWxlZC5uYXZgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3Mzc0O1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xuICB9XG5gO1xuXG5jb25zdCBUb2dldGhlckRpdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogJHsoeyBvcGVuZWRNZW51IH0pID0+IChvcGVuZWRNZW51ID8gXCJub25lXCIgOiBcImZsZXhcIil9O1xuICB9IDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQubGlgXG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLjVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDk0NjY7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgSG9tZSA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuYDtcblxuY29uc3QgTWVudSA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW29wZW5lZE1lbnUsIHNldE9wZW5lZE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbkNMaWNrTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuZWRNZW51KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2U3R5bGU+XG4gICAgICA8VG9nZXRoZXJEaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPEhvbWU+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmVBc2lhfSBjb2xvcj1cIiNEMEZFRkVcIiAvPlxuICAgICAgICAgICAgVG9nZXRoZXJcbiAgICAgICAgICA8L0hvbWU+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvVG9nZXRoZXJEaXY+XG4gICAgICA8TGlzdCBvcGVuZWRNZW51PXtvcGVuZWRNZW51fT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZSE66Gc7ZWEPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7su6TrrqTri4jti7A8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2ajOybkOqwgOyehTwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICA8L0xpc3Q+XG5cbiAgICAgIDxNZW51IGhyZWY9XCIjXCIgb25DbGljaz17b25DTGlja01lbnV9PlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgIDwvTWVudT5cbiAgICA8L05hdlN0eWxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZWlucHV0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxuICBwYWRkaW5nOiAxMHB4O1xuYDtcblxuY29uc3QgRW1haWxEaXYgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XG5gO1xuXG5jb25zdCBQYXNzd29yZERpdiA9IHN0eWxlZC5kaXZgXG4gIG91dGxpbmU6IG5vbmU7XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmA7XG5cbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgNzcsIDQ2KSwgcmdiKDI1NSwgMTU1LCA0NykpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBMb2dJbkZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dChcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvZ0luRXJyb3IpIHtcbiAgICAgIGFsZXJ0KGxvZ0luRXJyb3IpO1xuICAgIH1cbiAgfSwgW2xvZ0luRXJyb3JdKTtcblxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKHsgZW1haWwsIHBhc3N3b3JkIH0pKTtcbiAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxuICAgICAgPEVtYWlsRGl2PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7snbTrqZTsnbw8L0xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbmFtZT1cInVzZXItaWRcIlxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICA8L0VtYWlsRGl2PlxuICAgICAgPFBhc3N3b3JkRGl2PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L0xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICA8L1Bhc3N3b3JkRGl2PlxuICAgICAgPEJ1dHRvbldyYXBwZXI+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvZ0luTG9hZGluZ30+XG4gICAgICAgICAg66Gc6re47J24XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJzaWdudXBcIj5cbiAgICAgICAgICAgIDxhPu2ajOybkOqwgOyehTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxuICAgIDwvRm9ybVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dJbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgQ29tbWVudCwgSW1hZ2UsIExpc3QsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgRWxsaXBzaXNPdXRsaW5lZCxcbiAgSGVhcnRPdXRsaW5lZCxcbiAgSGVhcnRUd29Ub25lLFxuICBNZXNzYWdlT3V0bGluZWQsXG4gIE1lc3NhZ2VUd29Ub25lLFxuICBSZXR3ZWV0T3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSBcIi4vUG9zdEltYWdlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuXG5jb25zdCBTdHlsZWREaXYgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYDtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcbiAgICB9XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHBvc3QuaWQsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZERpdj5cbiAgICAgIDxDYXJkXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cbiAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIG9uQ2xpY2s9e29uU2hhcmV9IC8+LFxuICAgICAgICAgIGxpa2VkID8gKFxuICAgICAgICAgICAgPEhlYXJ0VHdvVG9uZVxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcbiAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblVubGlrZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPlxuICAgICAgICAgICksXG4gICAgICAgICAgY29tbWVudEZvcm1PcGVuZWQgPyAoXG4gICAgICAgICAgICA8TWVzc2FnZVR3b1RvbmVcbiAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXG4gICAgICAgICAgICAgIGtleT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+XG4gICAgICAgICAgKSxcbiAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+XG4gICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cbiAgICAgICAgICA8L1BvcG92ZXI+LFxuICAgICAgICBdfVxuICAgICAgICBleHRyYT17PEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cbiAgICAgID5cbiAgICAgICAgPEltYWdlIC8+XG4gICAgICA8L0NhcmQ+XG4gICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8Q29tbWVudFxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XG4gICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+aXRlbS5Vc2VyLm5pY2tuYW1lPC9BdmF0YXI+fVxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1N0eWxlZERpdj5cbiAgKTtcbn07XG5cblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgVG9nZXRoZXJJZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBUb2dldGhlcjogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkpLFxuICB9KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iLCJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcblxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcbiAgY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhZGRQb3N0RG9uZSkge1xuICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICB9XG4gIH0sIFthZGRQb3N0RG9uZV0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghdGV4dCB8fCB0ZXh0LnRyaW0oKSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC5cIik7XG4gICAgfVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBwKTtcbiAgICB9KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjb250ZXh0XCIsIHRleHQpO1xuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsIGRhdGE6IGRhdGEgfSk7XG4gIH0sIFt0ZXh0LCBpbWFnZVBhdGhzXSk7XG5cbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcblxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpbWFnZXNcIiwgZS50YXJnZXQuZmlsZXMpO1xuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGYpO1xuICAgIH0pO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fVxuICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgID5cbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cbiAgICAgICAgbWF4TGVuZ3RoPXsxNDB9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7Jik64qYIOycoOyggOuLmOydtCDrrLTsiqgg7J287J20IOyeiOycvOyFqOuKlCDsp4Ag6raB6riI7ZWp64uI64ukXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBJbWFnZXNab29tIGZyb20gXCIuL2ltYWdlc1pvb21cIjtcblxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0ltYWdlc1pvb20oZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke2ltYWdlc1swXS5zcmN9YH1cbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAvPlxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke2ltYWdlc1swXS5zcmN9YH1cbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke2ltYWdlc1sxXS5zcmN9YH1cbiAgICAgICAgICBhbHQ9e2ltYWdlc1sxXS5zcmN9XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICB3aWR0aD1cIjUwJVwiXG4gICAgICAgIHNyYz17XG4gICAgICAgICAgXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFvSENCUVVGQmdVRkJRWUdCZ1lHQmdZR2hnWUdCZ2FHQmthR0JnWkdSZ1lHQmdiSUMwa0d4MHBJQmdZSlRjbEtTNHdORFEwR2lNNVB6a3hQaTB5TkRBQkN3c0xFQThRR3hJU0d6Z2dJQ3N3TWpBeU1qSXlOREl5TWpJME1qSXlNakl3TWpJeU1qUTBNakl3TWpJd01qSXlPekl5TURBeU1qUXlNakF5TlRJN01QL0FBQkVJQUxrQkVBTUJJZ0FDRVFFREVRSC94QUFjQUFBQ0FnTUJBUUFBQUFBQUFBQUFBQUFDQXdVR0FRUUhBQWoveEFCRkVBQUNBUUlFQXdZQ0NBTURDd1VBQUFBQkFnTUFFUVFTSVRFRkJrRVRJakpSWVhHQmtRY1VJMEpTY3FHeFlzSFJNNEt5RmlRME5WT1NrNkt6NGZBVlEzUEN3Ly9FQUJrQkFRRUJBUUVCQUFBQUFBQUFBQUFBQUFBQkJBSURCZi9FQUNvUkFRRUFBZ0VFQVFJRUJ3QUFBQUFBQUFBQkFoRURCQkloTVZFVFFTSXlZZEVGSTNHQm9iSEIvOW9BREFNQkFBSVJBeEVBUHdEbkNDbW9LRkJUVUZkSU5CVFZGQWdwaWlxR0xURnBhMHhhb2FvcGdGTFdtaWc4QlJBVmdDakFvTUFWbTFaV3ZXcURBRkV0WXRYbG9ERkVLRmFMTlZnSTFpOUxmRVJyNG5WZmRnTi9lbU5ZMEdiMTZ2Q3MwQVZoaFJFVjYxUVc3aEhBb2NiaFF5a1J6eG5JekFkMTdDNkYxOHlwQXpEVzRONzFYT0tjSmx3ejVKVXkzOExEVkcvSzNYMjM4d0ttdVJPSWRsaWV6Sjdzd3lmM3hjb2Y4Uy8zaFhRdUo5ajJiREVaT3pPK2NnTDZiOWZLMnRCekxsemxtVEZuTzEwaUIxZnExdDFTKzU5ZGg2blN0L24xWW9oQmhZbENvaXRJVkhteHlLV081YnV2cWRkYXNyYzRZS095SzdFS0xBSkd3VUFiQVhBMHJuL00zRVJpTVM4aTN5SEtxWEZqbFZRTnVtdVkvR2dpRFFHamFoTlVMSXJCRkUxQ2FpZ05LY1U0aWxPS0RXWVVwMXJaSXBMaWdTZ3BxaWdRVXhhQWxGYmVHd2trbCt6amQ3YjVFWnJlK1VHMVk0Ymh4SklpTWJLU1N4RytSRkx2YjF5cTF2VzFYckJjQm1uVUVLRVFlQmRsVWVTaitlNTNOeWIxbzRPQ1p5M0xMdGsrN0oxSFUzanNtT1BkYjlsSGtnZERsZEdSdnd1cFUrOW1GNjhvcTlZM2w2UkY3T1FabzJOc3cxN05qb0hYOE5qdUI0aGNIMGpPVHBvNG14Q3M4Y2VKTWVXQjVDdVZIR1lNTHNMSzE4bXA4ajdIbm00dXl6V1hkTDZycnArZThrdThkV2U1VmZ5RWFFV1Byb2FmRkE3ZUZHUHNwUDdWYStKNHB2cVR4WXlaSnNRWkZNSVIwa2VOYnJtTE9td0lENytmd0c5dzNIbkNKaFo4UmpaV1IwSldFUjNTd1VES1d6Mjd1WmJHMzNhOFdoU1JoWENMSVVZSTl3cmxUbFlnMklWdGlSWS9LcEhCOHZZcVZCSkhDeFZ2Q1NVWE1QTlF4Qlllb3FYeEVKbTRkRUkxTEU0eVZVQXRjaCsxZFI1WDFGVE0zRG1uYUNhYUtlSjRWUmNpdEJrYkljd01iTklNbHp2NldIUzlCVHVIOEZubWN4eHh0ZFd5c1dCQ28zazV0M2RxMzRPVU1XNUtsRlFoZ3ZmZTE3M3N3eWc2ZDAvcFVyaXVKR09YRXRpRk1ReFNCVmFGMGtlUHN3RkJJUnVvSXZxTnRQTVdMQllwa0lqOFVnaWhDcThrWXhVb1JtTGxrTGFYVW0xMnZxMTdVSEtYU3hJdHNiSDNHbGVwK05ONUhPVXJkM09WdEdYdm51c09oR3g5cXEvTXVPWUhzVUoxRjN0dVFkbDlCL1VVR2VJY3gySldKUWJHMlluUzQ4bDZpb0tYaUVydG1MRzk3aTNRK25wNlZxMk8xUGp3N0U2aTNXdUxYV2dUVE01ek14WSt0TWh4c2lXQ3lPb0hRTWJENGJVY21Ic1AvTnRhMVdYWFFWTnJwYXVEY2R6RUpLZFQ0WDBGejVOYlkxWWE1cmx0cDUvMHE2Y3ZZM3RJZ0NlK2xsSjh4OTAvSVcrRmR5dWJFcWE4cUVrQUM1SkFBQXVTVHNBQnVmU3ZXcVo0RHhtUEM5LzZ1SkpPanM5Z2c4a1hJYkh6TjcrMWRJc2ZBT1dWdzZIRllzWFpGTWdqM3laQm16TitKOU5Cc1BVN2FMNGZIWTB2S1lFQ3VwRWJTazJqUTZIc2x2dVIvd0M1a0pOOUNCYTJaK2ZKR0JIWVIySUlJWXV3SU9oQkdseFUzeWp6STJLWjQ1RlJXVlZaQWdJQlh3c05TZGlWK2RRVXVYZ0tvMlNURlFvNDNWMW5YNDNhTWFldFAveU54RExuaWtobVhvWTVMMytKQUg2MWEvcEVFZjFVRmxCYk9xbzNWYjNaN0h5S3FSYmJVZVZVSGhveFNPeHc2ekIxRjNDSytZQWo3NEEyOHIvQ2dSaitGencvMnNUb1BNcjNUN09McWZuV2kxVEdPeHVOeUR0Wkp3ampRTzdoWEJWVzhOOVJaMTlOYWlHcWhiQ2hOR2FCalVVSkZLWTAwaWxrVUMyMnJYY1ZzRVVwaFFKV21DZ1dqRkJ1Y0x4UWpsU1FybVZXN3kvaVJnVmRSNmxXWUQxdFhRc1R6VGlMQXhoRmpQZ1pWekJnUDRtMHY1aXdJMklGYzBXdG5EWXFTTzVqa2RMNzVIWmIrOWpyWHZ3OHVPRi9GTzZmRlorbzRjdVNmaHkxZm1MK25OT0lWREpLVWFQVVdaRkdjLzdOTFd1eC93Q1VhbmFxcGcrUFR4SVZqS0Frc3hZeFJ1Mlp0Kzg2azJ2MHFObG5lUTVwSFoyMnU3RmpieXVUdFFyVTV1U1ozZU1rbnhGNE9LOGMxbGJiODFldVp1WnBGa2orcTRrQkdoUm1FZVFoWkNXekFteElOc3VsUTJHNWx4YUlzYXlBS2w4dDBqWWk1dWU4eWs3bW9KYWN0ZVQyV1RFOHhHYkJORk03dkwyeXVoeXFGQ0JRTFhXMXRTL1RyVE1UeFBCeng0ZEpreEdlR01SOXpzZ3JXc0wzZTUrNzVEZXF5cG8xTlFidU1hSE1wdzZ5SUFOZTBaR2JOZlFqS0FCVTIzTTBiU3JpV3dvT0pVQVorMFlSbGd1VU9ZN2JnZEwvQUJxdENzMEJ6eXRJN094dXpzek1mTXNTU2JlNU5VamlrbjI4bjVyZkFBQ3JwVlY0OWhnazJkdkM0MzhqWUt3K1d2eHFaTEd0QmhNNVkrbC81M3Q4NmtrU05RTTJyTUZBRjlyaXdQdGF0YUthMnR4M2dRZGRDZW5zTmJmSDJvYzJZanIzV1VHM3ZsdjVXTmg3Vno2VnR2Z0F3dG1Hd0FIK0szN1gvd0M0cldiaHR0V0ZobEpCOHowSHZldE1jUVpaQSt0MXRjSFE2YjM4amU5Rmg4WXpaa3VTYmZaOWRWTjdFZW92OFJVdWxtMkV3ZDJKZXdGOVQ1ZXdxWTVkakFrZGs4REwrcWtmOTZocEdNbWozREt3REMzM1RwbXQwc1RycDFGV0hsZkRzSVM1SGRaaW9OOXlvQllXMzBMRFhhcmpvc1RCckY2OGF3YTlIREJOYjNBK0kvVjhRa3YzVmJ2ZXFOM1gvUTM5d0swS3dhZ3Uvd0JJK0xVeVFSSHZLcTlvd0I4UWRzb0YvVUkrdjhWUXVNNCtqOXA5Z2Z0SE10ek00S3V5RkxuSUZ6S0FSWmRMVzNONmg4VGlYY2d1YmxVUkIrVkZ5cVBrSzF6UWIvRytMTmlYVjJSVktxVUdVbTJYT3pJTEg4SWEzcmFvMDBUVU5VRFMybzJwYkNvb1hOQXdwaEZMYWdXYUJoUm1oYWdRdEVLRVVRcUF4VEJRQ2pGQVFvMW9CUnJWUXhhYXRLV21yVkJDakZDTjZKYUF3MVpVMWdHaUZRWkJxSzVodzNhUkczM0JuSHJZZ01EOERjZXhyZm1tdFdwZzhVc2tuWXQ5L3dBUDVrdWNwOUN1WWZMMlBPZnA2Y2VybHFwTEM4bW9VRWhSblhRNUVJdmF4dU84UU91bXRTbUI1Ymg3WEl1RW5qQ0JXTGxsZEdMQVdzZEd6Qy9ldGUyVTNxZDVQeEFaT3piZGROZlRUWDVWYm9jT28xQUczbFdQdXZxdGZiakZmWGxiRHlJd2tpUml2VXFML01WQlkva3JzOHB3a0VPYTQxbXpsUUNHdVZDNkJnY200TjduYTJ0OXdyM3pXSHA4dXRPZ2tHb09sTWI2TXA3VmpEOEFUT1pKRWpaaDRYRVlWN0RiTWV1aHFFeDNDK3p3YnRaUXB4VE9odnJsWm51dHVuZUxHcnhqNWdxazFRT084UlY0NDRrYk5sSmR6WWdCbXYzUmZjak1ia2FYdDYxMXhTOXpubHM3VUcxWXZYcXdhMnNURllOWk5DYWc5UTNySm9iVUhtTkNUV1dvYlVVREdnYW1NS0EwQUdnY1V4cVc0b0ZtaE5FYUUxQWdVUW9SUkNnWUtJVUFwZ29DRkdLQmFNVlFhMDFheEJHenNGUldabU5ncWdsaWZJQWFtcnp3TGtKMnMrS2JJdjhBczBJTG44NzdMN0M1OVJWUlRGcklyc1k1Y3dlVUo5V2pzQllITDN2aS9pSjlTYXEzT25MMkd3OEFraVFveGtWUEc3TFlxNU9qRS9oRlRZcEFyTHRZVU5MeEIwb0kzaUU5aHZWYmVZNXN3SkJCdUNOQ0NOaUQwTlN2RTMwTlF0YzExRjc1RjR2SXp1SGNsMUlZRTIxVWpLdzA4ckQvQUhxN0JnTVRkYnNhK2RPQjRobzhSR3ltMTJDbjFEbktRZm4rZ3JzdkJlSXJLblp1TnRHRnlMajNGWk9hYXUydmh5N3BxcE4rR0VTTWZya2lxMXJvY2hzb3Y0RDkwMlByN1ZKWUJValFLSkdmWFJuYk0zc1QxdDY2MUEvK25BTWNzSmNIcVhKdDY5NDF1WVhoOGFBdDJTcS9RNVJtWDJQU3ZPMmE4TkZ4bXZaM0dKZ3FGbUlzb0orVmMxSnZyVTV6UnhObUhacnNHQVkrNEpBL1NvRkxtMXV1ZzlUV3JneDFOc1hQbDUwT05HWTVWVXNlZ1VFay9BYTE2YUYwTm5SMEoyRHF5ayt3SXE2OE80UElRWTR1Nmk5MTNHaGR4b3hZN2tYdlliQVc5U1g0cmdrMGFFTU8wais4aEpOeDVqOExEb3cxRmZSblR6WG5LUy9ENVY2dTc4WTJ6NWMrckRWWnVYNDRJY2F5VHNtVlE0amFTMlRPU3BqWjc2QzZtL29TT3RxazhWaXBCaHNRdVBsaWtabCt3UkdSbXo2MmRBb3VxWHk3OUFmamxyYXBDUXMzaFZqK1VFL3RSTmhaQW5hRkdDWmltY3FRdVlYdXQveGFIVDBOWExnK01iRFFZZkVUWXlSWWl6SXNDeGdqdUZ4a0xaZ2Z1azZpbFl0dnJPQm1NU3NjL0VDeUEyQlBhV0EzTnQzODZteFg4Rnk3aXBrRHh4RW9mQ1N5cG0vS0hJTGZDaHdIQU1UTEkwYVJrTWpCWHpkMElUZTJmcmJTK2dPbFhDWGhabVREdGlvWlltdzZLZ0NTWVlLNFMxaXBad1VQZEczOGdhMHNkeFhzcDhRK0lDcW1KVHN4OVhsV1NXSUlvVldOdXBCK1k2MnFxakllU2NXek1yQkV5c0JkbnZtRE1WREtGQk9XNDYyT3UxVmllTW96SWQxWmxQdXBJUDZpdXQ0TEU5a1k0TXk1eEZHRWpsbFVZbVRLeFpzNEFLaTZnZ0M1NjdWeXJpcEptbEpRb1RMSVNodGRTWFlsU1JvU052aFFhWk5MYWpOTGFvQk5DYUkwQm9wQW9oUWlzaWlHaWpGS1Uwd1VCaW1MU2hURk5CMXprS09CY0dzc2NZVnlHV1J3THVXUW0rdTlpTE1GR25lcXg0akVoRlY5Q3JPaTM5SkhWRkkrTGl1ZWZSdnhtT0lTeHpTSWlrcklwZGdvSnRrY1hQV3dUVDBOYno4d1FuaHp4Q1pPMmpWa1Jia2xqQy8yTGkyNFlJaHY2MVVYSEd6NUpJQitPVmtQL0FsY2ZxZ3FBK2tsdjgxUWVjNi85T1drOGI1aWlrK3JORUpHS1lpT1IxRU13eXBrZFgxS0FFalBhd05SM1BIRzQ1NG8wUkpSYVhOZDQzUlNCRzYyQmJjOTdhb0taZWs0bW1Yb0p0cW9yL0VWME5RcHF4WTVOS2dXak9hd3JtdW9idzlTWll3TiswVC9BQkN1aXE3eFNCbDBJK1I5L1NvejZQZVgwa2FTZDJCYU1oVlFkQzZudnQ1L2VBOVEza0s2SnhIZ1FtUVpkSEd4ck55K2JwcDRwcWJSSjVyS2dab3o4RHBYcCtaSkpWeXhwWm03b1B2NUNnWGxXUmpaM0MyNkRXcDdndkFJNG16WExzT3A2VjVURjYycS93QWM0UDJXREJPcjUwZHo1a25ML3dEYXE0amJFYmpVZkRhdW84VmhSNDNFbWlaVG5KTmdGQXV4djBzTmIrbGMvd0NBY0VreGVGTThQZVpIWkdqWUJTYkJXREkxN0UyY1hVMnNiMnZwZlZ4WHhZeTh2dmE1THpOSVkxYUJGQ1c3emFzVmM2c3JBV3ltOTdYM0ZpS1hEekppU0M3TWdRZUoyWHVnZTRPcDhsR3BPbFVOWGtpYzJMeHV1aHNXUng2RzFqOEt4aU1WSkpZeVNPOXRzN3MxdmE1MHJmanpZVEhWd2x2eStibDAyZHo3cHlXWS9DUy95Z2tXV1dSRlFkbytidm9qbFFORVVGcjJzdGg4S211TmN6U0xCaFdnblZYYU1tWlVFZHc5a3RtRnU3OS9UU3FYUTFtYkUzaCtaOFdpbFZtMExzK3FJeHpPU3pHN0tkeVNmald6TnpLMHVEbWhuZDNrZDBhTnNxaFZWV1FrRzFyZUU5T3RWcXNVVlpKZUw0U1dERHh6eFRNMENGQVVaRlUzdDFZRTdLUDFxSDRqUEFTdjFlTjR3QWMyZDg1WTZXSTBHVzJ0YVZEZWdzejgyaHBGbmZDUnRpRVVLSlM3aGJnRUJqRU5DUmZ6K1ZWckV6czdzN203T3pPeDgyWTNKK1pvQ2FBMEFrMERWbWhhb29XTkFUUkUwRFVDaFJDZ0ZFS0lNVXdVa1V4VFFORkVEU3dhTUdnYXBvcVVEVEFhb3Z1QStrV1JGVlpZUTlnQVhWeXJOWVd6RUVFWFB3clY1czVvanhzY2FKRzZNamx6bnlrZUVyb1FiOWZLcWNwb3dhSWFLeTJ4dit0YU9LeDZ4NmVKdndqOTJQU3RLSkpNUklzZDFKWTkxQ3dSTC9FOTQvTStRcGE2bU5yT094aW0rVFVmaSs3L0FIZnhmdFV2eXB5ZEpqRjdWM0NSWEl6V3pPeEhpQ2piVGE1MEIwc2RheHc3Z0JSekppQUNWSkNKcmxPVWxlMGNFQzZYQUlIM3RDZTc0N2p3OXBsS3MySkNBbTJXWnlxMnNTR0Nzd0REWUFMcDF0cGVzSFY4dWZaY2VLNnkrZGJmUjRlZ3Q0L3FaMlNmYmYzUW5FdURUOExsK3NZWE04R1VCdzJ0aHBtV1hLQnBjWEVnR2gzL0FJclB3cm5yQlNBWjVEQy9WWkFjdnJaMUJVajNJUHBXT09jM3d3b1JBNnl5a1dYSnFpbjhUTURhdy9DQ1NkQWJiMXkwUjNKSjMxK2RlWDhOeTV1WGovbnpWbmlYMWIrdW1YUFdOL0RmRHRUOGR3VEM0eG1IL3dDS245YTA4VHpsZ0lWUDI0Yy9oaVZwQ2ZUTUJsSHhZVnlBcDVVeUdFc1FvQlppUW9BRnlTYkFBQWJtNUF0WDBQcDR1UHFWYWVMY3lZbmlicmc4TkdVUjJDbGIzZCt2ZllhSkdMRWtDK2k2azdWMXJsM2d5WVBEeDRkRGZMY3N4R3JPeHU3VzZhN0RvQUIwcUY1RDVTR0NqN1NRRHQzRm02OW1taDdOVDU2QXNSdVFCcUFEV2h6T1h4SEVGd2pNUkJIaCsyYU1IdXlzekZMT0Rvd0Yxc0RjQ3hyamw1TWVMQzVYMUp0ekpjc3RMWHhiZ2tPSlcwc1lZalp2QzYvbGNhajIyOUtvSEd1UnBvN3RBZTFRZmQwRWcrQTBmNFdQcFc1RHcxOE1NK0RsblJzcHlRU1NNOExNQmRVZFd6Qkw3Ymc2NkVFVmNPWE9NSmpJRm1WU3B1VmRENGtkZEdVL29SNkViYlY1ZE4xZUhQTGNQdDgrMXo0N2o3Y1VkU0NWSUlJTmlDQ0NENUVIVUdocnQzR09CUVlwYlNvQzFyQnhvNit6ajlqY2VsYzA1bjVVa3dZN1FObml1Qm4yWkNUWUIxMjEwR1liazdEUyt6YnpWb21zWHIxNkVtZzhUUUdzazBKTkJscVdUV1dOQVRVR0RXRFhpYUZqUlFzYVdUV1RRbWlGQ2pCcFlvaFFNRkV0QUtJR2dZRFRBYVVwb3dhQXdhTUdsZzBZTkEwR3RmaUdLTWFYWHhFMkhwNW4vd0E4eFRsTlJQRlh2SXErVnZtYnNmMHRWQ2tRN2szSk9wUFVtdGlPNmtPTDNGaXRqWWhocUNEMEl0djUwaUhWTGU0SG9SZkwvS3BMaHVJaldTTjVGREplN0JnU0xFV3VSMUF2Y2pYWTFIZVBtNld1YkhNUjJXSGZ0NU96SWZFRjdCUTdyY3AxSkIyeStBQUVYSmEyY1RGMmFPK09sV1IzVXBHQW5mVWRTZ3Nvek1mdldGZ2dPWTNXdERGOGZpakRMaFlFWE5vWEtLdDdXSUlWVDU1aUwydGUxclh2QXZJenRtZGl6SGNuOVBZZWcwRmVjeC90L3RxejVaSlBPN1BINlFTNkNoVWJmR3Q3aHZDNXNRMlNDTjVEZTNkSGRINW44Sy9FaXI5d2Y2THhaV3hVeHZ1VWlBc1BRdXdOL2dvOXpYcHRsdGM2d09FZVFsWTBkMjA3cUl6bjVLQ2JWMVRrVGtvNFlqRVlrQXpHK1ZOQ0lzMjVKR2hjalRUUWEydmU5VzdoUEM0Y05IMmNNWVJSMEc3SDhUTWRXYjFOYjFMWE8zcXBQUFdIbGpsaXhrU2dkbXJwSXh1VktFcVZTU3d1aWVNNTlsTnMxaDNoZHF4bUcxeDg2ODg4TWM4YmpadVgyVEx0dTNNNHVZVUJ6SENZa09RZTZpQ1JXTEVuUjFQbVRZbXc3NVBXcDc2T2NPVnc4cnNRSGx4TXNqb0RjSTF3cFRNTkQ0YjZlZHVsUzh2TEdDWWxqaFlzeHZjcWdVbSs5OHRyM3FTdzhDUm9xUm9xb295cXFnS29BMkNxTkFLOE9EcE9QaHR5eDN1L04renZQbHVVMVRxMWNkaGtsamFKeGRYQlZoNkVkRDBQVUh6RmJWTHZyN0Q5NjFQTndiaW1BYkR6UEMrNk1WditJYnEzeFVnL0d0RXNLdjV3MFhFT0s0bUtjMkVDcXFJbmRNaXFiT1hhOTdxemdhVzBaUjAxdXk4S3c0UVJpQ1BJTmxLS1IrbzM5YW80U2FHdWtjKzhDd3NXRk1rY0tJK2RGdWwxRmplNHlnNWVubFhOV29QTlN5YXlhd3hvTUUwREdzazBCTkZDVFFrMWswSk5Ba1VhMHNHaUJvaGxFS0JUVFlJbWRsUkJkbVlLbzh5eHNCODZESzB4YXNlRzRURW1tVHRtNnVTNFMvOEFBcUVHM3F4Tjk3RGFzWXZneU9QczBLT0FTRXV6SkpiVXF1WWxsZTIycEIyMDNyVGwwdkpNZTZ6OTJUSHJlSzVkc3ZuL0FBZ0JXUlUxeTd3dUtTT2ZFVEZ6SGgwVmlpRUIzTDN0M2o0VkZ0VC9BRU5QeDNEY1BKZ2hqWUVlTExMMlRSdS9hS3hJdm5qY2dGdDlmWnZMWE8xb0ZUU2VMY0ZrUlZuenh1ckZjeXF4em9XVVpRNkVEelVYQk80cStjQjRQQzZLOC9EeWtYWWx6aUd4VEVObFRObUVZSXNHMVBwVlA0dHh5Q1dISkc4bWM1RnlTb3BjS0dSemFWZW5jMk50eDVWbjVzODhjc1pqUEZ2bitqdkNZMlhhdndIeGoxQi9UK29yTWIzUzNrV1grWS9TZ1EyZHI5Vi9ZLzhBZXB2ay9seVRHNHBvVU9WTW9kMzBPUlFjdHd0eG1KdUI4ZlN0Q0I0UHcyYkZPc2NFWmRpcWsyMlVIN3pzZEZYZlU3MnNMblN1cTh0L1J4REYzOFdWbmUzZ3NleVg0SFdRK3JhZnc5YXNmTC9CNHNIRUlJa0FDNkZyRFBJYmVKeUFNelc2L0t3MHFZVTFLbmM5REVxS0ZSVlZSb0ZVQUtQWURhakZlQnJ5MUVlcjFEL1dpb1BWR3lRYU1CR1N4WmlHN21semNHK2ErbnpxU3IxV1hUbkxHVkd5NFlpVU1BQUNia3F2ZXZyY01RZGo1MlA4NlR3Nlp5NVZpd1VBbU1NTEZseldMRW5Va2FEWG9RVHFhbHlhQTFlL3hxeHg5UFYzS3kyMVZubW5taGNJdVNOZTF4TWwremlVRmpiYk95cnJsME5nTldJSUd4SXNzbXh0V2pndUZSUXN6b2d6dnE4amF5UDVCbjN5am9vc29HZ0FxUFJ6dmxubDNGUVRIaVdObVNDeGQzRGxjemh3d1lTRUVKR0NXQkF1VGNEUVdyb0hFWmNqUStzNFEvM281QVAxdFZZK2xpWkJnaEd6TG1lVmJLU0xzRkJMRURxQnBmM0ZSK0g0OUppY0ZoVEhEUEpKSEpDWkhTTWxDWUNWZXozMVlnYmZ4VVZLZlNZMytaS1BPWkIveU9mNVZ5WmpWLzUvNHc4dUhSRGhaNGgyeXRubFZWVTJSeGxGbU91dC93QzZhNThUUWVOQXhySmFnSm9QRTBGNjhUV0NhS3dUUU1heXhwWk5BdGFNVWtHbUthSVlEVXJ5Nncrc3hna0xtTElDZGd6bzhhSC9BSG1Xb2U5R0RWbDFkcGxOeXgyakQ4U3dPR0dSVG5ZYUVxaE92WFUyRllrNHhncGlCbGRHVTV3NVFBREozeVNRVG9BcFB3cm1rSEh6YjdXUE8zNDFmczNiOC9kWU1mV3dKNjNPdEJqZU5OSWhqUkJHakN6V1lzN2dHOW1ldzd0d0RZQVh0cmV0dDVPTHQzTGJYejhlSGw3dTJ5VEgvbjdwTGduRmNQQmVYdE1Xa2pGc3l3aURKa0xFcXA3UytiUzI0ME43VlBjNVlxQ09Yc0oxeEU1alFNbjJzY2NZemc2cWtjWUY5OWJWejI5YldNeDBrcmRwSzdPOWdNekc1c05oZnkxTlluMFV0eEhqK0Zrd3NFT0lna1pvWXpHSkkzVVd6V0dZSXkySjdxNkUyMzNxdDRqQllmTDJrZUlZZ1dBUjRpcjV5QjNjMmJLUjR1OERmVFk5Q0dCa21EOW5ZdEduYUZMOTlrVTJjb3Yzc3R3eEhsYzlLajhkZzVJWFZKWTJSN0syVnhaZ3JDNmtxZFZ2NUd4b1FiNk9wODdyOHgvVUN1d2ZROUJGMkJrVkIyb2VXTjMxTEZRWTNRYTdBS3cwSFgxcmtMUkZ3b0c1WlFDZGdTd0FKOUwycnBIMFA0c2llV0k2WmdyNWVvSURocmoweW9QaFFyck1nMW9nYUhFVmhtcUljR3JLbWtvOU5RMUJuejk2OGF3RCs5ZWFnSzlEZXZYckJvcnptc0thd2F3aHFvWWFpT0s4YXlLVmhqZkVUYkpHZ3VNeDI3Ui9ER3ZVbGlOTnJtd3FWYzZiWDlOTmZUWFNvekhjU25RZlo0S1NTM2xKaDAveFNWQldNRnlNODh2MW5pa3ZiU0czMlNFckVnQnVFdnVWSDRSWWFtNWE1SjB1Tzg3cGhKemhjSkNtU0s2eUtWeUptRnRJOGgwdHFDU045dHRaZkVjemNRVzl1RVRIZTFwb1NENVhLay96cmxFbkMrSVNUU3l5WU9aU3p5U09URzRWUTVaMjd6QUFnWE8xOXFxckJ6UnpkOWRoU013NUdTUU9TSHpBMlIwdDRRUjQvd0JLcXBOWUpvU2FEeE5BVFhpYXdUUWVZMEJhdk1hQW1pdk1hQW1zc2FXeG9GS2FZcHBDdFRGTkVQQnJJTktEVXdHZ01HakJwUU5aQm9IQTBUSFNsS2F5N2FVRTl5aGhZMmN5aHJTeGhpdHlqS015T29EUjVzemVCZ0xGVGQ0L0VHcUJtNGNQclgxZHBjNWFWWXpLUXd1N0VMbmJOcVFIYlU5UUxqZXRNQkdzZGpycU5QM3VEODFvOFFzaFBhZG9XY25NSFpqbVp0dzJaejNqZTJvSm9IUGgzWFBISXBSMUxJeW5kV0JzUjhEWFZPVWVCZ1M0YmlVVFdFb1lUeG0xbGFaQ1N5RWRPMUZpcDh6WWkxcWwrTGNxNGJpRWF6VzdPVjBWaEtvMU9aQVY3Uk5NNEFzT2pDMWdRS2J5bHdxYkNZVjRKZ1BzNUdaR1UzVjB6ck1HWHFPOFhCQnNSYjJKcVc3aTFZanA3ajk2dzFaeEd3OXgrOVlhb0JVMDlLUUtjaG9rRW5YM3JKb0l6KzVvelVWNFVMVm1oYWd4ZWhCMXJONkE3MVExbkExSnNQTTZENTB2NjlGc1pJLzk5ZjYxcjhRc1kyREFFR3dJSUJCN3c2R3E3aitEWWVSZTlDbnVxaFcrYTJOY1o1YWVtSEgzVGEzb3luVUVIMklJL1NnbUdoQUY3L0krOWNFNDJodzh6eFJteWl6QTJHYnZEWW1vL3dDdnlqYVdRZXp1UDJOZFkzYzI0eXgxZE5qanVDN0RFVFFnV0NPd1VYdlpDY3lDL3dDVXJVY1RYblltNUp1VHVUcVQ3bWhKcm9ldlFrMTRtaEpxREJOQ1RSb2hhOWhld0xIMkhXbEUwVmhqU21ORXpVcGpSQ2xOTlUxcnJUVm9IQnFNR2xDakZBNEd2QTBBb2hRSG5wL0ZNSEpDd1NSQ2hLaGx2c3luVU1qRFJsMUdvTklXcjV6bi9xakEvbGkvNlFvT1dUU0VIUTJvNE1Zd05yRzVQM2IzUHc2MXI0amV0N2x2L1M0dnpmeU5SWGVmbzg0ekdjRkRETktxU29HUW81VlRsVjJFWUFPaDdtUWFlVlc3RkptalllYXNQbXBybi9LLzlrMzVuL3hHcmZ3SCt6UHZVbVhreng3WjRiNGZNaXQ1NVQ4N0dqYXRYQS8yRWY1SS93QmxyYU5kdk1OTldsR21MVVdNeGJmRS91YU0wdUhiNG45elJtaXZYckJyMUNhQWIxaHE5MXJ6VUdoeGFYS3Fqellmb0NmNlZxbncxN2orOGZ1MzdDc0o0YXo4bnRyNHZ5eHlEbkZyWTF4L0NuN1ZERnFsZWRQOU5mOEFLbjdWRUxYdGgrV1BEUDhBTlhzMUQyZzJ1UGFwMXY3RENmOEF5dC9qRlhPYi9SbS9OSC8xRXJwdzVoSUNwc3dJSTZFRUg1R3ZMRTdlRkdiOHFrL3RYUzhSL3I5L3lmOEE0TFhRRTIrRlVmT21FbkVjaU9RYks2c2JiMlVnNmV0YnA0eW9VWlU3NnJFQTJndUV5bDFmekdqV1BrMVJVdTU5elNtcUNZUEY0d0dWUTZyZEFndGZ1SUQzV3M2NmtzVDk0YTdWb2NWNGlrZ0dWTXB6dTdlVFpzb0RXNk5aUmNiWDE2MXBQU1dvUC8vWlwiXG4gICAgICAgIH1cbiAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxuICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICA+XG4gICAgICAgIDxQbHVzT3V0bGluZWQgb25DbGljaz17b25ab29tfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2ltYWdlcy5sZW5ndGggLSAxfVxuICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IG1lLCBsb2dPdXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBhY3Rpb25zPXtbXG4gICAgICAgIDxkaXYga2V5PVwicG9zdHNcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICDqsozsi5zrrLxcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHttZS5wb3N0cy5sZW5ndGh9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIO2MlOuhnOyeiVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge21lLmZvbGxvd2luZ3MubGVuZ3RofVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2Vyc1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIO2MlOuhnOybjFxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge21lLmZvbGxvd2Vycy5sZW5ndGh9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24gb25DbGljaz17b25Mb2dPdXR9IGxvYWRpbmc9e2xvZ091dExvYWRpbmd9PlxuICAgICAgICDroZzqt7jslYTsm4NcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgU2xpY2sgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQge1xuICBDbG9zZUJ0bixcbiAgR2xvYmFsU3R5bGUsXG4gIEhlYWRlcixcbiAgSW1nV3JhcHBlcixcbiAgSW5kaWNhdG9yLFxuICBPdmVybGF5LFxuICBTbGlja1dyYXBwZXIsXG59IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBJbWFnZXNab29tID0gKHsgaW1hZ2VzLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xuICByZXR1cm4gKFxuICAgIDxPdmVybGF5PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XG4gICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlfT7inJY8L0Nsb3NlQnRuPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8U2xpY2tXcmFwcGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTbGlja1xuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxuICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cbiAgICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcbiAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwODAvJHt2LnNyY31gfSBhbHQ9e3Yuc3JjfSAvPlxuICAgICAgICAgICAgICA8L0ltZ1dyYXBwZXI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NsaWNrPlxuICAgICAgICAgIDxJbmRpY2F0b3I+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7Y3VycmVudFNsaWRlICsgMX0gLyB7aW1hZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvSW5kaWNhdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xpY2tXcmFwcGVyPlxuICAgIDwvT3ZlcmxheT5cbiAgKTtcbn07XG5cbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuZXhwb3J0IGNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDUwMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJiBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkKENsb3NlT3V0bGluZWQpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgU2xpY2tXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcbiAgYmFja2dyb3VuZDogIzg5ODk4OTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA3NTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvciA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogIzMxMzEzMTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbmA7XG4iLCJleHBvcnQgY29uc3QgYmFja1VybCA9IFwiaHR0cDovL3d3dy4yZ2V0aGVyLnRrOjMwMDBcIjtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9LCBbXSk7XG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXIsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUlucHV0O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxWYWx1ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcbmltcG9ydCB7XG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX1VTRVJfUkVRVUVTVCxcbiAgTE9HX09VVF9SRVFVRVNULFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxuICApO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKSkge1xuICAvLyAgICAgZGlzcGF0Y2goe1xuICAvLyAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG4gIC8vIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICAgICAgaWYgKFxuICAgICAgICB3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXG4gICAgICApIHtcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xuICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkO1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcbiAgICAgICAgICAgIGxhc3RJZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ub2dldGhlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBwTGF5b3V0PlxuICAgICAgICA8UG9zdEZvcm0gLz5cbiAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGNvbnRleHQucmVxXG4gICAgICA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29tbW9uW1wieC1yZWZyZXNoLXRva2VuXCJdXG4gICAgICA6IFwiXCI7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LXJlZnJlc2gtdG9rZW5cIl0gPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKHJlZnJlc2hUb2tlbik7XG4gICAgaWYgKGNvbnRleHQucmVxICYmIHJlZnJlc2hUb2tlbikge1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LXJlZnJlc2gtdG9rZW5cIl0gPSByZWZyZXNoVG9rZW47XG4gICAgfVxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gICAgfSk7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgfSk7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcblxyXG4vLyjsnbTsoIQg7IOB7YOcICwg7JWh7IWYKT0+IOuLpOydjCDsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgc2luZ2xlUG9zdDogbnVsbCxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIHVubGlrZVBPc3RFcnJvcjogbnVsbCxcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmNvbnN0IHBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xuICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g64K0IOygleuztCDroZzrlKkg7Iuc64+E7KSRXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcbiAgbG9hZE15SW5mb0Vycm9yOiBmYWxzZSxcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDroZzrlKnspJFcbiAgbG9hZFVzZXJFcnJvcjogZmFsc2UsXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogZmFsc2UsXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJFcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcbiAgdW5mb2xsb3dFcnJvcjogZmFsc2UsXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogZmFsc2UsXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXG4gIGxvZ091dERvbmU6IGZhbHNlLFxuICBsb2dPdXRFcnJvcjogbnVsbCxcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcbiAgc2lnblVwRG9uZTogZmFsc2UsXG4gIHNpZ25VcEZhaWx1cmU6IG51bGwsXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRmFpbHVyZTogbnVsbCxcbiAgbWU6IG51bGwsXG4gIHVzZXJpbmZvOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9nSW5EYXRhOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9NWV9JTkZPX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9NWV9JTkZPX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9NWV9JTkZPX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJMT0FEX1VTRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSBcIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxufSk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93ZXJzID0gZHJhZnQubWUuZm9sbG93ZXJzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHVzZXJTYWdhKSwgZm9yayhwb3N0U2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICBBRERfUE9TVF9SRVFVRVNULFxuICBBRERfUE9TVF9TVUNDRVNTLFxuICBBRERfUE9TVF9GQUlMVVJFLFxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XG59XG5cbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xufVxuXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3RcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcG9zdFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQge1xuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dpbmdzLyR7ZGF0YX0vb3B0aW9uPXVuZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93ZXJzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93aW5nc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goXCIvYXV0aC9uaWNrbmFtZVwiLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xufVxuXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXV0aC9tZVwiKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvL3VzZXJzLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2F1dGgvbG9naW5cIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YS5tZSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LXJlZnJlc2gtdG9rZW5cIl0gPVxuICAgICAgcmVzdWx0LmRhdGEuZGF0YS5yZWZyZXNoVG9rZW47XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NUb2tlblwiLCByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZnJlc2hUb2tlblwiLCByZXN1bHQuZGF0YS5kYXRhLnJlZnJlc2hUb2tlbik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hdXRoL2xvZ291dFwiKTtcbn1cblxuZnVuY3Rpb24qIGxvZ091dChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hdXRoL3VzZXJzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXG4gICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxuICAgIGZvcmsod2F0Y2hMb2dJbiksXG4gICAgZm9yayh3YXRjaExvZ091dCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY29udGV4dCk7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb3Rpb24tcmVzZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUm93IiwiQ29sIiwiR2xvYmFsIiwiSGVhZGVyIiwiTG9nSW5Gb3JtIiwidXNlU2VsZWN0b3IiLCJVc2VyUHJvZmlsZSIsIkFwcExheW91dCIsImNoaWxkcmVuIiwibWUiLCJzdGF0ZSIsInVzZXIiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsInVzZUNhbGxiYWNrIiwidXNlSW5wdXQiLCJDb21tZW50Rm9ybSIsInBvc3QiLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsIm9uU3VibWl0Q29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJvYmplY3QiLCJjc3MiLCJlbW90aW9uUmVzZXQiLCJzdHlsZSIsIkdsb2JhbFN0eWxlIiwidXNlU3RhdGUiLCJMaW5rIiwic3R5bGVkIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFHbG9iZUFzaWEiLCJmYUJhcnMiLCJOYXZTdHlsZSIsIm5hdiIsIlRvZ2V0aGVyRGl2IiwiZGl2IiwiTGlzdCIsInVsIiwib3BlbmVkTWVudSIsIkl0ZW0iLCJsaSIsIk1lbnVDb250ZW50Iiwic3BhbiIsIkhvbWUiLCJNZW51IiwiYSIsInNldE9wZW5lZE1lbnUiLCJvbkNMaWNrTWVudSIsInByZXYiLCJ1c2VEaXNwYXRjaCIsImxvZ2luUmVxdWVzdEFjdGlvbiIsIkZvcm1XcmFwcGVyIiwiRW1haWxEaXYiLCJQYXNzd29yZERpdiIsImlucHV0IiwiQnV0dG9uV3JhcHBlciIsIkxhYmVsIiwibGFiZWwiLCJidXR0b24iLCJkaXNwYXRjaCIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJhbGVydCIsIm9uU3VibWl0Rm9ybSIsIkF2YXRhciIsIkNhcmQiLCJDb21tZW50IiwiSW1hZ2UiLCJQb3BvdmVyIiwiRWxsaXBzaXNPdXRsaW5lZCIsIkhlYXJ0T3V0bGluZWQiLCJIZWFydFR3b1RvbmUiLCJNZXNzYWdlT3V0bGluZWQiLCJNZXNzYWdlVHdvVG9uZSIsIlJldHdlZXRPdXRsaW5lZCIsIlBvc3RJbWFnZXMiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlN0eWxlZERpdiIsIlBvc3RDYXJkIiwiaWQiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsIm9uTGlrZSIsInR5cGUiLCJkYXRhIiwib25Vbmxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25Ub2dnbGVDb21tZW50IiwiSW1hZ2VzIiwib25TaGFyZSIsIlVzZXIiLCJvblJlbW92ZVBvc3QiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJMaWtlcnMiLCJUb2dldGhlcklkIiwiVG9nZXRoZXIiLCJvYmplY3RPZiIsImFueSIsInVzZVJlZiIsIkFERF9QT1NUX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJQb3N0Rm9ybSIsImltYWdlUGF0aHMiLCJhZGRQb3N0RG9uZSIsInRleHQiLCJvbkNoYW5nZVRleHQiLCJzZXRUZXh0Iiwib25TdWJtaXQiLCJ0cmltIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJwIiwiYXBwZW5kIiwiaW1hZ2VJbnB1dCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwibWFyZ2luIiwiZmxvYXQiLCJQbHVzT3V0bGluZWQiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsIm9uQ2xvc2UiLCJzcmMiLCJkaXNwbGF5Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ091dExvYWRpbmciLCJvbkxvZ091dCIsInBvc3RzIiwiZm9sbG93aW5ncyIsImZvbGxvd2VycyIsIlNsaWNrIiwiQ2xvc2VCdG4iLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiT3ZlcmxheSIsIlNsaWNrV3JhcHBlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsImZ1bmMiLCJDbG9zZU91dGxpbmVkIiwiaGVhZGVyIiwiYmFja1VybCIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIndhcm4iLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJIZWFkIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIndyYXBwZXIiLCJFTkQiLCJheGlvcyIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJvblNjcm9sbCIsInNjcm9sbFkiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlZnJlc2hUb2tlbiIsInJlcSIsImhlYWRlcnMiLCJjb21tb24iLCJkZWZhdWx0cyIsInN0b3JlIiwic2FnYVRhc2siLCJ0b1Byb21pc2UiLCJIWURSQVRFIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdFJlZHVjZXIiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwicHJvZHVjZSIsImluaXRpYWxTdGF0ZSIsInNpbmdsZVBvc3QiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBPc3RFcnJvciIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwicG9zdFJlZHVjZXIiLCJkcmFmdCIsImZpbmQiLCJQb3N0SWQiLCJVc2VySWQiLCJ1bnNoaWZ0IiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJEb25lIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEZhaWx1cmUiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUZhaWx1cmUiLCJ1c2VyaW5mbyIsInNpZ25VcERhdGEiLCJsb2dJbkRhdGEiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsInJlZHVjZXIiLCJ1c2VySW5mbyIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93ZXJzRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYmFzZVVSTCIsInJvb3RTYWdhIiwicHV0IiwidGFrZUxhdGVzdCIsInRocm90dGxlIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwicmVzcG9uc2UiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibG9hZFBvc3RzQVBJIiwibG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93IiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2NhbFN0b3JhZ2UiLCJhY2Nlc3NUb2tlbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsIndhdGNoU2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsInJ1biIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==
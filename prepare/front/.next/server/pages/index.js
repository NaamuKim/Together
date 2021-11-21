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
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\AppLayout.js";










const AppLayout = ({
  children
}) => {
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Global__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
      gutter: 8,
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
        xs: 24,
        md: 6,
        children: me ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_UserProfile__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, undefined) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_LogInForm__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 35
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
        xs: 24,
        md: 12,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
        xs: 24,
        md: 6,
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          href: "https://lost731.github.io",
          target: "_black",
          rel: "noreferrer noopener",
          children: "made by KimNaMu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
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
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\CommentForm.js";







const CommentForm = ({
  post
}) => {
  const [commentText, onChangeCommentText, setCommentText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)("");
  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    console.log(commentText);
  }, [commentText]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onFinish: onSubmitComment,
    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
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

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\FollowButton.js";







const FollowButton = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    me,
    followLoading,
    unfollowLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : me.followings.find(v => v.id === post.writer.id);
  const onCLickButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.UNFOLLOW_REQUEST,
        data: post.writer.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.FOLLOW_REQUEST,
        data: post.writer.id
      });
    }
  }, [isFollowing]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    loading: followLoading || unfollowLoading,
    onClick: onCLickButton,
    children: isFollowing ? "언팔로우" : "팔로우"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

FollowButton.protoTypes = {
  post: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowButton);

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
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\Global.js";



const style = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)((emotion_reset__WEBPACK_IMPORTED_MODULE_1___default()), "{@font-face{font-family:\"Noto Sans CJK KR\",serif;font-style:normal;font-weight:100;src:url(\"../styles/fonts/NotoSansKR-Light.woff2\") format(\"woff2\"),url(\"../styles/fonts/NotoSansKR-Light.woff\") format(\"woff\"),url(\"../styles/fonts/NotoSansKR-Light.otf\") format(\"truetype\");}}@font-face{font-family:\"Noto Sans CJK KR\";font-style:normal;font-weight:normal;src:url(\"../styles/fonts/NotoSansKR-Regular.woff2\") format(\"woff2\"),url(\"../styles/fonts/NotoSansKR-Regular.woff\") format(\"woff\"),url(\"../styles/fonts/NotoSansKR-Regular.otf\") format(\"truetype\");}@font-face{font-family:\"Noto Sans CJK KR\";font-style:normal;font-weight:500;src:url(\"../styles/fonts/NotoSansKR-Medium.woff2\") format(\"woff2\"),url(\"../styles/fonts/NotoSansKR-Medium.woff\") format(\"woff\"),url(\"../styles/fonts/NotoSansKR-Medium.otf\") format(\"truetype\");}@font-face{font-family:\"Noto Sans CJK KR\";font-style:normal;font-weight:bold;src:url(\"../styles/fonts/NotoSansKR-Bold.woff2\") format(\"woff2\"),url(\"../styles/fonts/NotoSansKR-Bold.woff\") format(\"woff\"),url(\"../styles/fonts/NotoSansKR-Bold.otf\") format(\"truetype\");}*{margin:0;padding:0;}body{font-family:\"Noto Sans CJK KR\",sans-serif;box-sizing:border-box;background-color:#1f3b4d;}a{text-decoration:none;color:white;}.ant-row{margin-right:0!important;margin-left:0!important;}.ant-col:first-child{padding-left:0!important;}.ant-col:last-child{padding-right:0!important;}" + ( false ? 0 : ";label:style;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcR2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdpQiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXEdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgZW1vdGlvblJlc2V0IGZyb20gXCJlbW90aW9uLXJlc2V0XCI7XG5cbmNvbnN0IHN0eWxlID0gY3NzYFxuICAke2Vtb3Rpb25SZXNldH0ge1xuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiLCBzZXJpZjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUxpZ2h0Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgQ0pLIEtSXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1NZWRpdW0ub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUJvbGQub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICB9XG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmM2I0ZDtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5hbnQtcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtY29sOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuYW50LWNvbDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gKCkgPT4ge1xuICByZXR1cm4gPEdsb2JhbCBzdHlsZXM9e3N0eWxlfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl19 */");

const GlobalStyle = () => {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.Global, {
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
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\Header.js";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const NavStyle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("nav",  false ? 0 : {
  target: "e182imxc6",
  label: "NavStyle"
})( false ? 0 : {
  name: "1db3bjn",
  styles: "color:white;top:0;left:0;width:100%;height:50px;display:flex;align-items:center;background-color:#017374;z-index:10;box-shadow:1px 2px rgba(0, 0, 0, 0.2);margin-bottom:10px;@media screen and (max-width: 768px){flex-direction:column;align-items:center;height:auto;padding:8px 8px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU0yQiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFHbG9iZUFzaWEsIGZhQmFycyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuY29uc3QgTmF2U3R5bGUgPSBzdHlsZWQubmF2YFxuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNzM3NDtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogOHB4IDhweDtcbiAgfVxuYDtcblxuY29uc3QgVG9nZXRoZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS41cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ5NDY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25DTGlja01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbmVkTWVudSgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7Luk666k64uI7YuwPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tmozsm5DqsIDsnoU8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const TogetherDiv = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "e182imxc5",
  label: "TogetherDiv"
})( false ? 0 : {
  name: "zffy6d",
  styles: "padding-left:10px;font-size:18px;@media screen and (max-width: 768px){padding-right:15px;padding-bottom:10px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCOEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAkeyh7IG9wZW5lZE1lbnUgfSkgPT4gKG9wZW5lZE1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiKX07XG4gIH0gO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20uNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBIb21lID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkTWVudSwgc2V0T3BlbmVkTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uQ0xpY2tNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5lZE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxOYXZTdHlsZT5cbiAgICAgIDxUb2dldGhlckRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8SG9tZT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZUFzaWF9IGNvbG9yPVwiI0QwRkVGRVwiIC8+XG4gICAgICAgICAgICBUb2dldGhlclxuICAgICAgICAgIDwvSG9tZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Ub2dldGhlckRpdj5cbiAgICAgIDxMaXN0IG9wZW5lZE1lbnU9e29wZW5lZE1lbnV9PlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tlITroZztlYQ8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Puy7pOuupOuLiO2LsDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgIDwvTGlzdD5cblxuICAgICAgPE1lbnUgaHJlZj1cIiNcIiBvbkNsaWNrPXtvbkNMaWNrTWVudX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvTmF2U3R5bGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const List = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("ul",  false ? 0 : {
  target: "e182imxc4",
  label: "List"
})("display:flex;justify-content:center;margin-left:40px;@media screen and (max-width: 768px){flex-direction:column;width:100%;margin-left:0;align-items:center;display:", ({
  openedMenu
}) => openedMenu ? "none" : "flex", ";}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dc0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAkeyh7IG9wZW5lZE1lbnUgfSkgPT4gKG9wZW5lZE1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiKX07XG4gIH0gO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20uNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBIb21lID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkTWVudSwgc2V0T3BlbmVkTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uQ0xpY2tNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5lZE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxOYXZTdHlsZT5cbiAgICAgIDxUb2dldGhlckRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8SG9tZT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZUFzaWF9IGNvbG9yPVwiI0QwRkVGRVwiIC8+XG4gICAgICAgICAgICBUb2dldGhlclxuICAgICAgICAgIDwvSG9tZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Ub2dldGhlckRpdj5cbiAgICAgIDxMaXN0IG9wZW5lZE1lbnU9e29wZW5lZE1lbnV9PlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tlITroZztlYQ8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Puy7pOuupOuLiO2LsDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgIDwvTGlzdD5cblxuICAgICAgPE1lbnUgaHJlZj1cIiNcIiBvbkNsaWNrPXtvbkNMaWNrTWVudX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvTmF2U3R5bGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */"));

const Item = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("li",  false ? 0 : {
  target: "e182imxc3",
  label: "Item"
})( false ? 0 : {
  name: "ix4y83",
  styles: "width:100px;border-bottom:5px solid transparent;transition:border-bottom.5s ease-in-out;display:flex;justify-content:center;padding:8px 12px;align-items:center;&:hover{background-color:#d49466;border-radius:7px;}@media screen and (max-width: 768px){text-align:center;width:100%;&:hover{border-radius:5px;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEc0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAkeyh7IG9wZW5lZE1lbnUgfSkgPT4gKG9wZW5lZE1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiKX07XG4gIH0gO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20uNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBIb21lID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkTWVudSwgc2V0T3BlbmVkTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uQ0xpY2tNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5lZE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxOYXZTdHlsZT5cbiAgICAgIDxUb2dldGhlckRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8SG9tZT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZUFzaWF9IGNvbG9yPVwiI0QwRkVGRVwiIC8+XG4gICAgICAgICAgICBUb2dldGhlclxuICAgICAgICAgIDwvSG9tZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Ub2dldGhlckRpdj5cbiAgICAgIDxMaXN0IG9wZW5lZE1lbnU9e29wZW5lZE1lbnV9PlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tlITroZztlYQ8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Puy7pOuupOuLiO2LsDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgIDwvTGlzdD5cblxuICAgICAgPE1lbnUgaHJlZj1cIiNcIiBvbkNsaWNrPXtvbkNMaWNrTWVudX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvTmF2U3R5bGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const MenuContent = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span",  false ? 0 : {
  target: "e182imxc2",
  label: "MenuContent"
})( false ? 0 : {
  name: "e0dnmk",
  styles: "cursor:pointer",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFK0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAkeyh7IG9wZW5lZE1lbnUgfSkgPT4gKG9wZW5lZE1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiKX07XG4gIH0gO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20uNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBIb21lID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkTWVudSwgc2V0T3BlbmVkTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uQ0xpY2tNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5lZE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxOYXZTdHlsZT5cbiAgICAgIDxUb2dldGhlckRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8SG9tZT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZUFzaWF9IGNvbG9yPVwiI0QwRkVGRVwiIC8+XG4gICAgICAgICAgICBUb2dldGhlclxuICAgICAgICAgIDwvSG9tZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Ub2dldGhlckRpdj5cbiAgICAgIDxMaXN0IG9wZW5lZE1lbnU9e29wZW5lZE1lbnV9PlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tlITroZztlYQ8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Puy7pOuupOuLiO2LsDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgIDwvTGlzdD5cblxuICAgICAgPE1lbnUgaHJlZj1cIiNcIiBvbkNsaWNrPXtvbkNMaWNrTWVudX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvTmF2U3R5bGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Home = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span",  false ? 0 : {
  target: "e182imxc1",
  label: "Home"
})( false ? 0 : {
  name: "p662uq",
  styles: "cursor:pointer;padding-left:5px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFd0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAkeyh7IG9wZW5lZE1lbnUgfSkgPT4gKG9wZW5lZE1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiKX07XG4gIH0gO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20uNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBIb21lID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkTWVudSwgc2V0T3BlbmVkTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uQ0xpY2tNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5lZE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxOYXZTdHlsZT5cbiAgICAgIDxUb2dldGhlckRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8SG9tZT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZUFzaWF9IGNvbG9yPVwiI0QwRkVGRVwiIC8+XG4gICAgICAgICAgICBUb2dldGhlclxuICAgICAgICAgIDwvSG9tZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Ub2dldGhlckRpdj5cbiAgICAgIDxMaXN0IG9wZW5lZE1lbnU9e29wZW5lZE1lbnV9PlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tlITroZztlYQ8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Puy7pOuupOuLiO2LsDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgIDwvTGlzdD5cblxuICAgICAgPE1lbnUgaHJlZj1cIiNcIiBvbkNsaWNrPXtvbkNMaWNrTWVudX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvTmF2U3R5bGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Menu = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a",  false ? 0 : {
  target: "e182imxc0",
  label: "Menu"
})( false ? 0 : {
  name: "1lze1c9",
  styles: "display:none;position:absolute;left:10px;font-size:20px;color:#000;@media screen and (max-width: 768px){display:block;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFcUIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAkeyh7IG9wZW5lZE1lbnUgfSkgPT4gKG9wZW5lZE1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiKX07XG4gIH0gO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20uNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBIb21lID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkTWVudSwgc2V0T3BlbmVkTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uQ0xpY2tNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5lZE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxOYXZTdHlsZT5cbiAgICAgIDxUb2dldGhlckRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8SG9tZT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZUFzaWF9IGNvbG9yPVwiI0QwRkVGRVwiIC8+XG4gICAgICAgICAgICBUb2dldGhlclxuICAgICAgICAgIDwvSG9tZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Ub2dldGhlckRpdj5cbiAgICAgIDxMaXN0IG9wZW5lZE1lbnU9e29wZW5lZE1lbnV9PlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tlITroZztlYQ8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Puy7pOuupOuLiO2LsDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgIDwvTGlzdD5cblxuICAgICAgPE1lbnUgaHJlZj1cIiNcIiBvbkNsaWNrPXtvbkNMaWNrTWVudX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvTmF2U3R5bGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Header = () => {
  const {
    0: openedMenu,
    1: setOpenedMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onCLickMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setOpenedMenu(prev => !prev);
  }, []);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavStyle, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TogetherDiv, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Home, {
          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
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
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(List, {
      openedMenu: openedMenu,
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Item, {
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/profile",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuContent, {
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
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Item, {
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuContent, {
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
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Item, {
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/signup",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MenuContent, {
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
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Menu, {
      href: "#",
      onClick: onCLickMenu,
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
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
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useinput */ "./hooks/useinput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\LogInForm.js";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const FormWrapper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Form,  false ? 0 : {
  target: "e1i8mgqj6",
  label: "FormWrapper"
})( false ? 0 : {
  name: "e23o9g",
  styles: "padding:10px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQyIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXExvZ0luRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VpbnB1dFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcbiAgcGFkZGluZzogMTBweDtcbmA7XG5cbmNvbnN0IEVtYWlsRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuYDtcblxuY29uc3QgUGFzc3dvcmREaXYgPSBzdHlsZWQuZGl2YFxuICBvdXRsaW5lOiBub25lO1xuYDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEycHg7XG5gO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogIzAxNzM3NDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgTG9nSW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dJbkVycm9yKSB7XG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcbiAgICB9XG4gIH0sIFtsb2dJbkVycm9yXSk7XG5cbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxFbWFpbERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7J2066mU7J28PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9FbWFpbERpdj5cbiAgICAgIDxQYXNzd29yZERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9QYXNzd29yZERpdj5cbiAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwic2lnbnVwXCI+XG4gICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nSW5Gb3JtO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const EmailDiv = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "e1i8mgqj5",
  label: "EmailDiv"
})( false ? 0 : {
  name: "vqx3x2",
  styles: "margin-bottom:5px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVkyQiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXExvZ0luRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VpbnB1dFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcbiAgcGFkZGluZzogMTBweDtcbmA7XG5cbmNvbnN0IEVtYWlsRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuYDtcblxuY29uc3QgUGFzc3dvcmREaXYgPSBzdHlsZWQuZGl2YFxuICBvdXRsaW5lOiBub25lO1xuYDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEycHg7XG5gO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogIzAxNzM3NDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgTG9nSW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dJbkVycm9yKSB7XG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcbiAgICB9XG4gIH0sIFtsb2dJbkVycm9yXSk7XG5cbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxFbWFpbERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7J2066mU7J28PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9FbWFpbERpdj5cbiAgICAgIDxQYXNzd29yZERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9QYXNzd29yZERpdj5cbiAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwic2lnbnVwXCI+XG4gICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nSW5Gb3JtO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const PasswordDiv = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "e1i8mgqj4",
  label: "PasswordDiv"
})( false ? 0 : {
  name: "12mkfdx",
  styles: "outline:none",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCOEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Input = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("input",  false ? 0 : {
  target: "e1i8mgqj3",
  label: "Input"
})( false ? 0 : {
  name: "yvx3vb",
  styles: "width:100%;height:30px;border-radius:30px;padding:0 20px;margin-top:10px;border:1px solid lightgray;font-size:12px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CMEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const ButtonWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "e1i8mgqj2",
  label: "ButtonWrapper"
})( false ? 0 : {
  name: "pr25zp",
  styles: "display:flex;justify-content:center;margin-top:10px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0MiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Label = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("label",  false ? 0 : {
  target: "e1i8mgqj1",
  label: "Label"
})( false ? 0 : {
  name: "1y5pc60",
  styles: "color:white",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DMEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Button = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button",  false ? 0 : {
  target: "e1i8mgqj0",
  label: "Button"
})( false ? 0 : {
  name: "l2l40k",
  styles: "background:#017374;width:100%;height:35px;border:0;outline:none;border-radius:40px;color:white;font-size:15px;letter-spacing:2px;cursor:pointer",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const LogInForm = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    logInLoading,
    logInError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user);
  const [email, onChangeEmail] = (0,_hooks_useinput__WEBPACK_IMPORTED_MODULE_4__.default)("");
  const [password, onChangePassword] = (0,_hooks_useinput__WEBPACK_IMPORTED_MODULE_4__.default)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  const onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_6__.loginRequestAction)({
      email,
      password
    }));
  }, [email, password]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(FormWrapper, {
    onFinish: onSubmitForm,
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(EmailDiv, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Label, {
        htmlFor: "user-id",
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Input, {
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
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(PasswordDiv, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Label, {
        htmlFor: "user-password",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Input, {
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
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ButtonWrapper, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Button, {
        type: "primary",
        htmlType: "submit",
        loading: logInLoading,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Button, {
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "signup",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
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
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment_locale_ko__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment/locale/ko */ "moment/locale/ko");
/* harmony import */ var moment_locale_ko__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ko__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\PostCard.js";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

















const StyledDiv = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "ep1fbea0",
  label: "StyledDiv"
})( false ? 0 : {
  name: "1azpx8r",
  styles: "margin-bottom:20px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcUG9zdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEI0QiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXFBvc3RDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIENvbW1lbnQsIEltYWdlLCBMaXN0LCBQb3BvdmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gIEVsbGlwc2lzT3V0bGluZWQsXG4gIEhlYXJ0T3V0bGluZWQsXG4gIEhlYXJ0VHdvVG9uZSxcbiAgTWVzc2FnZU91dGxpbmVkLFxuICBNZXNzYWdlVHdvVG9uZSxcbiAgUmV0d2VldE91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IFwibW9tZW50L2xvY2FsZS9rb1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tIFwiLi9Qb3N0Q2FyZENvbnRlbnRcIjtcblxuY29uc3QgU3R5bGVkRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmA7XG5cbm1vbWVudC5sb2NhbGUoXCJrb1wiKTtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcbiAgICB9XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHBvc3QuaWQsXG4gICAgfSk7XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gICAgICBkYXRhOiBwb3N0LmlkLFxuICAgIH0pO1xuICB9LCBbaWRdKTtcblxuICBjb25zdCBsaWtlZCA9IHBvc3QubGlrZWRVc2Vycy5maW5kKCh2KSA9PiB2ID09PSBpZCk7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZERpdj5cbiAgICAgIDxDYXJkXG4gICAgICAgIGNvdmVyPXtwb3N0LmltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuaW1hZ2VzfSAvPn1cbiAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxuICAgICAgICAgIGxpa2VkID8gKFxuICAgICAgICAgICAgPEhlYXJ0VHdvVG9uZVxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcbiAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblVubGlrZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPlxuICAgICAgICAgICksXG4gICAgICAgICAgY29tbWVudEZvcm1PcGVuZWQgPyAoXG4gICAgICAgICAgICA8TWVzc2FnZVR3b1RvbmVcbiAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXG4gICAgICAgICAgICAgIGtleT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+XG4gICAgICAgICAgKSxcbiAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC53cml0ZXIuaWQgPT09IGlkID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIOyCreygnFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XG4gICAgICAgICAgPC9Qb3BvdmVyPixcbiAgICAgICAgXX1cbiAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XG4gICAgICA+XG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAge21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3Qud3JpdGVyLmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhcj57cG9zdC53cml0ZXIubmlja25hbWVbMF19PC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aXRsZT17cG9zdC53cml0ZXIubmlja25hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cblxuICAgICAgICA8SW1hZ2UgLz5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5jb21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LmNvbW1lbnRzfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0ud3JpdGVyLm5pY2tuYW1lfVxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPml0ZW0ud3JpdGVyLm5pY2tuYW1lPC9BdmF0YXI+fVxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1N0eWxlZERpdj5cbiAgKTtcbn07XG5cblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB3cml0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgbGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

moment__WEBPACK_IMPORTED_MODULE_7___default().locale("ko");

const PostCard = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  const {
    removePostLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state.post);
  const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onLike = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__.LIKE_POST_REQUEST,
      data: post.id
    });
  }, [id]);
  const onUnlike = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__.UNLIKE_POST_REQUEST,
      data: post.id
    });
  }, [id]);
  const onToggleComment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const onRemovePost = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__.REMOVE_POST_REQUEST,
      data: post.id
    });
  }, [id]);
  const liked = post.likedUsers.find(v => v === id);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(StyledDiv, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
      cover: post.images[0] && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_PostImages__WEBPACK_IMPORTED_MODULE_6__.default, {
        images: post.images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 34
      }, undefined),
      actions: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.RetweetOutlined, {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, undefined), liked ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.HeartTwoTone, {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, undefined) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.HeartOutlined, {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, undefined), commentFormOpened ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MessageTwoTone, {
        twoToneColor: "#eb2f96",
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, undefined) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MessageOutlined, {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Popover, {
        content: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button.Group, {
          children: id && post.writer.id === id ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 21
            }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 21
            }, undefined)]
          }, void 0, true) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }, undefined),
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EllipsisOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, undefined)],
      extra: id && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_FollowButton__WEBPACK_IMPORTED_MODULE_12__.default, {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 22
      }, undefined),
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          style: {
            float: "right"
          },
          children: moment__WEBPACK_IMPORTED_MODULE_7___default()(post.createdAt).fromNow()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
          avatar: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: `/user/${post.writer.id}`,
            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("a", {
              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                children: post.writer.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, undefined),
          title: post.writer.nickname,
          description: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_PostCardContent__WEBPACK_IMPORTED_MODULE_13__.default, {
            postData: post.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 26
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined)]
      }, void 0, true), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined), commentFormOpened && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_CommentForm__WEBPACK_IMPORTED_MODULE_9__.default, {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List, {
        header: `${post.comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.comments,
        renderItem: item => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Comment, {
            author: item.writer.nickname,
            avatar: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
              children: "item.writer.nickname"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 27
            }, undefined),
            content: item.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, undefined);
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
    writer: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    createdAt: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    comments: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)),
    images: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)),
    likers: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object))
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\PostCardContent.js";
 // eslint-disable-next-line import/no-unresolved





const PostCardContent = ({
  postData
}) => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
  children: postData.split(/(#[^\s#]+)/g).map((v, i) => {
    if (v.match(/(#[^\s#]+)/)) {
      return (
        /* 사용자 의도가 들어가는 key => key = {i} 로 사용하겠음 */
        // eslint-disable-next-line react/no-array-index-key
        (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/hashtag/${v.slice(1)}`,
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      );
    }

    return v;
  })
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

PostCardContent.propTypes = {
  postData: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardContent);

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
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
    if (!text || !text.trim()) {
      return alert("게시글을 작성하세요.");
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__.ADD_POST_REQUEST,
      data: {
        images: imagePaths,
        content: text
      }
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
      imageFormData.append("img", f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__.UPLOAD_IMAGES_REQUEST,
      data: imageFormData
    });
  }, []);
  const onRemoveImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__.REMOVE_IMAGE,
      data: index
    });
  }, []);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
    style: {
      margin: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Input.TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC624\uB298 \uC720\uC800\uB2D8\uC774 \uBB34\uC2A8 \uC77C\uC774 \uC788\uC73C\uC168\uB294 \uC9C0 \uAD81\uAE08\uD569\uB2C8\uB2E4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
        type: "primary",
        style: {
          float: "right"
        },
        htmlType: "submit",
        children: "Together"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: imagePaths.map((v, i) => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        style: {
          display: "inline-block"
        },
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__.backUrl}/upload/img/${v}`,
          style: {
            width: "200px"
          },
          alt: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
            children: "\uC81C\uAC70"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, undefined)]
      }, v, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        role: "presentation",
        src: `${_config_config__WEBPACK_IMPORTED_MODULE_4__.backUrl}/upload/img/${images[0]}`,
        alt: images[0],
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), showImagesZoom && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_imagesZoom__WEBPACK_IMPORTED_MODULE_3__.default, {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 28
      }, undefined)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        role: "presentation",
        width: "50%",
        src: `${_config_config__WEBPACK_IMPORTED_MODULE_4__.backUrl}/upload/img/${images[0]}`,
        alt: images[0],
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        role: "presentation",
        width: "50%",
        src: `${_config_config__WEBPACK_IMPORTED_MODULE_4__.backUrl}/upload/img/${images[1]}`,
        alt: images[1],
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined);
  }

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
      role: "presentation",
      width: "50%",
      src: "data:image/jpeg;base64,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",
      alt: images[0],
      onClick: onZoom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      role: "presentation",
      style: {
        display: "inline-block",
        width: "50%",
        textAlign: "center",
        verticalAlign: "middle"
      },
      onClick: onZoom,
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.PlusOutlined, {
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), showImagesZoom && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_imagesZoom__WEBPACK_IMPORTED_MODULE_3__.default, {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\UserProfile.js";








const UserProfile = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    me,
    logOutLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user);
  const onLogOut = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.LOG_OUT_REQUEST,
      data: react_cookies__WEBPACK_IMPORTED_MODULE_5___default().load("refreshToken")
    });
  }, []);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
    actions: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/user/${me.id}`,
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          children: ["\uAC8C\uC2DC\uBB3C", (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, undefined), me.posts.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)
    }, "posts", false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/profile",
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          children: ["\uD314\uB85C\uC789", (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, undefined), me.followings.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, undefined)
    }, "followings", false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/profile",
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          children: ["\uD314\uB85C\uC6CC", (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, undefined), me.followers.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined)
    }, "followers", false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)],
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
      avatar: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/user/${me.id}`,
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            children: me.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: onLogOut,
      loading: logOutLoading,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\imagesZoom\\index.js";







const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Overlay, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Header, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CloseBtn, {
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
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.SlickWrapper, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
          initialSlide: 0,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ImgWrapper, {
            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: `${_config_config__WEBPACK_IMPORTED_MODULE_4__.backUrl}/upload/img/${v}`,
              alt: v
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, undefined)
          }, v, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Indicator, {
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
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
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)).isRequired,
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
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const Overlay = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "evbuce35",
  label: "Overlay"
})( false ? 0 : {
  name: "ghj037",
  styles: "position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcaW1hZ2VzWm9vbVxcc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlpQyIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXGltYWdlc1pvb21cXHN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDbG9zZUJ0biA9IHN0eWxlZChDbG9zZU91dGxpbmVkKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XG4gIGJhY2tncm91bmQ6ICM4OTg5ODk7XG5gO1xuXG5leHBvcnQgY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJmltZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogNzUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgPiBkaXYge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const Header = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("header",  false ? 0 : {
  target: "evbuce34",
  label: "Header"
})( false ? 0 : {
  name: "io3y5b",
  styles: "height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcaW1hZ2VzWm9vbVxcc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFtQyIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXGltYWdlc1pvb21cXHN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDbG9zZUJ0biA9IHN0eWxlZChDbG9zZU91dGxpbmVkKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XG4gIGJhY2tncm91bmQ6ICM4OTg5ODk7XG5gO1xuXG5leHBvcnQgY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJmltZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogNzUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgPiBkaXYge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const CloseBtn = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined,  false ? 0 : {
  target: "evbuce33",
  label: "CloseBtn"
})( false ? 0 : {
  name: "1wb9kyx",
  styles: "position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcaW1hZ2VzWm9vbVxcc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCNkMiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxpbWFnZXNab29tXFxzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQoQ2xvc2VPdXRsaW5lZClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBiYWNrZ3JvdW5kOiAjODk4OTg5O1xuYDtcblxuZXhwb3J0IGNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICZpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmID4gZGl2IHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const SlickWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "evbuce32",
  label: "SlickWrapper"
})( false ? 0 : {
  name: "vmj6ym",
  styles: "height:calc(100% - 44px);background:#898989",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcaW1hZ2VzWm9vbVxcc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dc0MiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxpbWFnZXNab29tXFxzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQoQ2xvc2VPdXRsaW5lZClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBiYWNrZ3JvdW5kOiAjODk4OTg5O1xuYDtcblxuZXhwb3J0IGNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICZpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmID4gZGl2IHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const ImgWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "evbuce31",
  label: "ImgWrapper"
})( false ? 0 : {
  name: "ce34pe",
  styles: "padding:32px;text-align:center;&img{margin:0 auto;max-height:750px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcaW1hZ2VzWm9vbVxcc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0MiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxpbWFnZXNab29tXFxzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQoQ2xvc2VPdXRsaW5lZClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBiYWNrZ3JvdW5kOiAjODk4OTg5O1xuYDtcblxuZXhwb3J0IGNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICZpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmID4gZGl2IHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const Indicator = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "evbuce30",
  label: "Indicator"
})( false ? 0 : {
  name: "idgjb3",
  styles: "text-align:center;&>div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcaW1hZ2VzWm9vbVxcc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEbUMiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxpbWFnZXNab29tXFxzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQoQ2xvc2VPdXRsaW5lZClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBiYWNrZ3JvdW5kOiAjODk4OTg5O1xuYDtcblxuZXhwb3J0IGNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICZpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmID4gZGl2IHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
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
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.post);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__.LOAD_MY_INFO_REQUEST,
      data: react_cookies__WEBPACK_IMPORTED_MODULE_11___default().load("accessToken")
    });
  }, []);
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
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("title", {
        children: "Together"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [me && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 16
      }, undefined), mainPosts.map(post => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_8__.default.getServerSideProps(async context => {
  const parsedCookie = context.req ? cookie__WEBPACK_IMPORTED_MODULE_12___default().parse(context.req.headers.cookie || "") : "";

  if (context.req && parsedCookie) {
    if (parsedCookie["accessToken"]) {
      context.store.dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__.LOAD_MY_INFO_REQUEST,
        data: parsedCookie["accessToken"]
      });
    }
  }

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
/* harmony export */   "REMOVE_IMAGE": () => (/* binding */ REMOVE_IMAGE),
/* harmony export */   "ADD_POST_TO_ME": () => (/* binding */ ADD_POST_TO_ME),
/* harmony export */   "REMOVE_POST_OF_ME": () => (/* binding */ REMOVE_POST_OF_ME),
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
const REMOVE_IMAGE = "REMOVE_IMAGE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const postReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = draft.mainPosts.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.likers.push({
            id: action.data.data.id
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
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./reducers/post.js");


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
  accessToken: null,
  refreshToken: null,
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
      draft.me = action.data.me;
      draft.accessToken = action.data.accessToken;
      draft.refreshToken = action.data.refreshToken;
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
      draft.me = action.data.me;
      draft.accessToken = action.data.accessToken;
      draft.refreshToken = action.data.refreshToken;
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

    case _post__WEBPACK_IMPORTED_MODULE_1__.ADD_POST_TO_ME:
      draft.me.posts.unshift({
        id: action.data
      });
      break;

    case _post__WEBPACK_IMPORTED_MODULE_1__.REMOVE_POST_OF_ME:
      draft.me.post = draft.me.posts.filter(v => v.id !== action.data);
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
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_5__);






(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = _config_config__WEBPACK_IMPORTED_MODULE_4__.backUrl;
(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true;

if (react_cookies__WEBPACK_IMPORTED_MODULE_5___default().load("accessToken")) {
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["x-access-token"]) = react_cookies__WEBPACK_IMPORTED_MODULE_5___default().load("accessToken");
}

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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/api/like/${data}`);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/api/unlike/${data}`);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/posts", data);
}

function* addPost(action) {
  try {
    console.log(action.data);
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_SUCCESS,
      data: result.data.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_TO_ME,
      data: result.data.data.id
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_FAILURE,
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/api/delete/${data}`);
}

function* removePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(removePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_SUCCESS,
      data: result.data.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_OF_ME,
      data: result.data.data.id
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_FAILURE,
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/upload/img", data);
}

function* uploadImages(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(uploadImagesAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.UPLOAD_IMAGES_SUCCESS,
      data: result.data.message.imagePaths
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/nexts/${lastId || "first"}`);
}

function* loadPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadPostsAPI, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_POSTS_SUCCESS,
      data: result.data.data
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

function* watchRemovePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_REQUEST, removePost);
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
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(followAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.FOLLOW_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.FOLLOW_FAILURE,
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_FAILURE,
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_FOLLOWERS_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_FOLLOWERS_FAILURE,
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_FOLLOWINGS_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_FOLLOWINGS_FAILURE,
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.CHANGE_NICKNAME_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.CHANGE_NICKNAME_FAILURE,
      error: err.response.data
    });
  }
}

function loadMyInfoAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/auth/me", {
    headers: {
      "x-access-token": data
    }
  });
}

function* loadMyInfo(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadMyInfoAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_MY_INFO_SUCCESS,
      data: result.data.data
    });
    const accessToken = result.data.data.accessToken;
    const refreshToken = result.data.data.refreshToken;
    react_cookies__WEBPACK_IMPORTED_MODULE_2___default().save("accessToken", accessToken, {
      path: "/"
    });
    react_cookies__WEBPACK_IMPORTED_MODULE_2___default().save("refreshToken", refreshToken, {
      path: "/"
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_MY_INFO_FAILURE,
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/users/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadUserAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_USER_FAILURE,
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_IN_SUCCESS,
      data: result.data.data
    });
    console.log(result.data);
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["x-access-token"]) = result.data.data.accessToken;
    const accessToken = result.data.data.accessToken;
    const refreshToken = result.data.data.refreshToken;
    react_cookies__WEBPACK_IMPORTED_MODULE_2___default().save("accessToken", accessToken, {
      path: "/"
    });
    react_cookies__WEBPACK_IMPORTED_MODULE_2___default().save("refreshToken", refreshToken, {
      path: "/"
    });
    console.log((react_cookies__WEBPACK_IMPORTED_MODULE_2___default()));
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_IN_FAILURE,
      error: err.response.data
    });
  }
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/auth/logout", {
    headers: {
      "x-refresh-token": data
    }
  });
}

function* logOut(action) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logOutAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_OUT_SUCCESS
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_OUT_FAILURE,
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.SIGN_UP_SUCCESS
    });
    alert("회원가입에 성공하셨습니다.");
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.SIGN_UP_FAILURE,
      data: err.response.data
    });
  }
}

function* watchSignUp() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.SIGN_UP_REQUEST, signUp);
}

function* watchChangeNickname() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchLoadMyInfo() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchFollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_OUT_REQUEST, logOut);
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

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "@emotion/styled/base":
/*!***************************************!*\
  !*** external "@emotion/styled/base" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled/base");

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

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "moment/locale/ko":
/*!***********************************!*\
  !*** external "moment/locale/ko" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/ko");

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

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookies");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL0FwcExheW91dC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL0ZvbGxvd0J1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvR2xvYmFsLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL0xvZ0luRm9ybS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvUG9zdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvUG9zdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9pbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9pbWFnZXNab29tL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2hvb2tzL3VzZWlucHV0LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImVtb3Rpb24tcmVzZXRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm1vbWVudC9sb2NhbGUva29cIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9pZ25vcmVkfEM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuL0dsb2JhbFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBMb2dJbkZvcm0gZnJvbSBcIi4vTG9nSW5Gb3JtXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEdsb2JhbCAvPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFJvdyBndXR0ZXI9ezh9PlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxuICAgICAgICAgIHttZSA/IDxVc2VyUHJvZmlsZSAvPiA6IDxMb2dJbkZvcm0gLz59XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9sb3N0NzMxLmdpdGh1Yi5pb1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhY2tcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgbWFkZSBieSBLaW1OYU11XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoZWV6ZUxhdHRlXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFja1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBtYWRlIGJ5IENoZWVzZUxhdHRlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRUZXh0KTtcbiAgfSwgW2NvbW1lbnRUZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cbiAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICAgIHZhbHVlPXtjb21tZW50VGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH1cbiAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICDinJRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXG4gICk7XG4gIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LmZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC53cml0ZXIuaWQpO1xuICBjb25zdCBvbkNMaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChpc0ZvbGxvd2luZykge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxuICAgICAgICBkYXRhOiBwb3N0LndyaXRlci5pZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEZPTExPV19SRVFVRVNULCBkYXRhOiBwb3N0LndyaXRlci5pZCB9KTtcbiAgICB9XG4gIH0sIFtpc0ZvbGxvd2luZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ30gb25DbGljaz17b25DTGlja0J1dHRvbn0+XG4gICAgICB7aXNGb2xsb3dpbmcgPyBcIuyWuO2MlOuhnOyasFwiIDogXCLtjJTroZzsmrBcIn1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cbkZvbGxvd0J1dHRvbi5wcm90b1R5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XG4iLCJpbXBvcnQgeyBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IGVtb3Rpb25SZXNldCBmcm9tIFwiZW1vdGlvbi1yZXNldFwiO1xuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgJHtlbW90aW9uUmVzZXR9IHtcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIiwgc2VyaWY7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1MaWdodC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItTGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1MaWdodC5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgfVxuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItUmVndWxhci5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgQ0pLIEtSXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1NZWRpdW0ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1NZWRpdW0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItTWVkaXVtLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1Cb2xkLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgfVxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIiwgc2Fucy1zZXJpZjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjNiNGQ7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYW50LXJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuYW50LWNvbDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFudC1jb2w6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxHbG9iYWwgc3R5bGVzPXtzdHlsZX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFHbG9iZUFzaWEsIGZhQmFycyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuY29uc3QgTmF2U3R5bGUgPSBzdHlsZWQubmF2YFxuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNzM3NDtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogOHB4IDhweDtcbiAgfVxuYDtcblxuY29uc3QgVG9nZXRoZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS41cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ5NDY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25DTGlja01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbmVkTWVudSgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7Luk666k64uI7YuwPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tmozsm5DqsIDsnoU8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VpbnB1dFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcbiAgcGFkZGluZzogMTBweDtcbmA7XG5cbmNvbnN0IEVtYWlsRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuYDtcblxuY29uc3QgUGFzc3dvcmREaXYgPSBzdHlsZWQuZGl2YFxuICBvdXRsaW5lOiBub25lO1xuYDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEycHg7XG5gO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogIzAxNzM3NDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgTG9nSW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dJbkVycm9yKSB7XG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcbiAgICB9XG4gIH0sIFtsb2dJbkVycm9yXSk7XG5cbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxFbWFpbERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7J2066mU7J28PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9FbWFpbERpdj5cbiAgICAgIDxQYXNzd29yZERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9QYXNzd29yZERpdj5cbiAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwic2lnbnVwXCI+XG4gICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nSW5Gb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIENvbW1lbnQsIEltYWdlLCBMaXN0LCBQb3BvdmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gIEVsbGlwc2lzT3V0bGluZWQsXG4gIEhlYXJ0T3V0bGluZWQsXG4gIEhlYXJ0VHdvVG9uZSxcbiAgTWVzc2FnZU91dGxpbmVkLFxuICBNZXNzYWdlVHdvVG9uZSxcbiAgUmV0d2VldE91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IFwibW9tZW50L2xvY2FsZS9rb1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tIFwiLi9Qb3N0Q2FyZENvbnRlbnRcIjtcblxuY29uc3QgU3R5bGVkRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmA7XG5cbm1vbWVudC5sb2NhbGUoXCJrb1wiKTtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcbiAgICB9XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHBvc3QuaWQsXG4gICAgfSk7XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gICAgICBkYXRhOiBwb3N0LmlkLFxuICAgIH0pO1xuICB9LCBbaWRdKTtcblxuICBjb25zdCBsaWtlZCA9IHBvc3QubGlrZWRVc2Vycy5maW5kKCh2KSA9PiB2ID09PSBpZCk7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZERpdj5cbiAgICAgIDxDYXJkXG4gICAgICAgIGNvdmVyPXtwb3N0LmltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuaW1hZ2VzfSAvPn1cbiAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxuICAgICAgICAgIGxpa2VkID8gKFxuICAgICAgICAgICAgPEhlYXJ0VHdvVG9uZVxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcbiAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblVubGlrZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPlxuICAgICAgICAgICksXG4gICAgICAgICAgY29tbWVudEZvcm1PcGVuZWQgPyAoXG4gICAgICAgICAgICA8TWVzc2FnZVR3b1RvbmVcbiAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXG4gICAgICAgICAgICAgIGtleT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+XG4gICAgICAgICAgKSxcbiAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC53cml0ZXIuaWQgPT09IGlkID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIOyCreygnFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XG4gICAgICAgICAgPC9Qb3BvdmVyPixcbiAgICAgICAgXX1cbiAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XG4gICAgICA+XG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAge21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3Qud3JpdGVyLmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhcj57cG9zdC53cml0ZXIubmlja25hbWVbMF19PC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aXRsZT17cG9zdC53cml0ZXIubmlja25hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cblxuICAgICAgICA8SW1hZ2UgLz5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5jb21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LmNvbW1lbnRzfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0ud3JpdGVyLm5pY2tuYW1lfVxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPml0ZW0ud3JpdGVyLm5pY2tuYW1lPC9BdmF0YXI+fVxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1N0eWxlZERpdj5cbiAgKTtcbn07XG5cblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB3cml0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgbGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7IHBvc3REYXRhIH0pID0+IChcbiAgPGRpdj5cbiAgICB7cG9zdERhdGEuc3BsaXQoLygjW15cXHMjXSspL2cpLm1hcCgodiwgaSkgPT4ge1xuICAgICAgaWYgKHYubWF0Y2goLygjW15cXHMjXSspLykpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvKiDsgqzsmqnsnpAg7J2Y64+E6rCAIOuTpOyWtOqwgOuKlCBrZXkgPT4ga2V5ID0ge2l9IOuhnCDsgqzsmqntlZjqsqDsnYwgKi9cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGE+e3Z9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2O1xuICAgIH0pfVxuICA8L2Rpdj5cbik7XG5cblBvc3RDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIHBvc3REYXRhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50O1xuIiwiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9JTUFHRSxcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XG5cbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XG4gIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWRkUG9zdERvbmUpIHtcbiAgICAgIHNldFRleHQoXCJcIik7XG4gICAgfVxuICB9LCBbYWRkUG9zdERvbmVdKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XG4gICAgICByZXR1cm4gYWxlcnQoXCLqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHsgaW1hZ2VzOiBpbWFnZVBhdGhzLCBjb250ZW50OiB0ZXh0IH0sXG4gICAgfSk7XG4gIH0sIFt0ZXh0LCBpbWFnZVBhdGhzXSk7XG5cbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcblxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpbWFnZXNcIiwgZS50YXJnZXQuZmlsZXMpO1xuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZChcImltZ1wiLCBmKTtcbiAgICB9KTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleCkgPT4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXG4gICAgICAgIGRhdGE6IGluZGV4LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fVxuICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgID5cbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cbiAgICAgICAgbWF4TGVuZ3RoPXsxNDB9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7Jik64qYIOycoOyggOuLmOydtCDrrLTsiqgg7J287J20IOyeiOycvOyFqOuKlCDsp4Ag6raB6riI7ZWp64uI64ukXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgIGhpZGRlblxuICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgVG9nZXRoZXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2Ake2JhY2tVcmx9L3VwbG9hZC9pbWcvJHt2fWB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIgfX1cbiAgICAgICAgICAgICAgYWx0PXt2fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IEltYWdlc1pvb20gZnJvbSBcIi4vaW1hZ2VzWm9vbVwiO1xuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XG5cbmNvbnN0IFBvc3RJbWFnZXMgPSAoeyBpbWFnZXMgfSkgPT4ge1xuICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dJbWFnZXNab29tKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBzcmM9e2Ake2JhY2tVcmx9L3VwbG9hZC9pbWcvJHtpbWFnZXNbMF19YH1cbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXX1cbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXG4gICAgICAgICAgc3JjPXtgJHtiYWNrVXJsfS91cGxvYWQvaW1nLyR7aW1hZ2VzWzBdfWB9XG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF19XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxuICAgICAgICAgIHNyYz17YCR7YmFja1VybH0vdXBsb2FkL2ltZy8ke2ltYWdlc1sxXX1gfVxuICAgICAgICAgIGFsdD17aW1hZ2VzWzFdfVxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZ1xuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgd2lkdGg9XCI1MCVcIlxuICAgICAgICBzcmM9e1xuICAgICAgICAgIFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQlFVRkJnVUZCUVlHQmdZR0JnWUdoZ1lHQmdhR0JrYUdCZ1pHUmdZR0JnYklDMGtHeDBwSUJnWUpUY2xLUzR3TkRRMEdpTTVQemt4UGkweU5EQUJDd3NMRUE4UUd4SVNHemdnSUNzd01qQXlNakl5TkRJeU1qSTBNakl5TWpJd01qSXlNalEwTWpJd01qSXdNakl5T3pJeU1EQXlNalF5TWpBeU5USTdNUC9BQUJFSUFMa0JFQU1CSWdBQ0VRRURFUUgveEFBY0FBQUNBZ01CQVFBQUFBQUFBQUFBQUFBQ0F3VUdBUVFIQUFqL3hBQkZFQUFDQVFJRUF3WUNDQU1EQ3dVQUFBQUJBZ01BRVFRU0lURUZCa0VUSWpKUllYR0JrUWNVSTBKU2NxR3hZc0hSTTRLeUZpUTBOVk9TazZLejRmQVZRM1BDdy8vRUFCa0JBUUVCQVFFQkFBQUFBQUFBQUFBQUFBQUJCQUlEQmYvRUFDb1JBUUVBQWdFRUFRSUVCd0FBQUFBQUFBQUJBaEVEQkJJaE1WRVRRU0l5WWRFRkkzR0JvYkhCLzlvQURBTUJBQUlSQXhFQVB3RG5DQ21vS0ZCVFVGZElOQlRWRkFncGlpcUdMVEZwYTB4YW9hb3BnRkxXbWlnOEJSQVZnQ2pBb01BVm0xWld2V3FEQUZFdFl0WGxvREZFS0ZhTE5WZ0kxaTlMZkVScjRuVmZkZ04vZW1OWTBHYjE2dkNzMEFWaGhSRVY2MVFXN2hIQW9jYmhReWtSenhuSXpBZDE3QzZGMTh5cEF6RFc0TjcxWE9LY0psd3o1SlV5MzhMRFZHL0szWDIzOHdLbXVST0lkbGlleko3c3d5ZjN4Y29mOFMvM2hYUXVKOWoyYkRFWk96TytjZ0w2YjlmSzJ0QnpMbHpsbVRGbk8xMGlCMWZxMXQxUys1OWRoNm5TdC9uMVlvaEJoWWxDb2l0SVZIbXh5S1dPNWJ1dnFkZGFzcmM0WUtPeUs3RUtMQUpHd1VBYkFYQTBybi9NM0VSaU1TOGkzeUhLcVhGamxWUU51bXVZL0dnaURRR2phaE5VTElyQkZFMUNhaWdOS2NVNGlsT0tEV1lVcDFyWklwTGlnU2dwcWlnUVV4YUFsRmJlR3dra2wrempkN2I1RVpyZStVRzFZNGJoeEpJaU1iS1NTeEcrUkZMdmIxeXExdlcxWHJCY0JtblVFS0VRZUJkbFVlU2orZTUzTnliMW80T0NaeTNMTHRrKzdKMUhVM2pzbU9QZGI5bEhrZ2REbGRHUnZ3dXBVKzltRjY4b3E5WTNsNlJGN09RWm8yTnN3MTdOam9IWDhOanVCNGhjSDBqT1RwbzRteENzOGNlSk1lV0I1Q3VWSEdZTUxzTEsxOG1wOGo3SG5tNHV5eldYZEw2cnJwK2U4a3U4ZFdlNVZmeUVhRVdQcm9hZkZBN2VGR1BzcFA3VmErSjRwdnFUeFl5WkpzUVpGTUlSMGtlTmJybUxPbXdJRDcrZndHOXczSG5DSmhaOFJqWldSMEpXRVIzU3dVREtXejI3dVpiRzMzYThXaFNSaFhDTElVWUk5d3JsVGxZZzJJVnRpUlkvS3BIQjh2WXFWQkpIQ3hWdkNTVVhNUE5ReEJZZW9xWHhFSm00ZEVJMUxFNHlWVUF0Y2grMWRSNVgxRlRNM0RtbmFDYWFLZUo0VlJjaXRCa2JJY3dNYk5JTWx6djZXSFM5QlR1SDhGbm1jeHh4dGRXeXNXQkNvM2s1dDNkcTM0T1VNVzVLbEZRaGd2ZmUxNzNzd3lnNmQwL3BVcml1SkdPWEV0aUZNUXhTQlZhRjBrZVBzd0ZCSVJ1b0l2cU50UE1XTEJZcGtJajhVZ2loQ3E4a1l4VW9SbUxsa0xhWFVtMTJ2cTE3VUhLWFN4SXRzYkgzR2xlcCtOTjVIT1VyZDNPVnRHWHZudXNPaEd4OXFxL011T1lIc1VKMUYzdHVRZGw5Qi9VVUdlSWN4MkpXSlFiRzJZblM0OGw2aW9LWGlFcnRtTEc5N2kzUStucDZWcTJPMVBqdzdFNmkzV3VMWFdnVFRNNXpNeFkrdE1oeHNpV0N5T29IUU1iRDRiVWNtSHNQL050YTFXWFhRVk5ycGF1RGNkekVKS2RUNFgwRno1TmJZMVlhNXJsdHA1LzBxNmN2WTN0SWdDZStsbEo4eDkwL0lXK0ZkeXViRXFhOHFFa0FDNUpBQUF1U1RzQUJ1ZlN2V3FaNER4bVBDOS82dUpKT2pzOWdnOGtYSWJIek43KzFkSXNmQU9XVnc2SEZZc1haRk1najN5WkJtek4rSjlOQnNQVTdhTDRmSFkwdktZRUN1cEViU2syalE2SHNsdnVSL3dDNWtKTjlDQmEyWitmSkdCSFlSMklJSVl1d0lPaEJHbHhVM3lqekkyS1o0NUZSV1ZWWkFnSUJYd3NOU2RpVitkUVV1WGdLbzJTVEZRbzQzVjFuWDQzYU1hZXRQL3lOeERMbmlraG1Yb1k1TDMrSkFINjFhL3BFRWYxVUZsQmJPcW8zVmIzWjdIeUtxUmJiVWVWVUhob3hTT3h3NnpCMUYzQ0srWUFqNzRBMjhyL0NnUmorRnp3LzJzVG9QTXIzVDdPTHFmbldpMVRHT3h1TnlEdFpKd2pqUU83aFhCVlc4TjlSWjE5TmFpR3FoYkNoTkdhQmpVVUpGS1kwMGlsa1VDMjJyWGNWc0VVcGhRSldtQ2dXakZCdWNMeFFqbFNRcm1WVzd5L2lSZ1ZkUjZsV1lEMXRYUXNUelRpTEF4aEZqUGdaVnpCZ1A0bTB2NWl3STJJRmMwV3RuRFlxU081amtkTDc1SFpiKzlqclh2dzh1T0YvRk82ZkZaK280Y3VTZmh5MWZtTCtuTk9JVkRKS1VhUFVXWkZHYy83TkxXdXgvd0NVYW5hcXBnK1BUeElWaktBa3N4WXhSdTJadCs4NmsydjBxTmxuZVE1cEhaMjJ1N0ZqYnl1VHRRclU1dVNaM2VNa254RjRPSzhjMWxiYjgxZXVadVpwRmtqK3E0a0JHaFJtRWVRaFpDV3pBbXhJTnN1bFEyRzVseGFJc2F5QUtsOHQwallpNXVlOHlrN21vSmFjdGVUMldURTh4R2JCTkZNN3ZMMnl1aHlxRkNCUUxYVzF0Uy9UclRNVHhQQnp4NGRKa3hHZUdNUjl6c2dyV3NMM2U1Kzc1RGVxeXBvMU5RYnVNYUhNcHc2eUlBTmUwWkdiTmZRaktBQlUyM00wYlNyaVd3b09KVUFaKzBZUmxndVVPWTdiZ2RML0FCcXRDczBCenl0STdPeHV6c3pNZk1zU1NiZTVOVWppa24yOG41cmZBQUNycFZWNDloZ2syZHZDNDM4allLdytXdnhxWkxHdEJoTTVZK2wvNTN0ODZra1NOUU0yck1GQUY5cml3UHRhdGFLYTJ0eDNnUWRkQ2Vuc05iZkgyb2MyWWpyM1dVRzN2bHY1V05oN1Z6NlZ0dmdBd3RtR3dBSCtLMzdYL3dDNHJXYmh0dFdGaGxKQjh6MEh2ZXRNY1FaWkErdDF0Y0hRNmIzOGplOUZoOFl6Wmt1U2JmWjlkVk43RWVvdjhSVXVsbTJFd2QySmV3RjlUNWV3cVk1ZGpBa2RrOERMK3FrZjk2aHBHTW1qM0RLd0RDMzNUcG10MHNUcnAxRldIbGZEc0lTNUhkWmlvTjl5b0JZVzMwTERYYXJqb3NUQnJGNjhhd2E5SERCTmIzQStJL1Y4UWt2M1ZidmVxTjNYL1EzOXdLMEt3YWd1L3dCSStMVXlRUkh2S3E5b3dCOFFkc29GL1VJK3Y4VlF1TTQrajlwOWdmdEhNdHpNNEt1eUZMbklGektBUlpkTFczTjZoOFRpWGNndWJsVVJCK1ZGeXFQa0sxelFiL0crTE5pWFYyUlZLcVVHVW0yWE96SUxIOElhM3JhbzAwVFVOVURTMm8ycGJDb29YTkF3cGhGTGFnV2FCaFJtaGFnUXRFS0VVUXFBeFRCUUNqRkFRbzFvQlJyVlF4YWF0S1dtclZCQ2pGQ042SmFBdzFaVTFnR2lGUVpCcUs1aHczYVJHMzNCbkhyWWdNRDhEY2V4cmZtbXRXcGc4VXNrbll0OS93QVA1a3VjcDlDdVlmTDJQT2ZwNmNlcmxxcExDOG1vVUVoUm5YUTVFSXZheHVPOFFPdW10U21CNWJoN1hJdUVuakNCV0xsbGRHTEFXc2RHekMvZXRlMlUzcWQ1UHhBWk96YmRkTmZUVFg1VmJvY09vMUFHM2xXUHV2cXRmYmpGZlhsYkR5SXdraVJpdlVxTC9NVkJZL2tyczhwd2tFT2E0MW16bFFDR3VWQzZCZ2NtNE43bmEydDl3cjN6V0hwOHV0T2drR29PbE1iNk1wN1ZqRDhBVE9aSkVqWmg0WEVZVjdEYk1ldWhxRXgzQyt6d2J0WlFweFRPaHZybFpudXR1bmVMR3J4ajVncWsxUU9POFJWNDQ0a2JObEpkellnQm12M1JmY2pNYmthWHQ2MTF4Uzl6bmxzN1VHMVl2WHF3YTJzVEZZTlpOQ2FnOVEzckpvYlVIbU5DVFdXb2JVVURHZ2FtTUtBMEFHZ2NVeHFXNG9GbWhORWFFMUFnVVFvUlJDZ1lLSVVBcGdvQ0ZHS0JhTVZRYTAxYXhCR3pzRlJXWm1OZ3FnbGlmSUFhbXJ6d0xrSjJzK0tiSXY4QXMwSUxuODc3TDdDNTlSVlJURnJJcnNZNWN3ZVVKOVdqc0JZSEwzdmkvaUo5U2FxM09uTDJHdzhBa2lRb3hrVlBHN0xZcTVPakUvaEZUWXBBckx0WVVOTHhCMG9JM2lFOWh2VmJlWTVzd0pCQnVDTkNDTmlEME5TdkUzME5RdGMxMUY3NUY0dkl6dUhjbDFJWUUyMVVqS3cwOHJEL0FIcTdCZ01UZGJzYStkT0I0aG84Ukd5bTEyQ24xRG5LUWZuK2dyc3ZCZUlyS25adU50R0Z5TGozRlpPYWF1MnZoeTdwcXBOK0dFU01mcmtpcTFyb2Noc292NEQ5MDJQcjdWSllCVWpRS0pHZlhSbmJNM3NUMXQ2NjFBLytuQU1jc0pjSHFYSnQ2OTQxdVlYaDhhQXQyU3EvUTVSbVgyUFN2TzJhOE5GeG12WjNHSmdxRm1Jc29KK1ZjMUp2clU1elJ4Tm1IWnJzR0FZKzRKQS9Tb0ZMbTF1dWc5VFdyZ3gxTnNYUGw1ME9OR1k1VlVzZWdVRWsvQWExNmFGME5uUjBKMkRxeWsrd0lxNjhPNFBJUVk0dTZpOTEzR2hkeG94WTdrWHZZYkFXOVNYNHJnazBhRU1PMGorOGhKTng1ajhMRG93MUZmUm5UelhuS1MvRDVWNnU3OFkyejVjK3JEVlp1WDQ0SWNheVRzbVZRNGphUzJUT1Nwalo3NkM2bS9vU090cWs4VmlwQmhzUXVQbGlrWmwrd1JHUm16NjJkQW91cVh5NzlBZmpscmFwQ1FzM2hWaitVRS90Uk5oWkFuYUZHQ1ppbWNxUXVZWHV0L3hhSFQwTlhMZytNYkRRWWZFVFl5UllpeklzQ3hnanVGeGtMWmdmdWs2aWxZdHZyT0JtTVNzYy9FQ3lBMkJQYVdBM050Mzg2bXhYOEZ5N2lwa0R4eEVvZkNTeXBtL0tISUxmQ2h3SEFNVExJMGFSa01qQlh6ZDBJVGUyZnJiUytnT2xYQ1hoWm1URHRpb1pZbXc2S2dDU1lZSzRTMWlwWndVUGRHMzhnYTBzZHhYc3A4UStJQ3FtSlRzeDlYbFdTV0lJb1ZXTnVwQitZNjJxcWpJZVNjV3pNckJFeXNCZG52bURNVkRLRkJPVzQ2Mk91MVZpZU1veklkMVpsUHVwSVA2aXV0NExFOWtZNE15NXhGR0VqbGxVWW1US3haczRBS2k2Z2dDNTY3VnlyaXBKbWxKUW9UTElTaHRkU1hZbFNSb1NOdmhRYVpOTGFqTkxhb0JOQ2FJMEJvcEFvaFFpc2lpR2lqRktVMHdVQmltTFNoVEZOQjF6a0tPQmNHc3NjWVZ5R1dSd0x1V1FtK3U5aUxNRkduZXF4NGpFaEZWOUNyT2kzOUpIVkZJK0xpdWVmUnZ4bU9JU3h6U0lpa3JJcGRnb0p0a2NYUFd3VFQwTmJ6OHdRbmh6eENaTzJqVmtSYmtsakMvMkxpMjRZSWh2NjFVWEhHejVKSUIrT1ZrUC9BbGNmcWdxQStrbHY4MVFlYzYvOU9XazhiNWlpaytyTkVKR0tZaU9SMUVNd3lwa2RYMUtBRWpQYXdOUjNQSEc0NTRvMFJKUmFYTmQ0M1JTQkc2MkJiYzk3YW9LWmVrNG1tWG9KdHFvci9FVjBOUXBxeFk1TktnV2pPYXdybXVvYnc5U1pZd04rMFQvQUJDdWlxN3hTQmwwSStSOS9Tb3o2UGVYMGthU2QyQmFNaFZRZEM2bnZ0NS9lQTlRM2tLNkp4SGdRbVFaZEhHeHJOeSticHA0cHFiUko1cktnWm96OERwWHArWkpKVnl4cFptN29QdjVDZ1hsV1JqWjNDMjZEV3A3Z3ZBSTRtelhMc09wNlY1VEY2MnEvd0FjNFAyV0RCT3I1MGR6NWtuTC93RGFxNGpiRWJqVWZEYXVvOFZoUjQzRW1pWlRuSk5nRkF1eHYwc05iK2xjL3dDQWNFa3hlRk04UGVaSFpHallCU2JCV0RJMTdFMmNYVTJzYjJ2cGZWeFh4WXk4dnZhNUx6TklZMWFCRkNXN3phc1ZjNnNyQVd5bTk3WDNGaUtYRHpKaVNDN01nUWVKMlh1Z2U0T3A4bEdwT2xVTlhraWMyTHh1dWhzV1J4NkcxajhLeGlNVkpKWXlTTzl0czdzMXZhNTByZmp6WVRIVndsdnkrYmwwMmR6N3B5V1kvQ1MveWdrV1dXUkZRZG8rYnZvamxRTkVVRnIyc3RoOEttdU5jelNMQmhXZ25WWGFNbVpVRWR3OWt0bUZ1NzkvVFNxWFExbWJFM2grWjhXaWxWbTBMcytxSXh6T1N6RzdLZHlTZmpXek56SzB1RG1obmQza2QwYU5zcWhWVldRa0cxcmVFOU90VnFzVVZaSmVMNFNXRER4enhUTTBDRkFVWkZVM3QxWUU3S1AxcUg0alBBU3YxZU40d0FjMmQ4NVk2V0kwR1cydGFWRGVnc3o4MmhwRm5mQ1J0aUVVS0pTN2hiZ0VCakVOQ1JmeitWVnJFenM3czdtN096T3g4MlkzSitab0NhQTBBazBEVm1oYW9vV05BVFJFMERVQ2hSQ2dGRUtJTVV3VWtVeFRRTkZFRFN3YU1HZ2Fwb3FVRFRBYW92dUEra1dSRlZaWVE5Z0FYVnlyTllXekVFRVhQd3JWNXM1b2p4c2NhSkc2TWpsem55a2VFcm9RYjlmS3FjcG93YUlhS3kyeHYrdGFPS3g2eDZlSnZ3ajkyUFN0S0pKTVJJc2QxSlk5MUN3UkwvRTk0L00rUXBhNm1Ock9PeGltK1RVZmkrNy9BSGZ4ZnRVdnlweWRKakY3VjNDUlhJeld6T3hIaUNqYlRhNTBCMHNkYXh3N2dCUnpKaUFDVkpDSnJsT1VsZTBjRUM2WEFJSDN0Q2U3NDdqdzlwbEtzMkpDQW0yV1p5cTJzU0dDc3dERFlBTHAxdHBlc0hWOHVmWmNlSzZ5K2RiZlI0ZWd0NC9xWjJTZmJmM1FuRXVEVDhMbCtzWVhNOEdVQncydGhwbVdYS0JwY1hFZ0doMy9BSXJQd3JuckJTQVo1REMvVlpBY3ZyWjFCVWozSVBwV09PYzN3d29SQTZ5eWtXWEpxaW44VE1EYXcvQ0NTZEFiYjF5MFIzSkozMStkZVg4Tnk1dVhqL256Vm5pWDFiK3VtWFBXTi9EZkR0VDhkd1RDNHhtSC93Q0tuOWEwOFR6bGdJVlAyNGMvaGlWcENmVE1CbEh4WVZ5QXA1VXlHRXNRb0JaaVFvQUZ5U2JBQUFibTVBdFgwUHA0dVBxVmFlTGN5WW5pYnJnOE5HVVIyQ2xiM2QrdmZZYUpHTEVrQytpNms3VjFybDNneVlQRHg0ZERmTGNzeEdyT3h1N1c2YTdEb0FCMHFGNUQ1U0dDajdTUUR0M0ZtNjltbWg3TlQ1NkFzUnVRQnFBRFdoek9YeEhFRndqTVJCSGgrMmFNSHV5c3pGTE9Eb3dGMXNEY0N4cmpsNU1lTEM1WDFKdHpKY3N0TFh4YmdrT0pXMHNZWWpadkM2L2xjYWoyMjlLb0hHdVJwbzd0QWUxUWZkMEVnK0EwZjRXUHBXNUR3MThNTStEbG5Sc3B5UVNTTThMTUJkVWRXekJMN2JnNjZFRVZjT1hPTUpqSUZtVlNwdVZkRDRrZGRHVS9vUjZFYmJWNWROMWVIUExjUHQ4KzF6NDdqN2NVZFNDVklJSU5pQ0NDRDVFSFVHaHJ0M0dPQlFZcGJTb0MxckJ4bzYremo5amNlbGMwNW41VWt3WTdRTm5pdUJuMlpDVFlCMTIxMEdZYms3RFMremJ6Vm9tc1hyMTZFbWc4VFFHc2swSk5CbHFXVFdXTkFUVUdEV0RYaWFGalJRc2FXVFdUUW1pRkNqQnBZb2hRTUZFdEFLSUdnWURUQWFVcG93YUF3YU1HbGcwWU5BMEd0ZmlHS01hWFh4RTJIcDVuL3dBOHhUbE5SUEZYdklxK1Z2bWJzZjB0VkNrUTdrM0pPcFBVbXRpTzZrT0wzRml0alloaHFDRDBJdHY1MGlIVkxlNEhvUmZML0twTGh1SWpXU041RkRKZTdCZ1NMRVd1UjFBdmNqWFkxSGVQbTZXdWJITVIyV0hmdDVPeklmRUY3QlE3cmNwMUpCMnkrQUFFWEphMmNURjJhTytPbFdSM1VwR0FuZlVkU2dzb3pNZnZXRmdnT1kzV3RERjhmaWpETGhZRVhOb1hLS3Q3V0lJVlQ1NWlMMnRlMXJYdkF2SXp0bWRpekhjbjlQWWVnMEZlY3gvdC90cXo1WkpQTzdQSDZRUzZDaFViZkd0N2h2QzVzUTJTQ041RGUzZEhkSDVuOEsvRWlyOXdmNkx4Wld4VXh2dVVpQXNQUXV3Ti9nbzl6WHB0bHRjNndPRWVRbFkwZDIwN3FJem41S0NiVjFUa1RrbzRZakVZa0F6RytWTkNJczI1SkdoY2pUVFFhMnZlOVc3aFBDNGNOSDJjTVlSUjBHN0g4VE1kV2IxTmIxTFhPM3FwUFBXSGxqbGl4a1NnZG1ycEl4dVZLRXFWU1N3dWllTTU5bE5zMWgzaGRxeG1HMXg4Njg4OE1jOGJqWnVYMlRMdHUzTTR1WVVCekhDWWtPUWU2aUNSV0xFblIxUG1UWW13NzVQV3A3Nk9jT1Z3OHJzUUhseE1zam9EY0kxd3BUTU5ENGI2ZWR1bFM4dkxHQ1lsamhZc3h2Y3FnVW0rOTh0cjNxU3c4Q1JvcVJvcW9veXFxZ0tvQTJDcU5BSzhPRHBPUGh0eXgzdS9OK3p2UGx1VTFUcTFjZGhrbGphSnhkWEJWaDZFZEQwUFVIekZiVkx2cjdEOTYxUE53YmltQWJEelBDKzZNVnYrSWJxM3hVZy9HdEVzS3Y1dzBYRU9LNG1LYzJFQ3FxSW5kTWlxYk9YYTk3cXpnYVcwWlIwMXV5OEt3NFFSaUNQSU5sS0tSK28zOWFvNFNhR3VrYys4Q3dzV0ZNa2NLSStkRnVsMUZqZTR5ZzVlbmxYTldvUE5TeWF5YXd4b01FMERHc2swQk5GQ1RRazFrMEpOQWtVYTBzR2lCb2hsRUtCVFRZSW1kbFJCZG1ZS284eXhzQjg2REsweGFzZUc0VEVtbVR0bTZ1UzRTLzhBQXFFRzNxeE45N0Rhc1l2Z3lPUHMwS09BU0V1ekpKYlVxdVlsbGUyMnBCMjAzclRsMHZKTWU2ejkyVEhyZUs1ZHN2bi9BQWdCV1JVMXk3d3VLU09mRVRGekhoMFZpaUVCM0wzdDNqNFZGdFQvQUVOUHgzRGNQSmdoallFZUxMTDJUUnUvYUt4SXZuamNnRnQ5Zlp2TFhPMW9GVFNlTGNGa1JWbnp4dXJGY3lxeHpvV1VaUTZFRHpVWEJPNHErY0I0UEM2SzgvRHlrWFlsemlHeFRFTmxUTm1FWUlzRzFQcFZQNHR4eUNXSEpHOG1jNUZ5U29wY0tHUnphVmVuYzJOdHg1Vm41czg4Y3NaalBGdm4ranZDWTJYYXZ3SHhqMUIvVCtvck1iM1Mza1dYK1kvU2dRMmRyOVYvWS84QWVwdmsvbHlURzRwb1VPVk1vZDMwT1JRY3R3dHhtSnVCOGZTdENCNFB3MmJGT3NjRVpkaXFrMjJVSDd6c2RGWGZVNzJzTG5TdXE4dC9SeERGMzhXVm5lM2dzZXlYNEhXUStyYWZ3OWFzZkwvQjRzSEVJSWtBQzZGckRQSWJlSnlBTXpXNi9LdzBxWVUxS25jOURFcUtGUlZWUm9GVUFLUFlEYWpGZUJyeTFFZXIxRC9XaW9QVkd5UWFNQkdTeFppRzdtbHpjRythK256cVNyMVdYVG5MR1ZHeTRZaVVNQUFDYmtxdmV2cmNNUWRqNTJQODZUdzZaeTVWaXdVQW1NTUxGbHpXTEVuVWthRFhvUVRxYWx5YUExZS94cXh4OVBWM0t5MjFWbm1ubWhjSXVTTmUxeE1sK3ppVUZqYmJPeXJybDBOZ05XSUlHeElzc214dFdqZ3VGUlFzem9nenZxOGpheVA1Qm4zeWpvb3NvR2dBcVBSenZsbmwzRlFUSGlXTm1TQ3hkM0RsY3pod3dZU0VFSkdDV0JBdVRjRFFXcm9IRVpjalErczRRLzNvNUFQMXRWWStsaVpCZ2hHekxtZVZiS1NMc0ZCTEVEcUJwZjNGUitINDlKaWNGaFRIRFBKSkhKQ1pIU01sQ1lDVmV6MzFZZ2JmeFVWS2ZTWTMrWktQT1pCL3lPZjVWeVpqVi81LzR3OHVIUkRoWjRoMnl0bmxWVlUyUnhsRm1PdXQvd0M2YTU4VFFlTkF4ckphZ0pvUEUwRjY4VFdDYUt3VFFNYXl4cFpOQXRhTVVrR21LYUlZRFVyeTZ3K3N4Z2tMbUxJQ2Rnem84YUgvQUhtV29lOUdEVmwxZHBsTnl4MmpEOFN3T0dHUlRuWWFFcWhPdlhVMkZZazR4Z3BpQmxkR1U1dzVRQURKM3lTUVRvQXBQd3Jta0hIemI3V1BPMzQxZnMzYjgvZFlNZld3SjYzT3RCamVOTkloalJCR2pDeldZczdnRzltZXc3dHdEWUFYdHJldHQ1T0x0M0xiWHo4ZUhsN3UyeVRIL243cExnbkZjUEJlWHRNV2tqRnN5d2lESmtMRXFwN1MrYlMyNDBON1ZQYzVZcUNPWHNKMXhFNWpRTW4yc2NjWXpnNnFrY1lGOTliVnoyOWJXTXgwa3JkcEs3TzlnTXpHNXNOaGZ5MU5ZbjBVdHhIaitGa3dzRU9JZ2tab1l6R0pJM1VXeldHWUl5Mko3cTZFMjMzcXQ0akJZZkwya2VJWWdXQVI0aXI1eUIzYzJiS1I0dThEZlRZOUNHQmttRDluWXRHbmFGTDk5a1UyY292M3N0d3hIbGM5S2o4ZGc1SVhWSlkyUjdLMlZ4WmdyQzZrcWRWdjVHeG9RYjZPcDg3cjh4L1VDdXdmUTlCRjJCa1ZCMm9lV04zMUxGUVkzUWE3QUt3MEhYMXJrTFJGd29HNVpRQ2RnU3dBSjlMMnJwSDBQNHNpZVdJNlpncjVlb0lEaHJqMHlvUGhRcnJNZzFvZ2FIRVZobXFJY0dyS21rbzlOUTFCbno5Njhhd0QrOWVhZ0s5RGV2WHJCb3J6bXNLYXdhd2hxb1lhaU9LOGF5S1ZoamZFVGJKR2d1TXgyN1IvREd2VWxpTk5ybXdxVmM2Ylg5Tk5mVFhTb3pIY1NuUWZaNEtTUzNsSmgwL3hTVkJXTUZ5TTg4djFuaWt2YlNHMzJTRXJFZ0J1RXZ1Vkg0UllhbTVhNUowdU84N3BoSnpoY0pDbVNLNnlLVnlKbUZ0SThoMHRxQ1NOOXR0WmZFY3pjUVc5dUVUSGUxcG9TRDVYS2svenJsRW5DK0lTVFN5eVlPWlN6eVNPVEc0VlE1WjI3ekFBZ1hPMTlxcXJCelJ6ZDlkaFNNdzVHU1FPU0h6QTJSMHQ0UVI0L3dCS3FwTllKb1NhRHhOQVRYaWF3VFFlWTBCYXZNYUFtaXZNYUFtc3NhV3hvRkthWXBwQ3RURk5FUEJySU5LRFV3R2dNR2pCcFFOWkJvSEEwVEhTbEtheTdhVUU5eWhoWTJjeWhyU3hoaXR5aktNeU9vRFI1c3plQmdMRlRkNC9FR3FCbTRjUHJYMWRwYzVhVll6S1F3dTdFTG5iTnFRSGJVOVFMamV0TUJHc2RqcnFOUDN1RDgxbzhRc2hQYWRvV2NuTUhaam1adHcyWnozamUyb0pvSFBoM1hQSElwUjFMSXluZFdCc1I4RFhWT1VlQmdTNGJpVVRXRW9ZVHhtMWxhWkNTeUVkTzFGaXA4ellpMXFsK0xjcTRiaUVhelc3T1YwVmhLbzFPWkFWN1JOTTRBc09qQzFnUUtieWx3cWJDWVY0SmdQczVHWkdVM1YwenJNR1hxTzhYQkJzUmIySnFXN2kxWWpwN2o5NncxWnhHdzl4KzlZYW9CVTA5S1FLY2hva0VuWDNySm9Jeis1b3pVVjRVTFZtaGFneGVoQjFyTjZBNzFRMW5BMUpzUE02RDUwdjY5RnNaSS85OWY2MXI4UXNZMkRBRUd3SUlCQjd3NkdxN2orRFllUmU5Q251cWhXK2EyTmNaNWFlbUhIM1RhM295blVFSDJJSS9TZ21HaEFGNy9JKzljRTQyaHc4enhSbXlpekEyR2J2RFltby93Q3Z5amFXUWV6dVAyTmRZM2MyNHl4MWROamp1QzdERVRRZ1dDT3dVWHZaQ2N5Qy93Q1VyVWNUWG5ZbTVKdVR1VHFUN21oSnJvZXZRazE0bWhKcURCTkNUUm9oYTloZXdMSDJIV2xFMFZoalNtTkV6VXBqUkNsTk5VMXJyVFZvSEJxTUdsQ2pGQTRHdkEwQW9oUUhucC9GTUhKQ3dTUkNoS2hsdnN5blVNakRSbDFHb05JV3I1em4vcWpBL2xpLzZRb09XVFNFSFEybzRNWXdOckc1UDNiM1B3NjFyNGpldDdsdi9TNHZ6ZnlOUlhlZm84NHpHY0ZERE5LcVNvR1FvNVZUbFYyRVlBT2g3bVFhZVZXN0ZKbWpZZWFzUG1wcm4vSy85azM1bi94R3Jmd0grelB2VW1Ya3p4N1o0YjRmTWl0NTVUODdHamF0WEEvMkVmNUkvd0JscmFOZHZNTk5XbEdtTFVXTXhiZkUvdWFNMHVIYjRuOXpSbWl2WHJCcjFDYUFiMWhxOTFyelVHaHhhWEtxanpZZm9DZjZWcW53MTdqKzhmdTM3Q3NKNGF6OG50cjR2eXh5RG5GclkxeC9DbjdWREZxbGVkUDlOZjhBS243VkVMWHRoK1dQRFA4QU5YczFEMmcydVBhcDF2N0RDZjhBeXQvakZYT2IvUm0vTkgvMUVycHc1aElDcHN3SUk2RUVINUd2TEU3ZUZHYjhxay90WFM4Ui9yOS95ZjhBNExYUUUyK0ZVZk9tRW5FY2lPUWJLNnNiYjJVZzZldGJwNHlvVVpVNzZyRUEyZ3VFeWwxZnpHaldQazFSVXU1OXpTbXFDWVBGNHdHVlE2cmRBZ3RmdUlEM1dzNjZrc1Q5NGE3Vm9jVjRpa2dHVk1wenU3ZVRac29EVzZOWlJjYlgxNjFwUFNXb1AvL1pcIlxuICAgICAgICB9XG4gICAgICAgIGFsdD17aW1hZ2VzWzBdfVxuICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICA+XG4gICAgICAgIDxQbHVzT3V0bGluZWQgb25DbGljaz17b25ab29tfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2ltYWdlcy5sZW5ndGggLSAxfVxuICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0dfT1VUX1JFUVVFU1QsXG4gIGxvZ291dFJlcXVlc3RBY3Rpb24sXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJyZWFjdC1jb29raWVzXCI7XG5cbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUsIGxvZ091dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxuICAgICAgZGF0YTogY29va2llLmxvYWQoXCJyZWZyZXNoVG9rZW5cIiksXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBhY3Rpb25zPXtbXG4gICAgICAgIDxkaXYga2V5PVwicG9zdHNcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICDqsozsi5zrrLxcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHttZS5wb3N0cy5sZW5ndGh9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIO2MlOuhnOyeiVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge21lLmZvbGxvd2luZ3MubGVuZ3RofVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2Vyc1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIO2MlOuhnOybjFxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge21lLmZvbGxvd2Vycy5sZW5ndGh9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24gb25DbGljaz17b25Mb2dPdXR9IGxvYWRpbmc9e2xvZ091dExvYWRpbmd9PlxuICAgICAgICDroZzqt7jslYTsm4NcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgU2xpY2sgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQge1xuICBDbG9zZUJ0bixcbiAgSGVhZGVyLFxuICBJbWdXcmFwcGVyLFxuICBJbmRpY2F0b3IsXG4gIE92ZXJsYXksXG4gIFNsaWNrV3JhcHBlcixcbn0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8T3ZlcmxheT5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0+4pyWPC9DbG9zZUJ0bj5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFNsaWNrV3JhcHBlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2xpY2tcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XG4gICAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KSA9PiAoXG4gICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17dn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2JhY2tVcmx9L3VwbG9hZC9pbWcvJHt2fWB9IGFsdD17dn0gLz5cbiAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGljaz5cbiAgICAgICAgICA8SW5kaWNhdG9yPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZSArIDF9IC8ge2ltYWdlcy5sZW5ndGh9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0luZGljYXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NsaWNrV3JhcHBlcj5cbiAgICA8L092ZXJsYXk+XG4gICk7XG59O1xuXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDbG9zZUJ0biA9IHN0eWxlZChDbG9zZU91dGxpbmVkKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XG4gIGJhY2tncm91bmQ6ICM4OTg5ODk7XG5gO1xuXG5leHBvcnQgY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJmltZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogNzUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgPiBkaXYge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5gO1xuIiwiZXhwb3J0IGNvbnN0IGJhY2tVcmwgPSBcImh0dHA6Ly93d3cuMmdldGhlci50azozMDAwXCI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdGlhbFZhbHVlID0gbnVsbCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9LCBbXSk7XG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXIsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUlucHV0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJyZWFjdC1jb29raWVzXCI7XG5pbXBvcnQgY29raWUgZnJvbSBcImNvb2tpZVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxuICApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxuICAgICAgZGF0YTogY29va2llLmxvYWQoXCJhY2Nlc3NUb2tlblwiKSxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDBcbiAgICAgICkge1xuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XG4gICAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxuICAgICAgICAgICAgbGFzdElkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIH07XG4gIH0sIFtoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRvZ2V0aGVyPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XG4gICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0FwcExheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcbiAgYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBwYXJzZWRDb29raWUgPSBjb250ZXh0LnJlcVxuICAgICAgPyBjb2tpZS5wYXJzZShjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSB8fCBcIlwiKVxuICAgICAgOiBcIlwiO1xuICAgIGlmIChjb250ZXh0LnJlcSAmJiBwYXJzZWRDb29raWUpIHtcbiAgICAgIGlmIChwYXJzZWRDb29raWVbXCJhY2Nlc3NUb2tlblwiXSkge1xuICAgICAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgICAgICAgICBkYXRhOiBwYXJzZWRDb29raWVbXCJhY2Nlc3NUb2tlblwiXSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgfSk7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcblxyXG4vLyjsnbTsoIQg7IOB7YOcICwg7JWh7IWYKT0+IOuLpOydjCDsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgc2luZ2xlUG9zdDogbnVsbCxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIHVubGlrZVBPc3RFcnJvcjogbnVsbCxcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSBcIlJFTU9WRV9JTUFHRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XG5cbmNvbnN0IHBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoID09PSAxMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgICAgcG9zdC5saWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5kYXRhLmlkIH0pO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuL3Bvc3RcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDrgrQg7KCV67O0IOuhnOuUqSDsi5zrj4TspJFcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IGZhbHNlLFxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuhnOuUqeykkVxuICBsb2FkVXNlckVycm9yOiBmYWxzZSxcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcbiAgZm9sbG93RG9uZTogZmFsc2UsXG4gIGZvbGxvd0Vycm9yOiBmYWxzZSxcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxuICB1bmZvbGxvd0Vycm9yOiBmYWxzZSxcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxuICBsb2dJbkRvbmU6IGZhbHNlLFxuICBsb2dJbkVycm9yOiBmYWxzZSxcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBudWxsLFxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRmFpbHVyZTogbnVsbCxcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVGYWlsdXJlOiBudWxsLFxuICBtZTogbnVsbCxcbiAgYWNjZXNzVG9rZW46IG51bGwsXG4gIHJlZnJlc2hUb2tlbjogbnVsbCxcbiAgdXNlcmluZm86IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dJbkRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZX0lORk9fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZX0lORk9fRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9IFwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXG59KTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5tZTtcbiAgICAgICAgZHJhZnQuYWNjZXNzVG9rZW4gPSBhY3Rpb24uZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgZHJhZnQucmVmcmVzaFRva2VuID0gYWN0aW9uLmRhdGEucmVmcmVzaFRva2VuO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2VycyA9IGRyYWZ0Lm1lLmZvbGxvd2Vycy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEubWU7XG4gICAgICAgIGRyYWZ0LmFjY2Vzc1Rva2VuID0gYWN0aW9uLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgICAgIGRyYWZ0LnJlZnJlc2hUb2tlbiA9IGFjdGlvbi5kYXRhLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5wb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLnBvc3QgPSBkcmFmdC5tZS5wb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZXNcIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuaWYgKGNvb2tpZS5sb2FkKFwiYWNjZXNzVG9rZW5cIikpIHtcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWFjY2Vzcy10b2tlblwiXSA9IGNvb2tpZS5sb2FkKFwiYWNjZXNzVG9rZW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHVzZXJTYWdhKSwgZm9yayhwb3N0U2FnYSldKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7XG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIEFERF9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX0ZBSUxVUkUsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIEFERF9QT1NUX1RPX01FLFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcblxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvbGlrZS8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvdW5saWtlLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdHNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1BPU1RfVE9fTUUsIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEuaWQgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9kZWxldGUvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEuaWQgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91cGxvYWQvaW1nXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuaW1hZ2VQYXRocyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL25leHRzLyR7bGFzdElkIHx8IFwiZmlyc3RcIn1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xuXG5pbXBvcnQge1xuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dpbmdzLyR7ZGF0YX0vb3B0aW9uPXVuZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93ZXJzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93aW5nc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChcIi9hdXRoL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XG59XG5cbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXV0aC9tZVwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiBkYXRhLFxuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLnJlZnJlc2hUb2tlbjtcblxuICAgIGNvb2tpZS5zYXZlKFwiYWNjZXNzVG9rZW5cIiwgYWNjZXNzVG9rZW4sIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0pO1xuICAgIGNvb2tpZS5zYXZlKFwicmVmcmVzaFRva2VuXCIsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3VzZXJzLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2F1dGgvbG9naW5cIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWFjY2Vzcy10b2tlblwiXSA9XG4gICAgICByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLnJlZnJlc2hUb2tlbjtcblxuICAgIGNvb2tpZS5zYXZlKFwiYWNjZXNzVG9rZW5cIiwgYWNjZXNzVG9rZW4sIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0pO1xuICAgIGNvb2tpZS5zYXZlKFwicmVmcmVzaFRva2VuXCIsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coY29va2llKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2F1dGgvbG9nb3V0XCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIngtcmVmcmVzaC10b2tlblwiOiBkYXRhLFxuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogbG9nT3V0KGFjdGlvbikge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hdXRoL3VzZXJzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICB9KTtcbiAgICBhbGVydChcIu2ajOybkOqwgOyeheyXkCDshLHqs7XtlZjshajsirXri4jri6QuXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hTaWduVXApLFxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXG4gICAgZm9yayh3YXRjaExvZ0luKSxcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb3Rpb24tcmVzZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudC9sb2NhbGUva29cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlJvdyIsIkNvbCIsIkdsb2JhbCIsIkhlYWRlciIsIkxvZ0luRm9ybSIsInVzZVNlbGVjdG9yIiwiVXNlclByb2ZpbGUiLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIm1lIiwic3RhdGUiLCJ1c2VyIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJ1c2VDYWxsYmFjayIsInVzZUlucHV0IiwiQ29tbWVudEZvcm0iLCJwb3N0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJvblN1Ym1pdENvbW1lbnQiLCJjb25zb2xlIiwibG9nIiwib2JqZWN0IiwidXNlRGlzcGF0Y2giLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJGb2xsb3dCdXR0b24iLCJkaXNwYXRjaCIsImZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0xvYWRpbmciLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZ3MiLCJmaW5kIiwidiIsImlkIiwid3JpdGVyIiwib25DTGlja0J1dHRvbiIsInR5cGUiLCJkYXRhIiwicHJvdG9UeXBlcyIsImNzcyIsImVtb3Rpb25SZXNldCIsInN0eWxlIiwiR2xvYmFsU3R5bGUiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJGb250QXdlc29tZUljb24iLCJmYUdsb2JlQXNpYSIsImZhQmFycyIsIk5hdlN0eWxlIiwiVG9nZXRoZXJEaXYiLCJMaXN0Iiwib3BlbmVkTWVudSIsIkl0ZW0iLCJNZW51Q29udGVudCIsIkhvbWUiLCJNZW51Iiwic2V0T3BlbmVkTWVudSIsIm9uQ0xpY2tNZW51IiwicHJldiIsImxvZ2luUmVxdWVzdEFjdGlvbiIsIkZvcm1XcmFwcGVyIiwiRW1haWxEaXYiLCJQYXNzd29yZERpdiIsIkJ1dHRvbldyYXBwZXIiLCJMYWJlbCIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJhbGVydCIsIm9uU3VibWl0Rm9ybSIsIkF2YXRhciIsIkNhcmQiLCJDb21tZW50IiwiSW1hZ2UiLCJQb3BvdmVyIiwiRWxsaXBzaXNPdXRsaW5lZCIsIkhlYXJ0T3V0bGluZWQiLCJIZWFydFR3b1RvbmUiLCJNZXNzYWdlT3V0bGluZWQiLCJNZXNzYWdlVHdvVG9uZSIsIlJldHdlZXRPdXRsaW5lZCIsIlBvc3RJbWFnZXMiLCJtb21lbnQiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiUG9zdENhcmRDb250ZW50IiwiU3R5bGVkRGl2IiwibG9jYWxlIiwiUG9zdENhcmQiLCJyZW1vdmVQb3N0TG9hZGluZyIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvbkxpa2UiLCJvblVubGlrZSIsIm9uVG9nZ2xlQ29tbWVudCIsIm9uUmVtb3ZlUG9zdCIsImxpa2VkIiwibGlrZWRVc2VycyIsImltYWdlcyIsImZsb2F0IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsIm5pY2tuYW1lIiwiY29udGVudCIsImNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInNoYXBlIiwibnVtYmVyIiwic3RyaW5nIiwiYXJyYXlPZiIsImxpa2VycyIsInBvc3REYXRhIiwic3BsaXQiLCJtYXAiLCJpIiwibWF0Y2giLCJzbGljZSIsInVzZVJlZiIsIkFERF9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfSU1BR0UiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJiYWNrVXJsIiwiUG9zdEZvcm0iLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsIm9uU3VibWl0IiwidHJpbSIsImltYWdlSW5wdXQiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwiZiIsImFwcGVuZCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIm1hcmdpbiIsImRpc3BsYXkiLCJ3aWR0aCIsIlBsdXNPdXRsaW5lZCIsIkltYWdlc1pvb20iLCJzaG93SW1hZ2VzWm9vbSIsInNldFNob3dJbWFnZXNab29tIiwib25ab29tIiwib25DbG9zZSIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJjb29raWUiLCJsb2dPdXRMb2FkaW5nIiwib25Mb2dPdXQiLCJsb2FkIiwicG9zdHMiLCJmb2xsb3dlcnMiLCJTbGljayIsIkNsb3NlQnRuIiwiSW1nV3JhcHBlciIsIkluZGljYXRvciIsIk92ZXJsYXkiLCJTbGlja1dyYXBwZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZSIsImZ1bmMiLCJDbG9zZU91dGxpbmVkIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkhlYWQiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJ3cmFwcGVyIiwiRU5EIiwiYXhpb3MiLCJjb2tpZSIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJvblNjcm9sbCIsInNjcm9sbFkiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBhcnNlZENvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJzdG9yZSIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIiwiSFlEUkFURSIsImNvbWJpbmVSZWR1Y2VycyIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsInByb2R1Y2UiLCJpbml0aWFsU3RhdGUiLCJzaW5nbGVQb3N0IiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQT3N0RXJyb3IiLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJwb3N0UmVkdWNlciIsImRyYWZ0IiwiY29uY2F0IiwiUG9zdElkIiwidW5zaGlmdCIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJFcnJvciIsImxvYWRVc2VyRG9uZSIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEZhaWx1cmUiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUZhaWx1cmUiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsInVzZXJpbmZvIiwic2lnblVwRGF0YSIsImxvZ0luRGF0YSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJyZWR1Y2VyIiwidXNlckluZm8iLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckVycm9yIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwiVXNlcklkIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImNvbW1vbiIsInJvb3RTYWdhIiwicHV0IiwidGFrZUxhdGVzdCIsInRocm90dGxlIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwicmVzcG9uc2UiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJzYXZlIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaFNpZ25VcCIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2UiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVdyYXBwZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJydW4iLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=
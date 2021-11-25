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
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Global */ "./components/Global.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _LogInForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LogInForm */ "./components/LogInForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\AppLayout.js";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











const WriterInfo = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a",  false ? 0 : {
  target: "euygdob1",
  label: "WriterInfo"
})( false ? 0 : {
  name: "1uxd0n7",
  styles: "padding-right:20px;padding-bottom:10px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcQXBwTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUyQiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXEFwcExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vR2xvYmFsXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IExvZ0luRm9ybSBmcm9tIFwiLi9Mb2dJbkZvcm1cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBXcml0ZXJJbmZvID0gc3R5bGVkLmFgXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuYDtcblxuY29uc3QgV3JpdGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHbG9iYWwgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9nSW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8V3JpdGVyRGl2PlxuICAgICAgICAgICAgPFdyaXRlckluZm9cbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmFhbXVraW0uZ2l0aHViLmlvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYWNrXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGZyb250LWVuZDogbWFkZSBieSBLaW1OYU11XG4gICAgICAgICAgICA8L1dyaXRlckluZm8+XG4gICAgICAgICAgICA8V3JpdGVySW5mb1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoZWV6ZUxhdHRlXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYWNrXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGJhY2stZW5kOiBtYWRlIGJ5IENoZWVzZUxhdHRlXG4gICAgICAgICAgICA8L1dyaXRlckluZm8+XG4gICAgICAgICAgPC9Xcml0ZXJEaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const WriterDiv = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "euygdob0",
  label: "WriterDiv"
})( false ? 0 : {
  name: "klisw8",
  styles: "padding-top:20px;padding-left:20px;display:flex;flex-direction:column",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcQXBwTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWU0QiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXEFwcExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vR2xvYmFsXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IExvZ0luRm9ybSBmcm9tIFwiLi9Mb2dJbkZvcm1cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBXcml0ZXJJbmZvID0gc3R5bGVkLmFgXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuYDtcblxuY29uc3QgV3JpdGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHbG9iYWwgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9nSW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8V3JpdGVyRGl2PlxuICAgICAgICAgICAgPFdyaXRlckluZm9cbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmFhbXVraW0uZ2l0aHViLmlvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYWNrXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGZyb250LWVuZDogbWFkZSBieSBLaW1OYU11XG4gICAgICAgICAgICA8L1dyaXRlckluZm8+XG4gICAgICAgICAgICA8V3JpdGVySW5mb1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoZWV6ZUxhdHRlXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYWNrXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGJhY2stZW5kOiBtYWRlIGJ5IENoZWVzZUxhdHRlXG4gICAgICAgICAgICA8L1dyaXRlckluZm8+XG4gICAgICAgICAgPC9Xcml0ZXJEaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const AppLayout = ({
  children
}) => {
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.user);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Global__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
      gutter: 8,
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
        xs: 24,
        md: 6,
        children: me ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_UserProfile__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, undefined) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_LogInForm__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 35
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
        xs: 24,
        md: 12,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
        xs: 24,
        md: 6,
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(WriterDiv, {
          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(WriterInfo, {
            href: "https://naamukim.github.io",
            target: "_black",
            rel: "noreferrer noopener",
            children: "front-end: made by KimNaMu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(WriterInfo, {
            href: "https://github.com/CheezeLatte",
            target: "_black",
            rel: "noreferrer noopener",
            children: "back-end: made by CheeseLatte"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

AppLayout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\CommentForm.js";









const CommentForm = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user);
  const {
    addCommentDone,
    addCommentLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.post);
  const [commentText, onChangeCommentText, setCommentText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);
  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__.ADD_COMMENT_REQUEST,
      data: {
        comment: commentText,
        postId: post.id
      }
    });
  }, [commentText]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onFinish: onSubmitComment,
    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        children: "\u2714"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
  const isFollowing = me === null || me === void 0 ? void 0 : me.followings.find(v => v._id === post.writer.id);
  const onClickButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.UNFOLLOW_REQUEST,
        data: post.writer.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.FOLLOW_REQUEST,
        data: post._id
      });
    }
  }, [isFollowing]);

  if (post.writer.id === me.id) {
    return null;
  }

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    children: isFollowing ? "언팔로우" : "팔로우"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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



const style = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)((emotion_reset__WEBPACK_IMPORTED_MODULE_1___default()), "{@font-face{font-family:\"Noto Sans CJK KR\",serif;font-style:normal;font-weight:100;src:url(\"../styles/fonts/NotoSansKR-Light.woff2\") format(\"woff2\"),url(\"../styles/fonts/NotoSansKR-Light.woff\") format(\"woff\"),url(\"../styles/fonts/NotoSansKR-Light.otf\") format(\"truetype\");}}@font-face{font-family:\"Noto Sans CJK KR\";font-style:normal;font-weight:normal;src:url(\"../styles/fonts/NotoSansKR-Regular.woff2\") format(\"woff2\"),url(\"../styles/fonts/NotoSansKR-Regular.woff\") format(\"woff\"),url(\"../styles/fonts/NotoSansKR-Regular.otf\") format(\"truetype\");}@font-face{font-family:\"Noto Sans CJK KR\";font-style:normal;font-weight:500;src:url(\"../styles/fonts/NotoSansKR-Medium.woff2\") format(\"woff2\"),url(\"../styles/fonts/NotoSansKR-Medium.woff\") format(\"woff\"),url(\"../styles/fonts/NotoSansKR-Medium.otf\") format(\"truetype\");}@font-face{font-family:\"Noto Sans CJK KR\";font-style:normal;font-weight:bold;src:url(\"../styles/fonts/NotoSansKR-Bold.woff2\") format(\"woff2\"),url(\"../styles/fonts/NotoSansKR-Bold.woff\") format(\"woff\"),url(\"../styles/fonts/NotoSansKR-Bold.otf\") format(\"truetype\");}*{margin:0;padding:0;}body{font-family:\"Noto Sans CJK KR\",sans-serif;box-sizing:border-box;background-color:#1f3b4d;}a{text-decoration:none;color:white;}.ant-row{margin-right:0!important;margin-left:0!important;}.ant-col:first-of-type{padding-left:0!important;}.ant-col:last-child{padding-right:0!important;}" + ( false ? 0 : ";label:style;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcR2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdpQiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXEdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgZW1vdGlvblJlc2V0IGZyb20gXCJlbW90aW9uLXJlc2V0XCI7XG5cbmNvbnN0IHN0eWxlID0gY3NzYFxuICAke2Vtb3Rpb25SZXNldH0ge1xuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiLCBzZXJpZjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUxpZ2h0Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgQ0pLIEtSXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1NZWRpdW0ub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBzcmM6IHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLUJvbGQub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICB9XG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmM2I0ZDtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5hbnQtcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtY29sOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtY29sOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSAoKSA9PiB7XG4gIHJldHVybiA8R2xvYmFsIHN0eWxlcz17c3R5bGV9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XG4iXX0= */");

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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\Header.js";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const NavStyle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("nav",  false ? 0 : {
  target: "e182imxc7",
  label: "NavStyle"
})( false ? 0 : {
  name: "1db3bjn",
  styles: "color:white;top:0;left:0;width:100%;height:50px;display:flex;align-items:center;background-color:#017374;z-index:10;box-shadow:1px 2px rgba(0, 0, 0, 0.2);margin-bottom:10px;@media screen and (max-width: 768px){flex-direction:column;align-items:center;height:auto;padding:8px 8px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVEyQiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFHbG9iZUFzaWEsIGZhQmFycyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcblxuY29uc3QgTmF2U3R5bGUgPSBzdHlsZWQubmF2YFxuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNzM3NDtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogOHB4IDhweDtcbiAgfVxuYDtcblxuY29uc3QgVG9nZXRoZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmA7XG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogJHsoeyBvcGVuZWRNZW51IH0pID0+IChvcGVuZWRNZW51ID8gXCJub25lXCIgOiBcImZsZXhcIil9O1xuICB9IDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQubGlgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20uNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggNnB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ5NDY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuYDtcblxuY29uc3QgSG9tZSA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuYDtcblxuY29uc3QgTWVudSA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW29wZW5lZE1lbnUsIHNldE9wZW5lZE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIG9uQ2hhbmdlU2VhcmNoSW5wdXRdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IG9uQ0xpY2tNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5lZE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBvblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcbiAgfSwgW3NlYXJjaElucHV0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2U3R5bGU+XG4gICAgICA8VG9nZXRoZXJEaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPEhvbWU+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmVBc2lhfSBjb2xvcj1cIiNEMEZFRkVcIiAvPlxuICAgICAgICAgICAgVG9nZXRoZXJcbiAgICAgICAgICA8L0hvbWU+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvVG9nZXRoZXJEaXY+XG4gICAgICA8TGlzdCBvcGVuZWRNZW51PXtvcGVuZWRNZW51fT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZSE66Gc7ZWEPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tmozsm5DqsIDsnoU8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgICAgIGVudGVyQnV0dG9uXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWFyY2hJbnB1dH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICA8L0xpc3Q+XG5cbiAgICAgIDxNZW51IGhyZWY9XCIjXCIgb25DbGljaz17b25DTGlja01lbnV9PlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgIDwvTWVudT5cbiAgICA8L05hdlN0eWxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const TogetherDiv = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "e182imxc6",
  label: "TogetherDiv"
})( false ? 0 : {
  name: "zffy6d",
  styles: "padding-left:10px;font-size:18px;@media screen and (max-width: 768px){padding-right:15px;padding-bottom:10px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCOEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLjVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBvbkNMaWNrTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuZWRNZW51KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const SearchInput = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__.Input.Search,  false ? 0 : {
  target: "e182imxc5",
  label: "SearchInput"
})( false ? 0 : {
  name: "1989ovb",
  styles: "vertical-align:middle",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0MiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLjVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBvbkNMaWNrTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuZWRNZW51KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const List = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("ul",  false ? 0 : {
  target: "e182imxc4",
  label: "List"
})("display:flex;justify-content:center;margin-left:40px;@media screen and (max-width: 768px){flex-direction:column;width:100%;margin-left:0;align-items:center;display:", ({
  openedMenu
}) => openedMenu ? "none" : "flex", ";}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDc0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLjVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBvbkNMaWNrTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuZWRNZW51KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */"));

const Item = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("li",  false ? 0 : {
  target: "e182imxc3",
  label: "Item"
})( false ? 0 : {
  name: "iru0pw",
  styles: "width:100%;border-bottom:5px solid transparent;transition:border-bottom.5s ease-in-out;display:flex;justify-content:center;margin:8px;align-items:center;@media screen and (max-width: 768px){text-align:center;width:100%;&:hover{border-radius:5px;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEc0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLjVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBvbkNMaWNrTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuZWRNZW51KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const MenuContent = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span",  false ? 0 : {
  target: "e182imxc2",
  label: "MenuContent"
})( false ? 0 : {
  name: "lbtank",
  styles: "cursor:pointer;padding:10px 6px;&:hover{background-color:#d49466;border-radius:7px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFK0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLjVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBvbkNMaWNrTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuZWRNZW51KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Home = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span",  false ? 0 : {
  target: "e182imxc1",
  label: "Home"
})( false ? 0 : {
  name: "p662uq",
  styles: "cursor:pointer;padding-left:5px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFd0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLjVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBvbkNMaWNrTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuZWRNZW51KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Menu = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a",  false ? 0 : {
  target: "e182imxc0",
  label: "Menu"
})( false ? 0 : {
  name: "1lze1c9",
  styles: "display:none;position:absolute;left:10px;font-size:20px;color:#000;@media screen and (max-width: 768px){display:block;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9GcUIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhR2xvYmVBc2lhLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLm5hdmBcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTczNzQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2V0aGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7KHsgb3BlbmVkTWVudSB9KSA9PiAob3BlbmVkTWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIpfTtcbiAgfSA7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLjVzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OTQ2NjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWRNZW51LCBzZXRPcGVuZWRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBvbkNoYW5nZVNlYXJjaElucHV0XSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBvbkNMaWNrTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuZWRNZW51KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlPlxuICAgICAgPFRvZ2V0aGVyRGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxIb21lPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlQXNpYX0gY29sb3I9XCIjRDBGRUZFXCIgLz5cbiAgICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgICAgPC9Ib21lPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RvZ2V0aGVyRGl2PlxuICAgICAgPExpc3Qgb3BlbmVkTWVudT17b3BlbmVkTWVudX0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2UhOuhnO2VhDwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8TWVudUNvbnRlbnQ+7ZqM7JuQ6rCA7J6FPC9NZW51Q29udGVudD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8TWVudSBocmVmPVwiI1wiIG9uQ2xpY2s9e29uQ0xpY2tNZW51fT5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9OYXZTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Header = () => {
  const {
    0: openedMenu,
    1: setOpenedMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [searchInput, onChangeSearchInput] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default)("");
  const onCLickMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setOpenedMenu(prev => !prev);
  }, []);
  const onSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(NavStyle, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TogetherDiv, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Home, {
          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGlobeAsia,
            color: "#D0FEFE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined), "Together"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(List, {
      openedMenu: openedMenu,
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Item, {
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/profile",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(MenuContent, {
            children: "\uD504\uB85C\uD544"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Item, {
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/signup",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(MenuContent, {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Item, {
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SearchInput, {
          enterButton: true,
          value: searchInput,
          onChange: onChangeSearchInput,
          onSearch: onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Menu, {
      href: "#",
      onClick: onCLickMenu,
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBars
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQyIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXExvZ0luRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcbiAgcGFkZGluZzogMTBweDtcbmA7XG5cbmNvbnN0IEVtYWlsRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuYDtcblxuY29uc3QgUGFzc3dvcmREaXYgPSBzdHlsZWQuZGl2YFxuICBvdXRsaW5lOiBub25lO1xuYDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEycHg7XG5gO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogIzAxNzM3NDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgTG9nSW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dJbkVycm9yKSB7XG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcbiAgICB9XG4gIH0sIFtsb2dJbkVycm9yXSk7XG5cbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxFbWFpbERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7J2066mU7J28PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9FbWFpbERpdj5cbiAgICAgIDxQYXNzd29yZERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9QYXNzd29yZERpdj5cbiAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwic2lnbnVwXCI+XG4gICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nSW5Gb3JtO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const EmailDiv = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "e1i8mgqj5",
  label: "EmailDiv"
})( false ? 0 : {
  name: "vqx3x2",
  styles: "margin-bottom:5px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVkyQiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXExvZ0luRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcbiAgcGFkZGluZzogMTBweDtcbmA7XG5cbmNvbnN0IEVtYWlsRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuYDtcblxuY29uc3QgUGFzc3dvcmREaXYgPSBzdHlsZWQuZGl2YFxuICBvdXRsaW5lOiBub25lO1xuYDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEycHg7XG5gO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogIzAxNzM3NDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgTG9nSW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dJbkVycm9yKSB7XG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcbiAgICB9XG4gIH0sIFtsb2dJbkVycm9yXSk7XG5cbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxFbWFpbERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7J2066mU7J28PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9FbWFpbERpdj5cbiAgICAgIDxQYXNzd29yZERpdj5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9MYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9QYXNzd29yZERpdj5cbiAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwic2lnbnVwXCI+XG4gICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nSW5Gb3JtO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const PasswordDiv = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "e1i8mgqj4",
  label: "PasswordDiv"
})( false ? 0 : {
  name: "12mkfdx",
  styles: "outline:none",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCOEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Input = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("input",  false ? 0 : {
  target: "e1i8mgqj3",
  label: "Input"
})( false ? 0 : {
  name: "yvx3vb",
  styles: "width:100%;height:30px;border-radius:30px;padding:0 20px;margin-top:10px;border:1px solid lightgray;font-size:12px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CMEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const ButtonWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  false ? 0 : {
  target: "e1i8mgqj2",
  label: "ButtonWrapper"
})( false ? 0 : {
  name: "pr25zp",
  styles: "display:flex;justify-content:center;margin-top:10px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0MiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Label = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("label",  false ? 0 : {
  target: "e1i8mgqj1",
  label: "Label"
})( false ? 0 : {
  name: "1y5pc60",
  styles: "color:white",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DMEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Button = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button",  false ? 0 : {
  target: "e1i8mgqj0",
  label: "Button"
})( false ? 0 : {
  name: "l2l40k",
  styles: "background:#017374;width:100%;height:35px;border:0;outline:none;border-radius:40px;color:white;font-size:15px;letter-spacing:2px;cursor:pointer",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcTG9nSW5Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxjb21wb25lbnRzXFxMb2dJbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const LogInForm = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    logInLoading,
    logInError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user);
  const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)("");
  const [password, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)("");
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc6rmA7KeA7JuQXFxEb2N1bWVudHNcXFRvZ2V0aGVyXFxwcmVwYXJlXFxmcm9udFxcY29tcG9uZW50c1xcUG9zdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEI0QiIsImZpbGUiOiJDOlxcVXNlcnNcXOq5gOyngOybkFxcRG9jdW1lbnRzXFxUb2dldGhlclxccHJlcGFyZVxcZnJvbnRcXGNvbXBvbmVudHNcXFBvc3RDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIENvbW1lbnQsIEltYWdlLCBMaXN0LCBQb3BvdmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gIEVsbGlwc2lzT3V0bGluZWQsXG4gIEhlYXJ0T3V0bGluZWQsXG4gIEhlYXJ0VHdvVG9uZSxcbiAgTWVzc2FnZU91dGxpbmVkLFxuICBNZXNzYWdlVHdvVG9uZSxcbiAgUmV0d2VldE91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IFwibW9tZW50L2xvY2FsZS9rb1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tIFwiLi9Qb3N0Q2FyZENvbnRlbnRcIjtcblxuY29uc3QgU3R5bGVkRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmA7XG5cbm1vbWVudC5sb2NhbGUoXCJrb1wiKTtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcbiAgICB9XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHBvc3QuaWQsXG4gICAgfSk7XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gICAgICBkYXRhOiBwb3N0LmlkLFxuICAgIH0pO1xuICB9LCBbaWRdKTtcblxuICBjb25zdCBsaWtlZCA9IHBvc3QubGlrZWRVc2Vycy5maW5kKCh2KSA9PiB2Ll9pZCA9PT0gaWQpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWREaXY+XG4gICAgICA8Q2FyZFxuICAgICAgICBjb3Zlcj17cG9zdC5pbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LmltYWdlc30gLz59XG4gICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcbiAgICAgICAgICBsaWtlZCA/IChcbiAgICAgICAgICAgIDxIZWFydFR3b1RvbmVcbiAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXG4gICAgICAgICAgICAgIGtleT1cImhlYXJ0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Vbmxpa2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uTGlrZX0gLz5cbiAgICAgICAgICApLFxuICAgICAgICAgIGNvbW1lbnRGb3JtT3BlbmVkID8gKFxuICAgICAgICAgICAgPE1lc3NhZ2VUd29Ub25lXG4gICAgICAgICAgICAgIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIlxuICAgICAgICAgICAgICBrZXk9XCJjb21tZW50XCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVDb21tZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPlxuICAgICAgICAgICksXG4gICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgIGtleT1cIm1vcmVcIlxuICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XG4gICAgICAgICAgICAgICAge2lkICYmIHBvc3Qud3JpdGVyLl9pZCA9PT0gaWQgPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmVQb3N0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cbiAgICAgICAgICA8L1BvcG92ZXI+LFxuICAgICAgICBdfVxuICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cbiAgICAgID5cbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0+XG4gICAgICAgICAgICB7bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mcm9tTm93KCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENhcmQuTWV0YVxuICAgICAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC53cml0ZXIuX2lkfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhcj57cG9zdC53cml0ZXIubmlja25hbWVbMF19PC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aXRsZT17cG9zdC53cml0ZXIubmlja25hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cblxuICAgICAgICA8SW1hZ2UgLz5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5jb21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LmNvbW1lbnRzfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0ud3JpdGVyLm5pY2tuYW1lfVxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLndyaXRlci5uaWNrbmFtZX08L0F2YXRhcj59XG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbW1lbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvU3R5bGVkRGl2PlxuICApO1xufTtcblxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHdyaXRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBsaWtlZFVzZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIl19 */",
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
  const liked = post.likedUsers.find(v => v._id === id);
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
          children: id && post.writer._id === id ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
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
            href: `/user/${post.writer._id}`,
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
              children: item.writer.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 27
            }, undefined),
            content: item.comment
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
    likedUsers: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object))
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
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))
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
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
        children: ["\uAC8C\uC2DC\uBB3C", (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined), me.posts.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined)
    }, "posts", false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/profile",
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          children: ["\uD314\uB85C\uC789", (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, undefined), me.followings.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined)
    }, "followings", false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/profile",
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          children: ["\uD314\uB85C\uC6CC", (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, undefined), me.followers.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined)
    }, "followers", false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
            lineNumber: 53,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, undefined),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: onLogOut,
      loading: logOutLoading,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Global */ "./components/Global.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\components\\imagesZoom\\index.js";








const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Overlay, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Global__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Header, {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.CloseBtn, {
        onClick: onClose,
        children: "\u2716"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.SlickWrapper, {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
          initialSlide: 0,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ImgWrapper, {
            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: `${_config_config__WEBPACK_IMPORTED_MODULE_4__.backUrl}/upload/img/${v}`,
              alt: v
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 17
            }, undefined)
          }, v, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Indicator, {
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: [currentSlide + 1, " / ", images.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
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
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //     data: cookie.load("accessToken"),
  //   });
  // }, []);

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
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("title", {
        children: "Together"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [me && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 16
      }, undefined), mainPosts.map(post => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_8__.default.getServerSideProps(async context => {
  const parsedCookie = context.req ? cookie__WEBPACK_IMPORTED_MODULE_11___default().parse(context.req.headers.cookie || "") : "";

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
/* harmony export */   "LOAD_HASHTAG_POSTS_REQUEST": () => (/* binding */ LOAD_HASHTAG_POSTS_REQUEST),
/* harmony export */   "LOAD_HASHTAG_POSTS_SUCCESS": () => (/* binding */ LOAD_HASHTAG_POSTS_SUCCESS),
/* harmony export */   "LOAD_HASHTAG_POSTS_FAILURE": () => (/* binding */ LOAD_HASHTAG_POSTS_FAILURE),
/* harmony export */   "ADD_COMMENT_REQUEST": () => (/* binding */ ADD_COMMENT_REQUEST),
/* harmony export */   "ADD_COMMENT_SUCCESS": () => (/* binding */ ADD_COMMENT_SUCCESS),
/* harmony export */   "ADD_COMMENT_FAILURE": () => (/* binding */ ADD_COMMENT_FAILURE),
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
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
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
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
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
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = draft.mainPosts.length === 10;
        break;

      case LOAD_HASHTAG_POSTS_FAILURE:
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
          console.log(action.data);
          const post = draft.mainPosts.find(v => v.id === +action.data.postId);
          post.likedUsers.push({
            _id: action.data.userId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
        }
        break;

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === +action.data.postId);
          post.likedUsers = post.likedUsers.filter(v => v._id !== action.data.userId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
        }
        break;

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
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

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== +action.data.postId);
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === +action.data.postId);
        post.comments.unshift(action.data.comment);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
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
      draft.me.followers = draft.me.followers.filter(v => v.id !== action.data.id);
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

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      draft.me.followings.push({
        id: action.data.userId
      });
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      draft.me.followings = draft.me.followings.filter(v => v.id !== action.data.userId);
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
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
      draft.me.post = draft.me.posts.filter(v => v.id !== +action.data.postId);
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




function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/user/comments/${data.postId}`, {
    comment: data.comment
  });
}

function* addComment(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addCommentAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_SUCCESS,
      data: result.data.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_FAILURE,
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/api/like/${data}`);
}

function* likePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(likePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LIKE_POST_SUCCESS,
      data: result.data.data
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/api/unlike/${data}`);
}

function* unlikePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(unlikePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.UNLIKE_POST_SUCCESS,
      data: result.data.data
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

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadHashtagPostsAPI, action.data, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_HASHTAG_POSTS_FAILURE,
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_REQUEST, addComment);
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

function* watchLoadHashtagPosts() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function* postSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUploadImages), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnlikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadHashtagPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemovePost)]);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/user/followings/${data}?option=follow`);
}

function* follow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(followAPI, action.data);
    console.log(result.data);
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
    const accessToken = result.data.data.accessToken; // const refreshToken = result.data.data.refreshToken;

    react_cookies__WEBPACK_IMPORTED_MODULE_2___default().save("accessToken", accessToken, {
      path: "/"
    }); // cookie.save("refreshToken", refreshToken, {
    //   path: "/",
    // });
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
    react_cookies__WEBPACK_IMPORTED_MODULE_2___default().remove("accessToken");
    react_cookies__WEBPACK_IMPORTED_MODULE_2___default().remove("refreshToken");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9Mb2dJbkZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvaW1hZ2VzWm9vbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbXBvbmVudHMvaW1hZ2VzWm9vbS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZC9iYXNlXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiZW1vdGlvbi1yZXNldFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibW9tZW50L2xvY2FsZS9rb1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2lnbm9yZWR8QzpcXFVzZXJzXFzquYDsp4Dsm5BcXERvY3VtZW50c1xcVG9nZXRoZXJcXHByZXBhcmVcXGZyb250XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vR2xvYmFsXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IExvZ0luRm9ybSBmcm9tIFwiLi9Mb2dJbkZvcm1cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBXcml0ZXJJbmZvID0gc3R5bGVkLmFgXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuYDtcblxuY29uc3QgV3JpdGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHbG9iYWwgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9nSW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8V3JpdGVyRGl2PlxuICAgICAgICAgICAgPFdyaXRlckluZm9cbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmFhbXVraW0uZ2l0aHViLmlvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYWNrXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGZyb250LWVuZDogbWFkZSBieSBLaW1OYU11XG4gICAgICAgICAgICA8L1dyaXRlckluZm8+XG4gICAgICAgICAgICA8V3JpdGVySW5mb1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoZWV6ZUxhdHRlXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYWNrXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGJhY2stZW5kOiBtYWRlIGJ5IENoZWVzZUxhdHRlXG4gICAgICAgICAgICA8L1dyaXRlckluZm8+XG4gICAgICAgICAgPC9Xcml0ZXJEaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5cbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBhZGRDb21tZW50RG9uZSwgYWRkQ29tbWVudExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxuICApO1xuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KFwiXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhZGRDb21tZW50RG9uZSkge1xuICAgICAgc2V0Q29tbWVudFRleHQoXCJcIik7XG4gICAgfVxuICB9LCBbYWRkQ29tbWVudERvbmVdKTtcblxuICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHsgY29tbWVudDogY29tbWVudFRleHQsIHBvc3RJZDogcG9zdC5pZCB9LFxuICAgIH0pO1xuICB9LCBbY29tbWVudFRleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxuICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fVxuICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2FkZENvbW1lbnRMb2FkaW5nfT5cbiAgICAgICAgICDinJRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXG4gICk7XG4gIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LmZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5faWQgPT09IHBvc3Qud3JpdGVyLmlkKTtcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNGb2xsb3dpbmcpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcbiAgICAgICAgZGF0YTogcG9zdC53cml0ZXIuaWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGT0xMT1dfUkVRVUVTVCwgZGF0YTogcG9zdC5faWQgfSk7XG4gICAgfVxuICB9LCBbaXNGb2xsb3dpbmddKTtcbiAgaWYgKHBvc3Qud3JpdGVyLmlkID09PSBtZS5pZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ30gb25DbGljaz17b25DbGlja0J1dHRvbn0+XG4gICAgICB7aXNGb2xsb3dpbmcgPyBcIuyWuO2MlOuhnOyasFwiIDogXCLtjJTroZzsmrBcIn1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cbkZvbGxvd0J1dHRvbi5wcm90b1R5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XG4iLCJpbXBvcnQgeyBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IGVtb3Rpb25SZXNldCBmcm9tIFwiZW1vdGlvbi1yZXNldFwiO1xuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgJHtlbW90aW9uUmVzZXR9IHtcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIiwgc2VyaWY7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1MaWdodC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItTGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1MaWdodC5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgfVxuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIENKSyBLUlwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybChcIi4uL3N0eWxlcy9mb250cy9Ob3RvU2Fuc0tSLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItUmVndWxhci5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgQ0pLIEtSXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1NZWRpdW0ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1NZWRpdW0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItTWVkaXVtLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgc3JjOiB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKFwiLi4vc3R5bGVzL2ZvbnRzL05vdG9TYW5zS1ItQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICB1cmwoXCIuLi9zdHlsZXMvZm9udHMvTm90b1NhbnNLUi1Cb2xkLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgfVxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgS1JcIiwgc2Fucy1zZXJpZjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjNiNGQ7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYW50LXJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuYW50LWNvbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuYW50LWNvbDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gKCkgPT4ge1xuICByZXR1cm4gPEdsb2JhbCBzdHlsZXM9e3N0eWxlfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUdsb2JlQXNpYSwgZmFCYXJzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBOYXZTdHlsZSA9IHN0eWxlZC5uYXZgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3Mzc0O1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xuICB9XG5gO1xuXG5jb25zdCBUb2dldGhlckRpdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbmA7XG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZChJbnB1dC5TZWFyY2gpYFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYDtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAkeyh7IG9wZW5lZE1lbnUgfSkgPT4gKG9wZW5lZE1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiKX07XG4gIH0gO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS41cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCA2cHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDk0NjY7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5gO1xuXG5jb25zdCBIb21lID0gc3R5bGVkLnNwYW5gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbb3BlbmVkTWVudSwgc2V0T3BlbmVkTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgb25DaGFuZ2VTZWFyY2hJbnB1dF0gPSB1c2VJbnB1dChcIlwiKTtcbiAgY29uc3Qgb25DTGlja01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbmVkTWVudSgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xuICB9LCBbc2VhcmNoSW5wdXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZTdHlsZT5cbiAgICAgIDxUb2dldGhlckRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8SG9tZT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZUFzaWF9IGNvbG9yPVwiI0QwRkVGRVwiIC8+XG4gICAgICAgICAgICBUb2dldGhlclxuICAgICAgICAgIDwvSG9tZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Ub2dldGhlckRpdj5cbiAgICAgIDxMaXN0IG9wZW5lZE1lbnU9e29wZW5lZE1lbnV9PlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgIDxNZW51Q29udGVudD7tlITroZztlYQ8L01lbnVDb250ZW50PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxuICAgICAgICAgICAgPE1lbnVDb250ZW50Pu2ajOybkOqwgOyehTwvTWVudUNvbnRlbnQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlYXJjaElucHV0fVxuICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgIDwvTGlzdD5cblxuICAgICAgPE1lbnUgaHJlZj1cIiNcIiBvbkNsaWNrPXtvbkNMaWNrTWVudX0+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgPC9NZW51PlxuICAgIDwvTmF2U3R5bGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG5jb25zdCBFbWFpbERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbmA7XG5cbmNvbnN0IFBhc3N3b3JkRGl2ID0gc3R5bGVkLmRpdmBcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICMwMTczNzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ0luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8RW1haWxEaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvRW1haWxEaXY+XG4gICAgICA8UGFzc3dvcmREaXY+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvTGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvUGFzc3dvcmREaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ0luRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDYXJkLCBDb21tZW50LCBJbWFnZSwgTGlzdCwgUG9wb3ZlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge1xuICBFbGxpcHNpc091dGxpbmVkLFxuICBIZWFydE91dGxpbmVkLFxuICBIZWFydFR3b1RvbmUsXG4gIE1lc3NhZ2VPdXRsaW5lZCxcbiAgTWVzc2FnZVR3b1RvbmUsXG4gIFJldHdlZXRPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBcIm1vbWVudC9sb2NhbGUva29cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b25cIjtcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gO1xuXG5tb21lbnQubG9jYWxlKFwia29cIik7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHBvc3QuaWQsXG4gICAgfSk7XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gICAgICBkYXRhOiBwb3N0LmlkLFxuICAgIH0pO1xuICB9LCBbaWRdKTtcblxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xuICAgIH1cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3QgbGlrZWQgPSBwb3N0Lmxpa2VkVXNlcnMuZmluZCgodikgPT4gdi5faWQgPT09IGlkKTtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRGl2PlxuICAgICAgPENhcmRcbiAgICAgICAgY292ZXI9e3Bvc3QuaW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5pbWFnZXN9IC8+fVxuICAgICAgICBhY3Rpb25zPXtbXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXG4gICAgICAgICAgbGlrZWQgPyAoXG4gICAgICAgICAgICA8SGVhcnRUd29Ub25lXG4gICAgICAgICAgICAgIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIlxuICAgICAgICAgICAgICBrZXk9XCJoZWFydFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uVW5saWtlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+XG4gICAgICAgICAgKSxcbiAgICAgICAgICBjb21tZW50Rm9ybU9wZW5lZCA/IChcbiAgICAgICAgICAgIDxNZXNzYWdlVHdvVG9uZVxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcbiAgICAgICAgICAgICAga2V5PVwiY29tbWVudFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz5cbiAgICAgICAgICApLFxuICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LndyaXRlci5faWQgPT09IGlkID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIOyCreygnFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XG4gICAgICAgICAgPC9Qb3BvdmVyPixcbiAgICAgICAgXX1cbiAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XG4gICAgICA+XG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAge21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3Qud3JpdGVyLl9pZH1gfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXI+e3Bvc3Qud3JpdGVyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGU9e3Bvc3Qud3JpdGVyLm5pY2tuYW1lfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG5cbiAgICAgICAgPEltYWdlIC8+XG4gICAgICA8L0NhcmQ+XG4gICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuY29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5jb21tZW50c31cbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8Q29tbWVudFxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLndyaXRlci5uaWNrbmFtZX1cbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS53cml0ZXIubmlja25hbWV9PC9BdmF0YXI+fVxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb21tZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1N0eWxlZERpdj5cbiAgKTtcbn07XG5cblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB3cml0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgbGlrZWRVc2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBQb3N0Q2FyZENvbnRlbnQgPSAoeyBwb3N0RGF0YSB9KSA9PiAoXG4gIDxkaXY+XG4gICAge3Bvc3REYXRhLnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYsIGkpID0+IHtcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS8pKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLyog7IKs7Jqp7J6QIOydmOuPhOqwgCDrk6TslrTqsIDripQga2V5ID0+IGtleSA9IHtpfSDroZwg7IKs7Jqp7ZWY6rKg7J2MICovXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3Yuc2xpY2UoMSl9YH0ga2V5PXtpfT5cbiAgICAgICAgICAgIDxhPnt2fTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdjtcbiAgICB9KX1cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0Q2FyZENvbnRlbnQucHJvcFR5cGVzID0ge1xuICBwb3N0RGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkQ29udGVudDtcbiIsImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICBBRERfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfSU1BR0UsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFkZFBvc3REb25lKSB7XG4gICAgICBzZXRUZXh0KFwiXCIpO1xuICAgIH1cbiAgfSwgW2FkZFBvc3REb25lXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwi6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gICAgICBkYXRhOiB7IGltYWdlczogaW1hZ2VQYXRocywgY29udGVudDogdGV4dCB9LFxuICAgIH0pO1xuICB9LCBbdGV4dCwgaW1hZ2VQYXRoc10pO1xuXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2VzXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4ge1xuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoXCJpbWdcIiwgZik7XG4gICAgfSk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXgpID0+ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxuICAgICAgICBkYXRhOiBpbmRleCxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMCAyMHB4XCIgfX1cbiAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cbiAgICA+XG4gICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9XG4gICAgICAgIG1heExlbmd0aD17MTQwfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIuyYpOuKmCDsnKDsoIDri5jsnbQg66y07IqoIOydvOydtCDsnojsnLzshajripQg7KeAIOq2geq4iO2VqeuLiOuLpFwiXG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICBoaWRkZW5cbiAgICAgICAgICByZWY9e2ltYWdlSW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFRvZ2V0aGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtgJHtiYWNrVXJsfS91cGxvYWQvaW1nLyR7dn1gfVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19XG4gICAgICAgICAgICAgIGFsdD17dn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBJbWFnZXNab29tIGZyb20gXCIuL2ltYWdlc1pvb21cIjtcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgc3JjPXtgJHtiYWNrVXJsfS91cGxvYWQvaW1nLyR7aW1hZ2VzWzBdfWB9XG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF19XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAvPlxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxuICAgICAgICAgIHNyYz17YCR7YmFja1VybH0vdXBsb2FkL2ltZy8ke2ltYWdlc1swXX1gfVxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdfVxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcbiAgICAgICAgICBzcmM9e2Ake2JhY2tVcmx9L3VwbG9hZC9pbWcvJHtpbWFnZXNbMV19YH1cbiAgICAgICAgICBhbHQ9e2ltYWdlc1sxXX1cbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbWdcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcbiAgICAgICAgc3JjPXtcbiAgICAgICAgICBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9IQ0JRVUZCZ1VGQlFZR0JnWUdCZ1lHaGdZR0JnYUdCa2FHQmdaR1JnWUdCZ2JJQzBrR3gwcElCZ1lKVGNsS1M0d05EUTBHaU01UHpreFBpMHlOREFCQ3dzTEVBOFFHeElTR3pnZ0lDc3dNakF5TWpJeU5ESXlNakkwTWpJeU1qSXdNakl5TWpRME1qSXdNakl3TWpJeU96SXlNREF5TWpReU1qQXlOVEk3TVAvQUFCRUlBTGtCRUFNQklnQUNFUUVERVFIL3hBQWNBQUFDQWdNQkFRQUFBQUFBQUFBQUFBQUNBd1VHQVFRSEFBai94QUJGRUFBQ0FRSUVBd1lDQ0FNREN3VUFBQUFCQWdNQUVRUVNJVEVGQmtFVElqSlJZWEdCa1FjVUkwSlNjcUd4WXNIUk00S3lGaVEwTlZPU2s2S3o0ZkFWUTNQQ3cvL0VBQmtCQVFFQkFRRUJBQUFBQUFBQUFBQUFBQUFCQkFJREJmL0VBQ29SQVFFQUFnRUVBUUlFQndBQUFBQUFBQUFCQWhFREJCSWhNVkVUUVNJeVlkRUZJM0dCb2JIQi85b0FEQU1CQUFJUkF4RUFQd0RuQ0Ntb0tGQlRVRmRJTkJUVkZBZ3BpaXFHTFRGcGEweGFvYW9wZ0ZMV21pZzhCUkFWZ0NqQW9NQVZtMVpXdldxREFGRXRZdFhsb0RGRUtGYUxOVmdJMWk5TGZFUnI0blZmZGdOL2VtTlkwR2IxNnZDczBBVmhoUkVWNjFRVzdoSEFvY2JoUXlrUnp4bkl6QWQxN0M2RjE4eXBBekRXNE43MVhPS2NKbHd6NUpVeTM4TERWRy9LM1gyMzh3S211Uk9JZGxpZXpKN3N3eWYzeGNvZjhTLzNoWFF1SjlqMmJERVpPek8rY2dMNmI5ZksydEJ6TGx6bG1URm5PMTBpQjFmcTF0MVMrNTlkaDZuU3QvbjFZb2hCaFlsQ29pdElWSG14eUtXTzVidXZxZGRhc3JjNFlLT3lLN0VLTEFKR3dVQWJBWEEwcm4vTTNFUmlNUzhpM3lIS3FYRmpsVlFOdW11WS9HZ2lEUUdqYWhOVUxJckJGRTFDYWlnTktjVTRpbE9LRFdZVXAxclpJcExpZ1NncHFpZ1FVeGFBbEZiZUd3a2tsK3pqZDdiNUVacmUrVUcxWTRiaHhKSWlNYktTU3hHK1JGTHZiMXlxMXZXMVhyQmNCbW5VRUtFUWVCZGxVZVNqK2U1M055YjFvNE9DWnkzTEx0ays3SjFIVTNqc21PUGRiOWxIa2dkRGxkR1J2d3VwVSs5bUY2OG9xOVkzbDZSRjdPUVpvMk5zdzE3TmpvSFg4Tmp1QjRoY0gwak9UcG80bXhDczhjZUpNZVdCNUN1VkhHWU1Mc0xLMThtcDhqN0hubTR1eXpXWGRMNnJycCtlOGt1OGRXZTVWZnlFYUVXUHJvYWZGQTdlRkdQc3BQN1ZhK0o0cHZxVHhZeVpKc1FaRk1JUjBrZU5icm1MT213SUQ3K2Z3Rzl3M0huQ0poWjhSalpXUjBKV0VSM1N3VURLV3oyN3VaYkczM2E4V2hTUmhYQ0xJVVlJOXdybFRsWWcySVZ0aVJZL0twSEI4dllxVkJKSEN4VnZDU1VYTVBOUXhCWWVvcVh4RUptNGRFSTFMRTR5VlVBdGNoKzFkUjVYMUZUTTNEbW5hQ2FhS2VKNFZSY2l0QmtiSWN3TWJOSU1senY2V0hTOUJUdUg4Rm5tY3h4eHRkV3lzV0JDbzNrNXQzZHEzNE9VTVc1S2xGUWhndmZlMTczc3d5ZzZkMC9wVXJpdUpHT1hFdGlGTVF4U0JWYUYwa2VQc3dGQklSdW9JdnFOdFBNV0xCWXBrSWo4VWdpaENxOGtZeFVvUm1MbGtMYVhVbTEydnExN1VIS1hTeEl0c2JIM0dsZXArTk41SE9VcmQzT1Z0R1h2bnVzT2hHeDlxcS9NdU9ZSHNVSjFGM3R1UWRsOUIvVVVHZUljeDJKV0pRYkcyWW5TNDhsNmlvS1hpRXJ0bUxHOTdpM1ErbnA2VnEyTzFQanc3RTZpM1d1TFhXZ1RUTTV6TXhZK3RNaHhzaVdDeU9vSFFNYkQ0YlVjbUhzUC9OdGExV1hYUVZOcnBhdURjZHpFSktkVDRYMEZ6NU5iWTFZYTVybHRwNS8wcTZjdlkzdElnQ2UrbGxKOHg5MC9JVytGZHl1YkVxYThxRWtBQzVKQUFBdVNUc0FCdWZTdldxWjREeG1QQzkvNnVKSk9qczlnZzhrWEliSHpONysxZElzZkFPV1Z3NkhGWXNYWkZNZ2ozeVpCbXpOK0o5TkJzUFU3YUw0ZkhZMHZLWUVDdXBFYlNrMmpRNkhzbHZ1Ui93QzVrSk45Q0JhMlorZkpHQkhZUjJJSUlZdXdJT2hCR2x4VTN5anpJMktaNDVGUldWVlpBZ0lCWHdzTlNkaVYrZFFVdVhnS28yU1RGUW80M1Yxblg0M2FNYWV0UC95TnhETG5pa2htWG9ZNUwzK0pBSDYxYS9wRUVmMVVGbEJiT3FvM1ZiM1o3SHlLcVJiYlVlVlVIaG94U094dzZ6QjFGM0NLK1lBajc0QTI4ci9DZ1JqK0Z6dy8yc1RvUE1yM1Q3T0xxZm5XaTFUR094dU55RHRaSndqalFPN2hYQlZXOE45UloxOU5haUdxaGJDaE5HYUJqVVVKRktZMDBpbGtVQzIyclhjVnNFVXBoUUpXbUNnV2pGQnVjTHhRamxTUXJtVlc3eS9pUmdWZFI2bFdZRDF0WFFzVHpUaUxBeGhGalBnWlZ6QmdQNG0wdjVpd0kySUZjMFd0bkRZcVNPNWprZEw3NUhaYis5anJYdnc4dU9GL0ZPNmZGWitvNGN1U2ZoeTFmbUwrbk5PSVZESktVYVBVV1pGR2MvN05MV3V4L3dDVWFuYXFwZytQVHhJVmpLQWtzeFl4UnUyWnQrODZrMnYwcU5sbmVRNXBIWjIydTdGamJ5dVR0UXJVNXVTWjNlTWtueEY0T0s4YzFsYmI4MWV1WnVacEZraitxNGtCR2hSbUVlUWhaQ1d6QW14SU5zdWxRMkc1bHhhSXNheUFLbDh0MGpZaTV1ZTh5azdtb0phY3RlVDJXVEU4eEdiQk5GTTd2TDJ5dWh5cUZDQlFMWFcxdFMvVHJUTVR4UEJ6eDRkSmt4R2VHTVI5enNncldzTDNlNSs3NURlcXlwbzFOUWJ1TWFITXB3NnlJQU5lMFpHYk5mUWpLQUJVMjNNMGJTcmlXd29PSlVBWiswWVJsZ3VVT1k3YmdkTC9BQnF0Q3MwQnp5dEk3T3h1enN6TWZNc1NTYmU1TlVqaWtuMjhuNXJmQUFDcnBWVjQ5aGdrMmR2QzQzOGpZS3crV3Z4cVpMR3RCaE01WStsLzUzdDg2a2tTTlFNMnJNRkFGOXJpd1B0YXRhS2EydHgzZ1FkZENlbnNOYmZIMm9jMllqcjNXVUczdmx2NVdOaDdWejZWdHZnQXd0bUd3QUgrSzM3WC93QzRyV2JodHRXRmhsSkI4ejBIdmV0TWNRWlpBK3QxdGNIUTZiMzhqZTlGaDhZelprdVNiZlo5ZFZON0Vlb3Y4UlV1bG0yRXdkMkpld0Y5VDVld3FZNWRqQWtkazhETCtxa2Y5NmhwR01tajNES3dEQzMzVHBtdDBzVHJwMUZXSGxmRHNJUzVIZFppb045eW9CWVczMExEWGFyam9zVEJyRjY4YXdhOUhEQk5iM0ErSS9WOFFrdjNWYnZlcU4zWC9RMzl3SzBLd2FndS93QkkrTFV5UVJIdktxOW93QjhRZHNvRi9VSSt2OFZRdU00K2o5cDlnZnRITXR6TTRLdXlGTG5JRnpLQVJaZExXM042aDhUaVhjZ3VibFVSQitWRnlxUGtLMXpRYi9HK0xOaVhWMlJWS3FVR1VtMlhPeklMSDhJYTNyYW8wMFRVTlVEUzJvMnBiQ29vWE5Bd3BoRkxhZ1dhQmhSbWhhZ1F0RUtFVVFxQXhUQlFDakZBUW8xb0JSclZReGFhdEtXbXJWQkNqRkNONkphQXcxWlUxZ0dpRlFaQnFLNWh3M2FSRzMzQm5IcllnTUQ4RGNleHJmbW10V3BnOFVza25ZdDkvd0FQNWt1Y3A5Q3VZZkwyUE9mcDZjZXJscXBMQzhtb1VFaFJuWFE1RUl2YXh1TzhRT3VtdFNtQjViaDdYSXVFbmpDQldMbGxkR0xBV3NkR3pDL2V0ZTJVM3FkNVB4QVpPemJkZE5mVFRYNVZib2NPbzFBRzNsV1B1dnF0ZmJqRmZYbGJEeUl3a2lSaXZVcUwvTVZCWS9rcnM4cHdrRU9hNDFtemxRQ0d1VkM2QmdjbTRON25hMnQ5d3IzeldIcDh1dE9na0dvT2xNYjZNcDdWakQ4QVRPWkpFalpoNFhFWVY3RGJNZXVocUV4M0MrendidFpRcHhUT2h2cmxabnV0dW5lTEdyeGo1Z3FrMVFPTzhSVjQ0NGtiTmxKZHpZZ0JtdjNSZmNqTWJrYVh0NjExeFM5em5sczdVRzFZdlhxd2Eyc1RGWU5aTkNhZzlRM3JKb2JVSG1OQ1RXV29iVVVER2dhbU1LQTBBR2djVXhxVzRvRm1oTkVhRTFBZ1VRb1JSQ2dZS0lVQXBnb0NGR0tCYU1WUWEwMWF4Qkd6c0ZSV1ptTmdxZ2xpZklBYW1yendMa0oycytLYkl2OEFzMElMbjg3N0w3QzU5UlZSVEZySXJzWTVjd2VVSjlXanNCWUhMM3ZpL2lKOVNhcTNPbkwyR3c4QWtpUW94a1ZQRzdMWXE1T2pFL2hGVFlwQXJMdFlVTkx4QjBvSTNpRTlodlZiZVk1c3dKQkJ1Q05DQ05pRDBOU3ZFMzBOUXRjMTFGNzVGNHZJenVIY2wxSVlFMjFVakt3MDhyRC9BSHE3QmdNVGRic2ErZE9CNGhvOFJHeW0xMkNuMURuS1FmbitncnN2QmVJcktuWnVOdEdGeUxqM0ZaT2FhdTJ2aHk3cHFwTitHRVNNZnJraXExcm9jaHNvdjREOTAyUHI3VkpZQlVqUUtKR2ZYUm5iTTNzVDF0NjYxQS8rbkFNY3NKY0hxWEp0Njk0MXVZWGg4YUF0MlNxL1E1Um1YMlBTdk8yYThORnhtdlozR0pncUZtSXNvSitWYzFKdnJVNXpSeE5tSFpyc0dBWSs0SkEvU29GTG0xdXVnOVRXcmd4MU5zWFBsNTBPTkdZNVZVc2VnVUVrL0FhMTZhRjBOblIwSjJEcXlrK3dJcTY4TzRQSVFZNHU2aTkxM0doZHhveFk3a1h2WWJBVzlTWDRyZ2swYUVNTzBqKzhoSk54NWo4TERvdzFGZlJuVHpYbktTL0Q1VjZ1NzhZMno1YytyRFZadVg0NEljYXlUc21WUTRqYVMyVE9TcGpaNzZDNm0vb1NPdHFrOFZpcEJoc1F1UGxpa1psK3dSR1JtejYyZEFvdXFYeTc5QWZqbHJhcENRczNoVmorVUUvdFJOaFpBbmFGR0NaaW1jcVF1WVh1dC94YUhUME5YTGcrTWJEUVlmRVRZeVJZaXpJc0N4Z2p1RnhrTFpnZnVrNmlsWXR2ck9CbU1Tc2MvRUN5QTJCUGFXQTNOdDM4Nm14WDhGeTdpcGtEeHhFb2ZDU3lwbS9LSElMZkNod0hBTVRMSTBhUmtNakJYemQwSVRlMmZyYlMrZ09sWENYaFptVER0aW9aWW13NktnQ1NZWUs0UzFpcFp3VVBkRzM4Z2Ewc2R4WHNwOFErSUNxbUpUc3g5WGxXU1dJSW9WV051cEIrWTYycXFqSWVTY1d6TXJCRXlzQmRudm1ETVZES0ZCT1c0NjJPdTFWaWVNb3pJZDFabFB1cElQNml1dDRMRTlrWTRNeTV4RkdFamxsVVltVEt4WnM0QUtpNmdnQzU2N1Z5cmlwSm1sSlFvVExJU2h0ZFNYWWxTUm9TTnZoUWFaTkxhak5MYW9CTkNhSTBCb3BBb2hRaXNpaUdpakZLVTB3VUJpbUxTaFRGTkIxemtLT0JjR3NzY1lWeUdXUndMdVdRbSt1OWlMTUZHbmVxeDRqRWhGVjlDck9pMzlKSFZGSStMaXVlZlJ2eG1PSVN4elNJaWtySXBkZ29KdGtjWFBXd1RUME5iejh3UW5oenhDWk8yalZrUmJrbGpDLzJMaTI0WUlodjYxVVhIR3o1SklCK09Wa1AvQWxjZnFncUEra2x2ODFRZWM2LzlPV2s4YjVpaWsrck5FSkdLWWlPUjFFTXd5cGtkWDFLQUVqUGF3TlIzUEhHNDU0bzBSSlJhWE5kNDNSU0JHNjJCYmM5N2FvS1plazRtbVhvSnRxb3IvRVYwTlFwcXhZNU5LZ1dqT2F3cm11b2J3OVNaWXdOKzBUL0FCQ3VpcTd4U0JsMEkrUjkvU296NlBlWDBrYVNkMkJhTWhWUWRDNm52dDUvZUE5UTNrSzZKeEhnUW1RWmRIR3hyTnkrYnBwNHBxYlJKNXJLZ1pvejhEcFhwK1pKSlZ5eHBabTdvUHY1Q2dYbFdSalozQzI2RFdwN2d2QUk0bXpYTHNPcDZWNVRGNjJxL3dBYzRQMldEQk9yNTBkejVrbkwvd0RhcTRqYkVialVmRGF1bzhWaFI0M0VtaVpUbkpOZ0ZBdXh2MHNOYitsYy93Q0FjRWt4ZUZNOFBlWkhaR2pZQlNiQldESTE3RTJjWFUyc2IydnBmVnhYeFl5OHZ2YTVMek5JWTFhQkZDVzd6YXNWYzZzckFXeW05N1gzRmlLWER6SmlTQzdNZ1FlSjJYdWdlNE9wOGxHcE9sVU5Ya2ljMkx4dXVoc1dSeDZHMWo4S3hpTVZKSll5U085dHM3czF2YTUwcmZqellUSFZ3bHZ5K2JsMDJkejdweVdZL0NTL3lna1dXV1JGUWRvK2J2b2psUU5FVUZyMnN0aDhLbXVOY3pTTEJoV2duVlhhTW1aVUVkdzlrdG1GdTc5L1RTcVhRMW1iRTNoK1o4V2lsVm0wTHMrcUl4ek9Tekc3S2R5U2ZqV3pOekswdURtaG5kM2tkMGFOc3FoVlZXUWtHMXJlRTlPdFZxc1VWWkplTDRTV0REeHp4VE0wQ0ZBVVpGVTN0MVlFN0tQMXFINGpQQVN2MWVONHdBYzJkODVZNldJMEdXMnRhVkRlZ3N6ODJocEZuZkNSdGlFVUtKUzdoYmdFQmpFTkNSZnorVlZyRXpzN3M3bTdPek94ODJZM0orWm9DYUEwQWswRFZtaGFvb1dOQVRSRTBEVUNoUkNnRkVLSU1Vd1VrVXhUUU5GRURTd2FNR2dhcG9xVURUQWFvdnVBK2tXUkZWWllROWdBWFZ5ck5ZV3pFRUVYUHdyVjVzNW9qeHNjYUpHNk1qbHpueWtlRXJvUWI5ZktxY3Bvd2FJYUt5Mnh2K3RhT0t4Nng2ZUp2d2o5MlBTdEtKSk1SSXNkMUpZOTFDd1JML0U5NC9NK1FwYTZtTnJPT3hpbStUVWZpKzcvQUhmeGZ0VXZ5cHlkSmpGN1YzQ1JYSXpXek94SGlDamJUYTUwQjBzZGF4dzdnQlJ6SmlBQ1ZKQ0pybE9VbGUwY0VDNlhBSUgzdENlNzQ3anc5cGxLczJKQ0FtMldaeXEyc1NHQ3N3RERZQUxwMXRwZXNIVjh1ZlpjZUs2eStkYmZSNGVndDQvcVoyU2ZiZjNRbkV1RFQ4TGwrc1lYTThHVUJ3MnRocG1XWEtCcGNYRWdHaDMvQUlyUHdybnJCU0FaNURDL1ZaQWN2cloxQlVqM0lQcFdPT2Mzd3dvUkE2eXlrV1hKcWluOFRNRGF3L0NDU2RBYmIxeTBSM0pKMzErZGVYOE55NXVYai9uelZuaVgxYit1bVhQV04vRGZEdFQ4ZHdUQzR4bUgvd0NLbjlhMDhUemxnSVZQMjRjL2hpVnBDZlRNQmxIeFlWeUFwNVV5R0VzUW9CWmlRb0FGeVNiQUFBYm01QXRYMFBwNHVQcVZhZUxjeVluaWJyZzhOR1VSMkNsYjNkK3ZmWWFKR0xFa0MraTZrN1YxcmwzZ3lZUER4NGREZkxjc3hHck94dTdXNmE3RG9BQjBxRjVENVNHQ2o3U1FEdDNGbTY5bW1oN05UNTZBc1J1UUJxQURXaHpPWHhIRUZ3ak1SQkhoKzJhTUh1eXN6RkxPRG93RjFzRGNDeHJqbDVNZUxDNVgxSnR6SmNzdExYeGJna09KVzBzWVlqWnZDNi9sY2FqMjI5S29IR3VScG83dEFlMVFmZDBFZytBMGY0V1BwVzVEdzE4TU0rRGxuUnNweVFTU004TE1CZFVkV3pCTDdiZzY2RUVWY09YT01KaklGbVZTcHVWZEQ0a2RkR1Uvb1I2RWJiVjVkTjFlSFBMY1B0OCsxejQ3ajdjVWRTQ1ZJSUlOaUNDQ0Q1RUhVR2hydDNHT0JRWXBiU29DMXJCeG82K3pqOWpjZWxjMDVuNVVrd1k3UU5uaXVCbjJaQ1RZQjEyMTBHWWJrN0RTK3pielZvbXNYcjE2RW1nOFRRR3NrMEpOQmxxV1RXV05BVFVHRFdEWGlhRmpSUXNhV1RXVFFtaUZDakJwWW9oUU1GRXRBS0lHZ1lEVEFhVXBvd2FBd2FNR2xnMFlOQTBHdGZpR0tNYVhYeEUySHA1bi93QTh4VGxOUlBGWHZJcStWdm1ic2YwdFZDa1E3azNKT3BQVW10aU82a09MM0ZpdGpZaGhxQ0QwSXR2NTBpSFZMZTRIb1JmTC9LcExodUlqV1NONUZESmU3QmdTTEVXdVIxQXZjalhZMUhlUG02V3ViSE1SMldIZnQ1T3pJZkVGN0JRN3JjcDFKQjJ5K0FBRVhKYTJjVEYyYU8rT2xXUjNVcEdBbmZVZFNnc296TWZ2V0ZnZ09ZM1d0REY4ZmlqRExoWUVYTm9YS0t0N1dJSVZUNTVpTDJ0ZTFyWHZBdkl6dG1kaXpIY245UFllZzBGZWN4L3QvdHF6NVpKUE83UEg2UVM2Q2hVYmZHdDdodkM1c1EyU0NONURlM2RIZEg1bjhLL0Vpcjl3ZjZMeFpXeFV4dnVVaUFzUFF1d04vZ285elhwdGx0YzZ3T0VlUWxZMGQyMDdxSXpuNUtDYlYxVGtUa280WWpFWWtBekcrVk5DSXMyNUpHaGNqVFRRYTJ2ZTlXN2hQQzRjTkgyY01ZUlIwRzdIOFRNZFdiMU5iMUxYTzNxcFBQV0hsamxpeGtTZ2RtcnBJeHVWS0VxVlNTd3VpZU01OWxOczFoM2hkcXhtRzF4ODY4ODhNYzhialp1WDJUTHR1M000dVlVQnpIQ1lrT1FlNmlDUldMRW5SMVBtVFltdzc1UFdwNzZPY09Wdzhyc1FIbHhNc2pvRGNJMXdwVE1ORDRiNmVkdWxTOHZMR0NZbGpoWXN4dmNxZ1VtKzk4dHIzcVN3OENSb3FSb3Fvb3lxcWdLb0EyQ3FOQUs4T0RwT1BodHl4M3UvTit6dlBsdVUxVHExY2Roa2xqYUp4ZFhCVmg2RWREMFBVSHpGYlZMdnI3RDk2MVBOd2JpbUFiRHpQQys2TVZ2K0licTN4VWcvR3RFc0t2NXcwWEVPSzRtS2MyRUNxcUluZE1pcWJPWGE5N3F6Z2FXMFpSMDF1eThLdzRRUmlDUElObEtLUitvMzlhbzRTYUd1a2MrOEN3c1dGTWtjS0krZEZ1bDFGamU0eWc1ZW5sWE5Xb1BOU3lheWF3eG9NRTBER3NrMEJORkNUUWsxazBKTkFrVWEwc0dpQm9obEVLQlRUWUltZGxSQmRtWUtvOHl4c0I4NkRLMHhhc2VHNFRFbW1UdG02dVM0Uy84QUFxRUczcXhOOTdEYXNZdmd5T1BzMEtPQVNFdXpKSmJVcXVZbGxlMjJwQjIwM3JUbDB2Sk1lNno5MlRIcmVLNWRzdm4vQUFnQldSVTF5N3d1S1NPZkVURnpIaDBWaWlFQjNMM3QzajRWRnRUL0FFTlB4M0RjUEpnaGpZRWVMTEwyVFJ1L2FLeEl2bmpjZ0Z0OWZadkxYTzFvRlRTZUxjRmtSVm56eHVyRmN5cXh6b1dVWlE2RUR6VVhCTzRxK2NCNFBDNks4L0R5a1hZbHppR3hURU5sVE5tRVlJc0cxUHBWUDR0eHlDV0hKRzhtYzVGeVNvcGNLR1J6YVZlbmMyTnR4NVZuNXM4OGNzWmpQRnZuK2p2Q1kyWGF2d0h4ajFCL1Qrb3JNYjNTM2tXWCtZL1NnUTJkcjlWL1kvOEFlcHZrL2x5VEc0cG9VT1ZNb2QzME9SUWN0d3R4bUp1QjhmU3RDQjRQdzJiRk9zY0VaZGlxazIyVUg3enNkRlhmVTcyc0xuU3VxOHQvUnhERjM4V1ZuZTNnc2V5WDRIV1ErcmFmdzlhc2ZML0I0c0hFSUlrQUM2RnJEUEliZUp5QU16VzYvS3cwcVlVMUtuYzlERXFLRlJWVlJvRlVBS1BZRGFqRmVCcnkxRWVyMUQvV2lvUFZHeVFhTUJHU3haaUc3bWx6Y0crYStuenFTcjFXWFRuTEdWR3k0WWlVTUFBQ2JrcXZldnJjTVFkajUyUDg2VHc2Wnk1Vml3VUFtTU1MRmx6V0xFblVrYURYb1FUcWFseWFBMWUveHF4eDlQVjNLeTIxVm5tbm1oY0l1U05lMXhNbCt6aVVGamJiT3lycmwwTmdOV0lJR3hJc3NteHRXamd1RlJRc3pvZ3p2cThqYXlQNUJuM3lqb29zb0dnQXFQUnp2bG5sM0ZRVEhpV05tU0N4ZDNEbGN6aHd3WVNFRUpHQ1dCQXVUY0RRV3JvSEVaY2pRK3M0US8zbzVBUDF0VlkrbGlaQmdoR3pMbWVWYktTTHNGQkxFRHFCcGYzRlIrSDQ5SmljRmhUSERQSkpISkNaSFNNbENZQ1ZlejMxWWdiZnhVVktmU1kzK1pLUE9aQi95T2Y1VnlaalYvNS80dzh1SFJEaFo0aDJ5dG5sVlZVMlJ4bEZtT3V0L3dDNmE1OFRRZU5BeHJKYWdKb1BFMEY2OFRXQ2FLd1RRTWF5eHBaTkF0YU1Va0dtS2FJWURVcnk2dytzeGdrTG1MSUNkZ3pvOGFIL0FIbVdvZTlHRFZsMWRwbE55eDJqRDhTd09HR1JUbllhRXFoT3ZYVTJGWWs0eGdwaUJsZEdVNXc1UUFESjN5U1FUb0FwUHdybWtISHpiN1dQTzM0MWZzM2I4L2RZTWZXd0o2M090QmplTk5JaGpSQkdqQ3pXWXM3Z0c5bWV3N3R3RFlBWHRyZXR0NU9MdDNMYlh6OGVIbDd1MnlUSC9uN3BMZ25GY1BCZVh0TVdrakZzeXdpREprTEVxcDdTK2JTMjQwTjdWUGM1WXFDT1hzSjF4RTVqUU1uMnNjY1l6ZzZxa2NZRjk5YlZ6MjliV014MGtyZHBLN085Z016RzVzTmhmeTFOWW4wVXR4SGorRmt3c0VPSWdrWm9ZekdKSTNVV3pXR1lJeTJKN3E2RTIzM3F0NGpCWWZMMmtlSVlnV0FSNGlyNXlCM2MyYktSNHU4RGZUWTlDR0JrbUQ5bll0R25hRkw5OWtVMmNvdjNzdHd4SGxjOUtqOGRnNUlYVkpZMlI3SzJWeFpnckM2a3FkVnY1R3hvUWI2T3A4N3I4eC9VQ3V3ZlE5QkYyQmtWQjJvZVdOMzFMRlFZM1FhN0FLdzBIWDFya0xSRndvRzVaUUNkZ1N3QUo5TDJycEgwUDRzaWVXSTZaZ3I1ZW9JRGhyajB5b1BoUXJyTWcxb2dhSEVWaG1xSWNHcktta285TlExQm56OTY4YXdEKzllYWdLOURldlhyQm9yem1zS2F3YXdocW9ZYWlPSzhheUtWaGpmRVRiSkdndU14MjdSL0RHdlVsaU5Ocm13cVZjNmJYOU5OZlRYU296SGNTblFmWjRLU1MzbEpoMC94U1ZCV01GeU04OHYxbmlrdmJTRzMyU0VyRWdCdUV2dVZINFJZYW01YTVKMHVPODdwaEp6aGNKQ21TSzZ5S1Z5Sm1GdEk4aDB0cUNTTjl0dFpmRWN6Y1FXOXVFVEhlMXBvU0Q1WEtrL3pybEVuQytJU1RTeXlZT1pTenlTT1RHNFZRNVoyN3pBQWdYTzE5cXFyQnpSemQ5ZGhTTXc1R1NRT1NIekEyUjB0NFFSNC93QktxcE5ZSm9TYUR4TkFUWGlhd1RRZVkwQmF2TWFBbWl2TWFBbXNzYVd4b0ZLYVlwcEN0VEZORVBCcklOS0RVd0dnTUdqQnBRTlpCb0hBMFRIU2xLYXk3YVVFOXloaFkyY3loclN4aGl0eWpLTXlPb0RSNXN6ZUJnTEZUZDQvRUdxQm00Y1ByWDFkcGM1YVZZektRd3U3RUxuYk5xUUhiVTlRTGpldE1CR3NkanJxTlAzdUQ4MW84UXNoUGFkb1djbk1IWmptWnR3Mlp6M2plMm9Kb0hQaDNYUEhJcFIxTEl5bmRXQnNSOERYVk9VZUJnUzRiaVVUV0VvWVR4bTFsYVpDU3lFZE8xRmlwOHpZaTFxbCtMY3E0YmlFYXpXN09WMFZoS28xT1pBVjdSTk00QXNPakMxZ1FLYnlsd3FiQ1lWNEpnUHM1R1pHVTNWMHpyTUdYcU84WEJCc1JiMkpxVzdpMVlqcDdqOTZ3MVp4R3c5eCs5WWFvQlUwOUtRS2Nob2tFblgzckpvSXorNW96VVY0VUxWbWhhZ3hlaEIxck42QTcxUTFuQTFKc1BNNkQ1MHY2OUZzWkkvOTlmNjFyOFFzWTJEQUVHd0lJQkI3dzZHcTdqK0RZZVJlOUNudXFoVythMk5jWjVhZW1ISDNUYTNveW5VRUgySUkvU2dtR2hBRjcvSSs5Y0U0Mmh3OHp4Um15aXpBMkdidkRZbW8vd0N2eWphV1FlenVQMk5kWTNjMjR5eDFkTmpqdUM3REVUUWdXQ093VVh2WkNjeUMvd0NVclVjVFhuWW01SnVUdVRxVDdtaEpyb2V2UWsxNG1oSnFEQk5DVFJvaGE5aGV3TEgySFdsRTBWaGpTbU5FelVwalJDbE5OVTFyclRWb0hCcU1HbENqRkE0R3ZBMEFvaFFIbnAvRk1ISkN3U1JDaEtobHZzeW5VTWpEUmwxR29OSVdyNXpuL3FqQS9saS82UW9PV1RTRUhRMm80TVl3TnJHNVAzYjNQdzYxcjRqZXQ3bHYvUzR2emZ5TlJYZWZvODR6R2NGREROS3FTb0dRbzVWVGxWMkVZQU9oN21RYWVWVzdGSm1qWWVhc1BtcHJuL0svOWszNW4veEdyZndIK3pQdlVtWGt6eDdaNGI0Zk1pdDU1VDg3R2phdFhBLzJFZjVJL3dCbHJhTmR2TU5OV2xHbUxVV014YmZFL3VhTTB1SGI0bjl6Um1pdlhyQnIxQ2FBYjFocTkxcnpVR2h4YVhLcWp6WWZvQ2Y2VnFudzE3ais4ZnUzN0NzSjRhejhudHI0dnl4eURuRnJZMXgvQ243VkRGcWxlZFA5TmY4QUtuN1ZFTFh0aCtXUERQOEFOWHMxRDJnMnVQYXAxdjdEQ2Y4QXl0L2pGWE9iL1JtL05ILzFFcnB3NWhJQ3Bzd0lJNkVFSDVHdkxFN2VGR2I4cWsvdFhTOFIvcjkveWY4QTRMWFFFMitGVWZPbUVuRWNpT1FiSzZzYmIyVWc2ZXRicDR5b1VaVTc2ckVBMmd1RXlsMWZ6R2pXUGsxUlV1NTl6U21xQ1lQRjR3R1ZRNnJkQWd0ZnVJRDNXczY2a3NUOTRhN1ZvY1Y0aWtnR1ZNcHp1N2VUWnNvRFc2TlpSY2JYMTYxcFBTV29QLy9aXCJcbiAgICAgICAgfVxuICAgICAgICBhbHQ9e2ltYWdlc1swXX1cbiAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgPlxuICAgICAgICA8UGx1c091dGxpbmVkIG9uQ2xpY2s9e29uWm9vbX0gLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX1cbiAgICAgICAg6rCc7J2YIOyCrOynhCDrjZTrs7TquLBcbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBvc3RJbWFnZXMucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xuXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IG1lLCBsb2dPdXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcbiAgICAgIGRhdGE6IGNvb2tpZS5sb2FkKFwicmVmcmVzaFRva2VuXCIpLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgYWN0aW9ucz17W1xuICAgICAgICA8ZGl2IGtleT1cInBvc3RzXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICDqsozsi5zrrLxcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAge21lLnBvc3RzLmxlbmd0aH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAg7YyU66Gc7J6JXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7bWUuZm9sbG93aW5ncy5sZW5ndGh9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJzXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAg7YyU66Gc7JuMXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7bWUuZm9sbG93ZXJzLmxlbmd0aH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PixcbiAgICAgIF19XG4gICAgPlxuICAgICAgPENhcmQuTWV0YVxuICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke21lLmlkfWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgfVxuICAgICAgICB0aXRsZT17bWUubmlja25hbWV9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30+XG4gICAgICAgIOuhnOq3uOyVhOybg1xuICAgICAgPC9CdXR0b24+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBTbGljayBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCB7XG4gIENsb3NlQnRuLFxuICBIZWFkZXIsXG4gIEltZ1dyYXBwZXIsXG4gIEluZGljYXRvcixcbiAgT3ZlcmxheSxcbiAgU2xpY2tXcmFwcGVyLFxufSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9HbG9iYWxcIjtcblxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8T3ZlcmxheT5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0+4pyWPC9DbG9zZUJ0bj5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFNsaWNrV3JhcHBlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2xpY2tcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XG4gICAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KSA9PiAoXG4gICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17dn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2JhY2tVcmx9L3VwbG9hZC9pbWcvJHt2fWB9IGFsdD17dn0gLz5cbiAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGljaz5cbiAgICAgICAgICA8SW5kaWNhdG9yPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZSArIDF9IC8ge2ltYWdlcy5sZW5ndGh9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0luZGljYXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NsaWNrV3JhcHBlcj5cbiAgICA8L092ZXJsYXk+XG4gICk7XG59O1xuXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDbG9zZUJ0biA9IHN0eWxlZChDbG9zZU91dGxpbmVkKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XG4gIGJhY2tncm91bmQ6ICM4OTg5ODk7XG5gO1xuXG5leHBvcnQgY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJmltZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogNzUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgPiBkaXYge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5gO1xuIiwiZXhwb3J0IGNvbnN0IGJhY2tVcmwgPSBcImh0dHA6Ly93d3cuMmdldGhlci50azozMDAwXCI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdGlhbFZhbHVlID0gbnVsbCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0XG4gICk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZGlzcGF0Y2goe1xuICAvLyAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIC8vICAgICBkYXRhOiBjb29raWUubG9hZChcImFjY2Vzc1Rva2VuXCIpLFxuICAvLyAgIH0pO1xuICAvLyB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMFxuICAgICAgKSB7XG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcbiAgICAgICAgICBjb25zdCBsYXN0SWQgPSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZDtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgICAgICAgICBsYXN0SWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VG9nZXRoZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEFwcExheW91dD5cbiAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cbiAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZENvb2tpZSA9IGNvbnRleHQucmVxXG4gICAgICA/IGNvb2tpZS5wYXJzZShjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSB8fCBcIlwiKVxuICAgICAgOiBcIlwiO1xuICAgIGlmIChjb250ZXh0LnJlcSAmJiBwYXJzZWRDb29raWUpIHtcbiAgICAgIGlmIChwYXJzZWRDb29raWVbXCJhY2Nlc3NUb2tlblwiXSkge1xuICAgICAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgICAgICAgICBkYXRhOiBwYXJzZWRDb29raWVbXCJhY2Nlc3NUb2tlblwiXSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgfSk7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcblxyXG4vLyjsnbTsoIQg7IOB7YOcICwg7JWh7IWYKT0+IOuLpOydjCDsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgc2luZ2xlUG9zdDogbnVsbCxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIHVubGlrZVBPc3RFcnJvcjogbnVsbCxcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSBcIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xuXG5jb25zdCBwb3N0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoID09PSAxMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZChcbiAgICAgICAgICAgICh2KSA9PiB2LmlkID09PSArYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwb3N0Lmxpa2VkVXNlcnMucHVzaCh7IF9pZDogYWN0aW9uLmRhdGEudXNlcklkIH0pO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoXG4gICAgICAgICAgICAodikgPT4gdi5pZCA9PT0gK2FjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgcG9zdC5saWtlZFVzZXJzID0gcG9zdC5saWtlZFVzZXJzLmZpbHRlcihcbiAgICAgICAgICAgICh2KSA9PiB2Ll9pZCAhPT0gYWN0aW9uLmRhdGEudXNlcklkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gK2FjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSArYWN0aW9uLmRhdGEucG9zdElkKTtcbiAgICAgICAgcG9zdC5jb21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhLmNvbW1lbnQpO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi9wb3N0XCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g64K0IOygleuztCDroZzrlKkg7Iuc64+E7KSRXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcbiAgbG9hZE15SW5mb0Vycm9yOiBmYWxzZSxcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDroZzrlKnspJFcbiAgbG9hZFVzZXJFcnJvcjogZmFsc2UsXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogZmFsc2UsXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJFcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcbiAgdW5mb2xsb3dFcnJvcjogZmFsc2UsXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogZmFsc2UsXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXG4gIGxvZ091dERvbmU6IGZhbHNlLFxuICBsb2dPdXRFcnJvcjogbnVsbCxcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcbiAgc2lnblVwRG9uZTogZmFsc2UsXG4gIHNpZ25VcEZhaWx1cmU6IG51bGwsXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRmFpbHVyZTogbnVsbCxcbiAgbWU6IG51bGwsXG4gIGFjY2Vzc1Rva2VuOiBudWxsLFxuICByZWZyZXNoVG9rZW46IG51bGwsXG4gIHVzZXJpbmZvOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9nSW5EYXRhOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9NWV9JTkZPX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9NWV9JTkZPX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9NWV9JTkZPX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJMT0FEX1VTRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSBcIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxufSk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEubWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93ZXJzID0gZHJhZnQubWUuZm9sbG93ZXJzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS51c2VySWQgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dpbmdzID0gZHJhZnQubWUuZm9sbG93aW5ncy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhLm1lO1xuICAgICAgICBkcmFmdC5hY2Nlc3NUb2tlbiA9IGFjdGlvbi5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgICAgICBkcmFmdC5yZWZyZXNoVG9rZW4gPSBhY3Rpb24uZGF0YS5yZWZyZXNoVG9rZW47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcbiAgICAgICAgZHJhZnQubWUucG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxuICAgICAgICBkcmFmdC5tZS5wb3N0ID0gZHJhZnQubWUucG9zdHMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSArYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJyZWFjdC1jb29raWVzXCI7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBiYWNrVXJsO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbmlmIChjb29raWUubG9hZChcImFjY2Vzc1Rva2VuXCIpKSB7XG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wieC1hY2Nlc3MtdG9rZW5cIl0gPSBjb29raWUubG9hZChcImFjY2Vzc1Rva2VuXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbZm9yayh1c2VyU2FnYSksIGZvcmsocG9zdFNhZ2EpXSk7XG59XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICBBRERfUE9TVF9SRVFVRVNULFxuICBBRERfUE9TVF9TVUNDRVNTLFxuICBBRERfUE9TVF9GQUlMVVJFLFxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxuICBBRERfUE9TVF9UT19NRSxcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5cbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChgL3VzZXIvY29tbWVudHMvJHtkYXRhLnBvc3RJZH1gLCB7IGNvbW1lbnQ6IGRhdGEuY29tbWVudCB9KTtcbn1cblxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvbGlrZS8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvYXBpL3VubGlrZS8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdHNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1BPU1RfVE9fTUUsIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEuaWQgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9kZWxldGUvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEuaWQgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91cGxvYWQvaW1nXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuaW1hZ2VQYXRocyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL25leHRzLyR7bGFzdElkIHx8IFwiZmlyc3RcIn1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXG4gICAgYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gXG4gICk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XG59XG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xuaW1wb3J0IHtcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTSUdOX1VQX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgRk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIEZPTExPV19TVUNDRVNTLFxuICBVTkZPTExPV19TVUNDRVNTLFxuICBGT0xMT1dfRkFJTFVSRSxcbiAgVU5GT0xMT1dfRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvZm9sbG93aW5ncy8ke2RhdGF9P29wdGlvbj1mb2xsb3dgKTtcbn1cblxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2luZ3MvJHtkYXRhfS9vcHRpb249dW5mb2xsb3dgKTtcbn1cblxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dlcnNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dpbmdzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKFwiL2F1dGgvbmlja25hbWVcIiwgeyBuaWNrbmFtZTogZGF0YSB9KTtcbn1cblxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hdXRoL21lXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIngtYWNjZXNzLXRva2VuXCI6IGRhdGEsXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgIC8vIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEucmVmcmVzaFRva2VuO1xuXG4gICAgY29va2llLnNhdmUoXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gICAgLy8gY29va2llLnNhdmUoXCJyZWZyZXNoVG9rZW5cIiwgcmVmcmVzaFRva2VuLCB7XG4gICAgLy8gICBwYXRoOiBcIi9cIixcbiAgICAvLyB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvdXNlcnMvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXV0aC9sb2dpblwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIngtYWNjZXNzLXRva2VuXCJdID1cbiAgICAgIHJlc3VsdC5kYXRhLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEucmVmcmVzaFRva2VuO1xuXG4gICAgY29va2llLnNhdmUoXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gICAgY29va2llLnNhdmUoXCJyZWZyZXNoVG9rZW5cIiwgcmVmcmVzaFRva2VuLCB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhjb29raWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXV0aC9sb2dvdXRcIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwieC1yZWZyZXNoLXRva2VuXCI6IGRhdGEsXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgIH0pO1xuICAgIGNvb2tpZS5yZW1vdmUoXCJhY2Nlc3NUb2tlblwiKTtcbiAgICBjb29raWUucmVtb3ZlKFwicmVmcmVzaFRva2VuXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2F1dGgvdXNlcnNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxuICAgIH0pO1xuICAgIGFsZXJ0KFwi7ZqM7JuQ6rCA7J6F7JeQIOyEseqzte2VmOyFqOyKteuLiOuLpC5cIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZC9iYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vdGlvbi1yZXNldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50L2xvY2FsZS9rb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUm93IiwiQ29sIiwiR2xvYmFsIiwiSGVhZGVyIiwiTG9nSW5Gb3JtIiwidXNlU2VsZWN0b3IiLCJVc2VyUHJvZmlsZSIsIldyaXRlckluZm8iLCJXcml0ZXJEaXYiLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIm1lIiwic3RhdGUiLCJ1c2VyIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJ1c2VDYWxsYmFjayIsInVzZUlucHV0IiwidXNlRGlzcGF0Y2giLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQ29tbWVudEZvcm0iLCJwb3N0IiwiZGlzcGF0Y2giLCJpZCIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudExvYWRpbmciLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsIm9uU3VibWl0Q29tbWVudCIsInR5cGUiLCJkYXRhIiwiY29tbWVudCIsInBvc3RJZCIsIm9iamVjdCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkZvbGxvd0J1dHRvbiIsImZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0xvYWRpbmciLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZ3MiLCJmaW5kIiwidiIsIl9pZCIsIndyaXRlciIsIm9uQ2xpY2tCdXR0b24iLCJwcm90b1R5cGVzIiwiY3NzIiwiZW1vdGlvblJlc2V0Iiwic3R5bGUiLCJHbG9iYWxTdHlsZSIsInVzZVN0YXRlIiwiTGluayIsIkZvbnRBd2Vzb21lSWNvbiIsImZhR2xvYmVBc2lhIiwiZmFCYXJzIiwiTmF2U3R5bGUiLCJUb2dldGhlckRpdiIsIlNlYXJjaElucHV0IiwiU2VhcmNoIiwiTGlzdCIsIm9wZW5lZE1lbnUiLCJJdGVtIiwiTWVudUNvbnRlbnQiLCJIb21lIiwiTWVudSIsInNldE9wZW5lZE1lbnUiLCJzZWFyY2hJbnB1dCIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJvbkNMaWNrTWVudSIsInByZXYiLCJvblNlYXJjaCIsIlJvdXRlciIsInB1c2giLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJGb3JtV3JhcHBlciIsIkVtYWlsRGl2IiwiUGFzc3dvcmREaXYiLCJCdXR0b25XcmFwcGVyIiwiTGFiZWwiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwiYWxlcnQiLCJvblN1Ym1pdEZvcm0iLCJBdmF0YXIiLCJDYXJkIiwiQ29tbWVudCIsIkltYWdlIiwiUG9wb3ZlciIsIkVsbGlwc2lzT3V0bGluZWQiLCJIZWFydE91dGxpbmVkIiwiSGVhcnRUd29Ub25lIiwiTWVzc2FnZU91dGxpbmVkIiwiTWVzc2FnZVR3b1RvbmUiLCJSZXR3ZWV0T3V0bGluZWQiLCJQb3N0SW1hZ2VzIiwibW9tZW50IiwiTElLRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlBvc3RDYXJkQ29udGVudCIsIlN0eWxlZERpdiIsImxvY2FsZSIsIlBvc3RDYXJkIiwicmVtb3ZlUG9zdExvYWRpbmciLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25MaWtlIiwib25Vbmxpa2UiLCJvblRvZ2dsZUNvbW1lbnQiLCJvblJlbW92ZVBvc3QiLCJsaWtlZCIsImxpa2VkVXNlcnMiLCJpbWFnZXMiLCJmbG9hdCIsImNyZWF0ZWRBdCIsImZyb21Ob3ciLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJjb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJwb3N0RGF0YSIsInNwbGl0IiwibWFwIiwiaSIsIm1hdGNoIiwic2xpY2UiLCJ1c2VSZWYiLCJBRERfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX0lNQUdFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiYmFja1VybCIsIlBvc3RGb3JtIiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsInNldFRleHQiLCJvblN1Ym1pdCIsInRyaW0iLCJpbWFnZUlucHV0Iiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJmIiwiYXBwZW5kIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwibWFyZ2luIiwiZGlzcGxheSIsIndpZHRoIiwiUGx1c091dGxpbmVkIiwiSW1hZ2VzWm9vbSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJvbkNsb3NlIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsIkxPR19PVVRfUkVRVUVTVCIsImNvb2tpZSIsImxvZ091dExvYWRpbmciLCJvbkxvZ091dCIsImxvYWQiLCJwb3N0cyIsImZvbGxvd2VycyIsIlNsaWNrIiwiQ2xvc2VCdG4iLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiT3ZlcmxheSIsIlNsaWNrV3JhcHBlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwiZnVuYyIsIkNsb3NlT3V0bGluZWQiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ3YXJuIiwicCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJIZWFkIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJ3cmFwcGVyIiwiRU5EIiwiYXhpb3MiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwib25TY3JvbGwiLCJzY3JvbGxZIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGFzdElkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJzZWRDb29raWUiLCJyZXEiLCJoZWFkZXJzIiwic3RvcmUiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsIkhZRFJBVEUiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290UmVkdWNlciIsImFjdGlvbiIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJwcm9kdWNlIiwiaW5pdGlhbFN0YXRlIiwic2luZ2xlUG9zdCIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUE9zdEVycm9yIiwiYWRkQ29tbWVudEVycm9yIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJwb3N0UmVkdWNlciIsImRyYWZ0IiwiY29uY2F0IiwidXNlcklkIiwidW5saWtlUG9zdEVycm9yIiwidW5zaGlmdCIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJFcnJvciIsImxvYWRVc2VyRG9uZSIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEZhaWx1cmUiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUZhaWx1cmUiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsInVzZXJpbmZvIiwic2lnblVwRGF0YSIsImxvZ0luRGF0YSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInVzZXJJbmZvIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsInJlbW92ZUZvbGxvd2VyRG9uZSIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dlcnNEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb21tb24iLCJyb290U2FnYSIsInB1dCIsInRha2VMYXRlc3QiLCJ0aHJvdHRsZSIsImFkZENvbW1lbnRBUEkiLCJhZGRDb21tZW50IiwicmVzcG9uc2UiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwibG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsInNhdmUiLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInJlbW92ZSIsInNpZ25VcEFQSSIsInNpZ25VcCIsIndhdGNoU2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsInJ1biIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==
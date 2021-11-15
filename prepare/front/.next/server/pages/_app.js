(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\pages\\_app.js";








const App = ({
  Component
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "Together"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

App.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__.default.withRedux(App));

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
    // case ADD_POST_TO_ME:
    //   draft.me.posts.unshift({ id: action.data });
    //   break;

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

function* watchLogIn() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_REQUEST, logOut);
}

function* userSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchChangeNickname), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut)]);
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

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEzQztBQUNBLFFBQU1NLFdBQVcsR0FBRyxDQUFDRCxjQUFELENBQXBCO0FBQ0EsUUFBTUUsUUFBUSxHQUNaLFNBQ0lSLENBREosR0FFSUcsNkVBQW1CLENBQUNMLHNEQUFlLENBQUMsR0FBR1MsV0FBSixDQUFoQixDQUh6QjtBQUlBLFFBQU1FLEtBQUssR0FBR1Ysa0RBQVcsQ0FBQ3ZFLDhDQUFELEVBQVVnRixRQUFWLENBQXpCO0FBQ0FDLEVBQUFBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQkosY0FBYyxDQUFDSyxHQUFmLENBQW1CMUQsMkNBQW5CLENBQWpCO0FBQ0EsU0FBT3dELEtBQVA7QUFDRCxDQVhEOztBQWFBLE1BQU10TixPQUFPLEdBQUcrTSxpRUFBYSxDQUFDRSxjQUFELEVBQWlCO0FBQzVDUSxFQUFBQSxLQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSUEsaUVBQWV6TixPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiYWNrVXJsID0gXCJodHRwOi8vd3d3LjJnZXRoZXIudGs6MzAwMFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5Ub2dldGhlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5BcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuXHJcbi8vKOydtOyghCDsg4Htg5wgLCDslaHshZgpPT4g64uk7J2MIOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtdLFxuICBzaW5nbGVQb3N0OiBudWxsLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcbiAgdW5saWtlUE9zdEVycm9yOiBudWxsLFxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9IFwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcblxuY29uc3QgcG9zdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XG4gICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDrgrQg7KCV67O0IOuhnOuUqSDsi5zrj4TspJFcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IGZhbHNlLFxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuhnOuUqeykkVxuICBsb2FkVXNlckVycm9yOiBmYWxzZSxcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcbiAgZm9sbG93RG9uZTogZmFsc2UsXG4gIGZvbGxvd0Vycm9yOiBmYWxzZSxcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxuICB1bmZvbGxvd0Vycm9yOiBmYWxzZSxcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxuICBsb2dJbkRvbmU6IGZhbHNlLFxuICBsb2dJbkVycm9yOiBmYWxzZSxcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBudWxsLFxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRmFpbHVyZTogbnVsbCxcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVGYWlsdXJlOiBudWxsLFxuICBtZTogbnVsbCxcbiAgdXNlcmluZm86IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dJbkRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZX0lORk9fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZX0lORk9fRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9IFwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXG59KTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dlcnMgPSBkcmFmdC5tZS5mb2xsb3dlcnMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIGNhc2UgQUREX1BPU1RfVE9fTUU6XG4gICAgICAvLyAgIGRyYWZ0Lm1lLnBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XG4gICAgICAvLyAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBiYWNrVXJsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh1c2VyU2FnYSksIGZvcmsocG9zdFNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxuICBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfUkVRVUVTVCxcbiAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfRkFJTFVSRSxcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcblxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xufVxuXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcbn1cblxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0XCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbiwgZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3RcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbiwgZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHtcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTSUdOX1VQX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgRk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIEZPTExPV19TVUNDRVNTLFxuICBVTkZPTExPV19TVUNDRVNTLFxuICBGT0xMT1dfRkFJTFVSRSxcbiAgVU5GT0xMT1dfRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goXCIvYXV0aC9uaWNrbmFtZVwiLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xufVxuXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXV0aC9sb2dpblwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLm1lLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIngtcmVmcmVzaC10b2tlblwiXSA9XG4gICAgICByZXN1bHQuZGF0YS5kYXRhLnJlZnJlc2hUb2tlbjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc1Rva2VuXCIsIHJlc3VsdC5kYXRhLmRhdGEuYWNjZXNzVG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmcmVzaFRva2VuXCIsIHJlc3VsdC5kYXRhLmRhdGEucmVmcmVzaFRva2VuKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2F1dGgvbG9nb3V0XCIpO1xufVxuXG5mdW5jdGlvbiogbG9nT3V0KGFjdGlvbikge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2F1dGgvdXNlcnNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxuICAgIGZvcmsod2F0Y2hMb2dJbiksXG4gICAgZm9yayh3YXRjaExvZ091dCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY29udGV4dCk7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwibmFtZXMiOlsiYmFja1VybCIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiSGVhZCIsIndyYXBwZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3aXRoUmVkdXgiLCJIWURSQVRFIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwicHJvZHVjZSIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsInNpbmdsZVBvc3QiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQT3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJwb3N0UmVkdWNlciIsImRyYWZ0IiwiZmluZCIsInYiLCJpZCIsImRhdGEiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiZXJyb3IiLCJ1bnNoaWZ0IiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRXJyb3IiLCJsb2FkVXNlckRvbmUiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBGYWlsdXJlIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVGYWlsdXJlIiwibWUiLCJ1c2VyaW5mbyIsInNpZ25VcERhdGEiLCJsb2dJbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInVzZXJJbmZvIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsInJlbW92ZUZvbGxvd2VyRG9uZSIsImZvbGxvd2VycyIsImZpbHRlciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJmb2xsb3dpbmdzIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93ZXJzRG9uZSIsIm1lc3NhZ2UiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJuaWNrbmFtZSIsImFsbCIsImZvcmsiLCJheGlvcyIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJyb290U2FnYSIsImNhbGwiLCJwdXQiLCJ0YWtlTGF0ZXN0IiwidGhyb3R0bGUiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJyZXN1bHQiLCJlcnIiLCJyZXNwb25zZSIsInVubGlrZVBvc3RBUEkiLCJkZWxldGUiLCJ1bmxpa2VQb3N0IiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJnZXQiLCJsb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2dJbkFQSSIsImxvZ0luIiwiaGVhZGVycyIsImNvbW1vbiIsInJlZnJlc2hUb2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhY2Nlc3NUb2tlbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsIndhdGNoU2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJzdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uAE40\uC9C0\uC6D0\\Documents\\Together\\prepare\\front\\pages\\_app.js";








const App = ({
  Component
}) => {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
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
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, {}, void 0, false, {
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

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");

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

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookies");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDWixTQUNJUixDQURKLEdBRUlHLDZFQUFtQixDQUFDTCxzREFBZSxDQUFDLEdBQUdTLFdBQUosQ0FBaEIsQ0FIekI7QUFJQSxRQUFNRSxLQUFLLEdBQUdWLGtEQUFXLENBQUM1Riw4Q0FBRCxFQUFVcUcsUUFBVixDQUF6QjtBQUNBQyxFQUFBQSxLQUFLLENBQUNDLFFBQU4sR0FBaUJKLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQnpFLDJDQUFuQixDQUFqQjtBQUNBLFNBQU91RSxLQUFQO0FBQ0QsQ0FYRDs7QUFhQSxNQUFNdFAsT0FBTyxHQUFHK08saUVBQWEsQ0FBQ0UsY0FBRCxFQUFpQjtBQUM1Q1EsRUFBQUEsS0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUlBLGlFQUFlelAsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmFja1VybCA9IFwiaHR0cDovL3d3dy4yZ2V0aGVyLnRrOjMwMDBcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8dGl0bGU+VG9nZXRoZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCAvPlxuICAgIDwvPlxuICApO1xufTtcblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcblxyXG4vLyjsnbTsoIQg7IOB7YOcICwg7JWh7IWYKT0+IOuLpOydjCDsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgc2luZ2xlUG9zdDogbnVsbCxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIHVubGlrZVBPc3RFcnJvcjogbnVsbCxcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSBcIlJFTU9WRV9JTUFHRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XG5cbmNvbnN0IHBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoID09PSAxMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgICAgcG9zdC5saWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5kYXRhLmlkIH0pO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuL3Bvc3RcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDrgrQg7KCV67O0IOuhnOuUqSDsi5zrj4TspJFcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IGZhbHNlLFxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuhnOuUqeykkVxuICBsb2FkVXNlckVycm9yOiBmYWxzZSxcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcbiAgZm9sbG93RG9uZTogZmFsc2UsXG4gIGZvbGxvd0Vycm9yOiBmYWxzZSxcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxuICB1bmZvbGxvd0Vycm9yOiBmYWxzZSxcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxuICBsb2dJbkRvbmU6IGZhbHNlLFxuICBsb2dJbkVycm9yOiBmYWxzZSxcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBudWxsLFxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRmFpbHVyZTogbnVsbCxcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVGYWlsdXJlOiBudWxsLFxuICBtZTogbnVsbCxcbiAgYWNjZXNzVG9rZW46IG51bGwsXG4gIHJlZnJlc2hUb2tlbjogbnVsbCxcbiAgdXNlcmluZm86IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dJbkRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZX0lORk9fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZX0lORk9fRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9IFwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXG59KTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5tZTtcbiAgICAgICAgZHJhZnQuYWNjZXNzVG9rZW4gPSBhY3Rpb24uZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgZHJhZnQucmVmcmVzaFRva2VuID0gYWN0aW9uLmRhdGEucmVmcmVzaFRva2VuO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2VycyA9IGRyYWZ0Lm1lLmZvbGxvd2Vycy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEubWU7XG4gICAgICAgIGRyYWZ0LmFjY2Vzc1Rva2VuID0gYWN0aW9uLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgICAgIGRyYWZ0LnJlZnJlc2hUb2tlbiA9IGFjdGlvbi5kYXRhLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5wb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLnBvc3QgPSBkcmFmdC5tZS5wb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZXNcIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuaWYgKGNvb2tpZS5sb2FkKFwiYWNjZXNzVG9rZW5cIikpIHtcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWFjY2Vzcy10b2tlblwiXSA9IGNvb2tpZS5sb2FkKFwiYWNjZXNzVG9rZW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHVzZXJTYWdhKSwgZm9yayhwb3N0U2FnYSldKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7XG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIEFERF9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX0ZBSUxVUkUsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIEFERF9QT1NUX1RPX01FLFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcblxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvbGlrZS8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvdW5saWtlLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdHNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1BPU1RfVE9fTUUsIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEuaWQgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9kZWxldGUvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEuaWQgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91cGxvYWQvaW1nXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuaW1hZ2VQYXRocyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL25leHRzLyR7bGFzdElkIHx8IFwiZmlyc3RcIn1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xuXG5pbXBvcnQge1xuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dpbmdzLyR7ZGF0YX0vb3B0aW9uPXVuZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93ZXJzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93aW5nc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChcIi9hdXRoL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XG59XG5cbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXV0aC9tZVwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJ4LWFjY2Vzcy10b2tlblwiOiBkYXRhLFxuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLnJlZnJlc2hUb2tlbjtcblxuICAgIGNvb2tpZS5zYXZlKFwiYWNjZXNzVG9rZW5cIiwgYWNjZXNzVG9rZW4sIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0pO1xuICAgIGNvb2tpZS5zYXZlKFwicmVmcmVzaFRva2VuXCIsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3VzZXJzLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2F1dGgvbG9naW5cIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWFjY2Vzcy10b2tlblwiXSA9XG4gICAgICByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLnJlZnJlc2hUb2tlbjtcblxuICAgIGNvb2tpZS5zYXZlKFwiYWNjZXNzVG9rZW5cIiwgYWNjZXNzVG9rZW4sIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0pO1xuICAgIGNvb2tpZS5zYXZlKFwicmVmcmVzaFRva2VuXCIsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coY29va2llKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2F1dGgvbG9nb3V0XCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIngtcmVmcmVzaC10b2tlblwiOiBkYXRhLFxuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogbG9nT3V0KGFjdGlvbikge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hdXRoL3VzZXJzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICB9KTtcbiAgICBhbGVydChcIu2ajOybkOqwgOyeheyXkCDshLHqs7XtlZjshajsirXri4jri6QuXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hTaWduVXApLFxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXG4gICAgZm9yayh3YXRjaExvZ0luKSxcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sIm5hbWVzIjpbImJhY2tVcmwiLCJSZWFjdCIsIlByb3BUeXBlcyIsIkhlYWQiLCJ3cmFwcGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid2l0aFJlZHV4IiwiSFlEUkFURSIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsInByb2R1Y2UiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJzaW5nbGVQb3N0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUE9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsInBvc3RSZWR1Y2VyIiwiZHJhZnQiLCJjb25jYXQiLCJkYXRhIiwibGVuZ3RoIiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsImZpbmQiLCJpZCIsIlBvc3RJZCIsImxpa2VycyIsInB1c2giLCJ1bnNoaWZ0IiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJEb25lIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRmFpbHVyZSIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRmFpbHVyZSIsIm1lIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ1c2VyaW5mbyIsInNpZ25VcERhdGEiLCJsb2dJbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInVzZXJJbmZvIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsInJlbW92ZUZvbGxvd2VyRG9uZSIsImZvbGxvd2VycyIsIlVzZXJJZCIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJmb2xsb3dpbmdzIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93ZXJzRG9uZSIsIm1lc3NhZ2UiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJuaWNrbmFtZSIsInBvc3RzIiwiYWxsIiwiZm9yayIsImF4aW9zIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImNvb2tpZSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImxvYWQiLCJoZWFkZXJzIiwiY29tbW9uIiwicm9vdFNhZ2EiLCJjYWxsIiwicHV0IiwidGFrZUxhdGVzdCIsInRocm90dGxlIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwicmVzdWx0IiwiZXJyIiwicmVzcG9uc2UiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJnZXQiLCJsb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJzYXZlIiwicGF0aCIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwiYWxlcnQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2UiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVdyYXBwZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY29uZmlndXJlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwic3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony export */   "LOAD_USER_POSTS_REQUEST": () => (/* binding */ LOAD_USER_POSTS_REQUEST),
/* harmony export */   "LOAD_USER_POSTS_SUCCESS": () => (/* binding */ LOAD_USER_POSTS_SUCCESS),
/* harmony export */   "LOAD_USER_POSTS_FAILURE": () => (/* binding */ LOAD_USER_POSTS_FAILURE),
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
/* harmony export */   "REMOVE_COMMENT_REQUEST": () => (/* binding */ REMOVE_COMMENT_REQUEST),
/* harmony export */   "REMOVE_COMMENT_SUCCESS": () => (/* binding */ REMOVE_COMMENT_SUCCESS),
/* harmony export */   "REMOVE_COMMENT_FAILURE": () => (/* binding */ REMOVE_COMMENT_FAILURE),
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
  removePostError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null
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
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
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
const REMOVE_COMMENT_REQUEST = "REMOVE_COMMENT_REQUEST";
const REMOVE_COMMENT_SUCCESS = "REMOVE_COMMENT_SUCCESS";
const REMOVE_COMMENT_FAILURE = "REMOVE_COMMENT_FAILURE";
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
        post.comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case REMOVE_COMMENT_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_COMMENT_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts.comments = draft.mainPosts.comments.filter(v => v.id !== action.data.commentId);
        break;

      case REMOVE_COMMENT_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
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
        _id: action.data.userId
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
      draft.me.followings = draft.me.followings.filter(v => v._id !== action.data.userId);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/search/${encodeURIComponent(data)}?lastid=${lastId || "first"}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadHashtagPostsAPI, action.data, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_HASHTAG_POSTS_FAILURE,
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/user/${data}/posts?lastId=${lastId || "first"}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadUserPostsAPI, action.data, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_USER_POSTS_SUCCESS,
      data: result.data.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_USER_POSTS_FAILURE,
      error: err.response.data
    });
  }
}

function removeCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/post/${data}`);
}

function* removeComment(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(removeCommentAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_COMMENT_SUCCESS,
      data: result.data.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_OF_ME,
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_POST_FAILURE,
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

function* watchLoadUserPosts() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__.LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function* watchRemoveComment() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(REMOVE_COMMENT_REQUEST, removeComment);
}

function* postSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUploadImages), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnlikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadHashtagPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemovePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadUserPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemoveComment)]);
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
      data: result.data.data
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/user/followings/${data}?option=unfollow`);
}

function* unfollow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(unfollowAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_SUCCESS,
      data: result.data.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_FAILURE,
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/userInfo/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadUserAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_USER_SUCCESS,
      data: result.data.data
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

function* watchLoadUser() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOAD_USER_REQUEST, loadUser);
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
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchFollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnfollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchChangeNickname), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadMyInfo), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadUser)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU1DLGNBQWMsR0FB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QUE3QjtBQUlBLGlFQUFlM1IsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmFja1VybCA9IFwiaHR0cDovL3d3dy4yZ2V0aGVyLnRrOjMwMDBcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8dGl0bGU+VG9nZXRoZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCAvPlxuICAgIDwvPlxuICApO1xufTtcblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcblxyXG4vLyjsnbTsoIQg7IOB7YOcICwg7JWh7IWYKT0+IOuLpOydjCDsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgc2luZ2xlUG9zdDogbnVsbCxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIHVubGlrZVBPc3RFcnJvcjogbnVsbCxcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcbiAgcmVtb3ZlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXG4gIHJlbW92ZUNvbW1lbnRFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUID0gXCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9IFwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSBcIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcblxuY29uc3QgcG9zdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA9PT0gMTA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoXG4gICAgICAgICAgICAodikgPT4gdi5pZCA9PT0gK2FjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgcG9zdC5saWtlZFVzZXJzLnB1c2goeyBfaWQ6IGFjdGlvbi5kYXRhLnVzZXJJZCB9KTtcbiAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKFxuICAgICAgICAgICAgKHYpID0+IHYuaWQgPT09ICthY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHBvc3QubGlrZWRVc2VycyA9IHBvc3QubGlrZWRVc2Vycy5maWx0ZXIoXG4gICAgICAgICAgICAodikgPT4gdi5faWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09ICthY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gK2FjdGlvbi5kYXRhLnBvc3RJZCk7XG4gICAgICAgIHBvc3QuY29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLmNvbW1lbnRzID0gZHJhZnQubWFpblBvc3RzLmNvbW1lbnRzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuY29tbWVudElkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi9wb3N0XCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g64K0IOygleuztCDroZzrlKkg7Iuc64+E7KSRXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcbiAgbG9hZE15SW5mb0Vycm9yOiBmYWxzZSxcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDroZzrlKnspJFcbiAgbG9hZFVzZXJFcnJvcjogZmFsc2UsXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogZmFsc2UsXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJFcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcbiAgdW5mb2xsb3dFcnJvcjogZmFsc2UsXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogZmFsc2UsXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXG4gIGxvZ091dERvbmU6IGZhbHNlLFxuICBsb2dPdXRFcnJvcjogbnVsbCxcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcbiAgc2lnblVwRG9uZTogZmFsc2UsXG4gIHNpZ25VcEZhaWx1cmU6IG51bGwsXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRmFpbHVyZTogbnVsbCxcbiAgbWU6IG51bGwsXG4gIGFjY2Vzc1Rva2VuOiBudWxsLFxuICByZWZyZXNoVG9rZW46IG51bGwsXG4gIHVzZXJpbmZvOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9nSW5EYXRhOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9NWV9JTkZPX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9NWV9JTkZPX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9NWV9JTkZPX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJMT0FEX1VTRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSBcIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxufSk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEubWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93ZXJzID0gZHJhZnQubWUuZm9sbG93ZXJzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2luZ3MucHVzaCh7IF9pZDogYWN0aW9uLmRhdGEudXNlcklkIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93aW5ncyA9IGRyYWZ0Lm1lLmZvbGxvd2luZ3MuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2Ll9pZCAhPT0gYWN0aW9uLmRhdGEudXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEubWU7XG4gICAgICAgIGRyYWZ0LmFjY2Vzc1Rva2VuID0gYWN0aW9uLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgICAgIGRyYWZ0LnJlZnJlc2hUb2tlbiA9IGFjdGlvbi5kYXRhLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5wb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLnBvc3QgPSBkcmFmdC5tZS5wb3N0cy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09ICthY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZXNcIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuaWYgKGNvb2tpZS5sb2FkKFwiYWNjZXNzVG9rZW5cIikpIHtcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWFjY2Vzcy10b2tlblwiXSA9IGNvb2tpZS5sb2FkKFwiYWNjZXNzVG9rZW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHVzZXJTYWdhKSwgZm9yayhwb3N0U2FnYSldKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7XG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIEFERF9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX0ZBSUxVUkUsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIEFERF9QT1NUX1RPX01FLFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcbiAgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcblxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvdXNlci9jb21tZW50cy8ke2RhdGEucG9zdElkfWAsIHsgY29tbWVudDogZGF0YS5jb21tZW50IH0pO1xufVxuXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL2FwaS9saWtlLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvdW5saWtlLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0c1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRERfUE9TVF9UT19NRSwgZGF0YTogcmVzdWx0LmRhdGEuZGF0YS5pZCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL2RlbGV0ZS8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSwgZGF0YTogcmVzdWx0LmRhdGEuZGF0YS5pZCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VwbG9hZC9pbWdcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEubWVzc2FnZS5pbWFnZVBhdGhzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvbmV4dHMvJHtsYXN0SWQgfHwgXCJmaXJzdFwifWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcbiAgICBgL2FwaS9zZWFyY2gvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RpZD0ke2xhc3RJZCB8fCBcImZpcnN0XCJ9YFxuICApO1xufVxuXG5mdW5jdGlvbiogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IFwiZmlyc3RcIn1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDb21tZW50QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlQ29tbWVudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsIGRhdGE6IGFjdGlvbi5kYXRhIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsIHJlbW92ZUNvbW1lbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcbiAgICBmb3JrKHdhdGNoUmVtb3ZlQ29tbWVudCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJyZWFjdC1jb29raWVzXCI7XG5pbXBvcnQge1xuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9SRVFVRVNULFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyL2ZvbGxvd2luZ3MvJHtkYXRhfT9vcHRpb249Zm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvZm9sbG93aW5ncy8ke2RhdGF9P29wdGlvbj11bmZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKFwiL2F1dGgvbmlja25hbWVcIiwgeyBuaWNrbmFtZTogZGF0YSB9KTtcbn1cblxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hdXRoL21lXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIngtYWNjZXNzLXRva2VuXCI6IGRhdGEsXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgIC8vIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEucmVmcmVzaFRva2VuO1xuXG4gICAgY29va2llLnNhdmUoXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gICAgLy8gY29va2llLnNhdmUoXCJyZWZyZXNoVG9rZW5cIiwgcmVmcmVzaFRva2VuLCB7XG4gICAgLy8gICBwYXRoOiBcIi9cIixcbiAgICAvLyB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvdXNlckluZm8vJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hdXRoL2xvZ2luXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wieC1hY2Nlc3MtdG9rZW5cIl0gPVxuICAgICAgcmVzdWx0LmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5yZWZyZXNoVG9rZW47XG5cbiAgICBjb29raWUuc2F2ZShcImFjY2Vzc1Rva2VuXCIsIGFjY2Vzc1Rva2VuLCB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcbiAgICBjb29raWUuc2F2ZShcInJlZnJlc2hUb2tlblwiLCByZWZyZXNoVG9rZW4sIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGNvb2tpZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hdXRoL2xvZ291dFwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJ4LXJlZnJlc2gtdG9rZW5cIjogZGF0YSxcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24qIGxvZ091dChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXG4gICAgfSk7XG4gICAgY29va2llLnJlbW92ZShcImFjY2Vzc1Rva2VuXCIpO1xuICAgIGNvb2tpZS5yZW1vdmUoXCJyZWZyZXNoVG9rZW5cIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXV0aC91c2Vyc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXG4gICAgfSk7XG4gICAgYWxlcnQoXCLtmozsm5DqsIDsnoXsl5Ag7ISx6rO17ZWY7IWo7Iq164uI64ukLlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXG4gICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxuICAgIGZvcmsod2F0Y2hMb2dJbiksXG4gICAgZm9yayh3YXRjaExvZ091dCksXG4gICAgZm9yayh3YXRjaExvYWRVc2VyKSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sIm5hbWVzIjpbImJhY2tVcmwiLCJSZWFjdCIsIlByb3BUeXBlcyIsIkhlYWQiLCJ3cmFwcGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid2l0aFJlZHV4IiwiSFlEUkFURSIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsInByb2R1Y2UiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJzaW5nbGVQb3N0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUE9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsInJlbW92ZUNvbW1lbnRMb2FkaW5nIiwicmVtb3ZlQ29tbWVudERvbmUiLCJyZW1vdmVDb21tZW50RXJyb3IiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwicG9zdFJlZHVjZXIiLCJkcmFmdCIsImNvbmNhdCIsImRhdGEiLCJsZW5ndGgiLCJlcnJvciIsImZpbHRlciIsInYiLCJpIiwiZmluZCIsImlkIiwicG9zdElkIiwibGlrZWRVc2VycyIsInB1c2giLCJfaWQiLCJ1c2VySWQiLCJ1bmxpa2VQb3N0RXJyb3IiLCJ1bnNoaWZ0IiwiY29tbWVudHMiLCJjb21tZW50SWQiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRXJyb3IiLCJsb2FkVXNlckRvbmUiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBGYWlsdXJlIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVGYWlsdXJlIiwibWUiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsInVzZXJpbmZvIiwic2lnblVwRGF0YSIsImxvZ0luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwidXNlckluZm8iLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckVycm9yIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwiZm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImZvbGxvd2luZ3MiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dlcnNEb25lIiwibWVzc2FnZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm5pY2tuYW1lIiwicG9zdHMiLCJhbGwiLCJmb3JrIiwiYXhpb3MiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiY29va2llIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwibG9hZCIsImhlYWRlcnMiLCJjb21tb24iLCJyb290U2FnYSIsImNhbGwiLCJwdXQiLCJ0YWtlTGF0ZXN0IiwidGhyb3R0bGUiLCJhZGRDb21tZW50QVBJIiwiY29tbWVudCIsImFkZENvbW1lbnQiLCJyZXN1bHQiLCJlcnIiLCJyZXNwb25zZSIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsImxvYWRQb3N0c0FQSSIsImxhc3RJZCIsImdldCIsImxvYWRQb3N0cyIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZFVzZXJQb3N0c0FQSSIsImxvYWRVc2VyUG9zdHMiLCJyZW1vdmVDb21tZW50QVBJIiwicmVtb3ZlQ29tbWVudCIsIndhdGNoQWRkUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hSZW1vdmVDb21tZW50IiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsInNhdmUiLCJwYXRoIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJyZW1vdmUiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJhbGVydCIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaFNpZ25VcCIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2UiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVdyYXBwZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY29uZmlndXJlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwic3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==
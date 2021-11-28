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
      case LOAD_USER_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = draft.mainPosts.length === 10;
        break;

      case LOAD_USER_POSTS_FAILURE:
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/userposts/${data}?lastid=${lastId || "first"}`);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/user/comments/${data}`);
}

function* removeComment(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(removeCommentAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_COMMENT_SUCCESS,
      data: result.data.data
    }); // yield put({ type: REMOVE_COMMENT_OF_ME, data: action.data });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_COMMENT_FAILURE,
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
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.REMOVE_COMMENT_REQUEST, removeComment);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU1DLGNBQWMsR0FB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QUN6QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiYWNrVXJsID0gXCJodHRwOi8vd3d3LjJnZXRoZXIudGs6MzAwMFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5Ub2dldGhlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5BcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuXHJcbi8vKOydtOyghCDsg4Htg5wgLCDslaHshZgpPT4g64uk7J2MIOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtdLFxuICBzaW5nbGVQb3N0OiBudWxsLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcbiAgdW5saWtlUE9zdEVycm9yOiBudWxsLFxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuICByZW1vdmVDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZUNvbW1lbnREb25lOiBmYWxzZSxcbiAgcmVtb3ZlQ29tbWVudEVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9IFwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgPSBcIlJFTU9WRV9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTID0gXCJSRU1PVkVfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSA9IFwiUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xuXG5jb25zdCBwb3N0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XG4gICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPT09IDEwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkU6XG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZChcbiAgICAgICAgICAgICh2KSA9PiB2LmlkID09PSArYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwb3N0Lmxpa2VkVXNlcnMucHVzaCh7IF9pZDogYWN0aW9uLmRhdGEudXNlcklkIH0pO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoXG4gICAgICAgICAgICAodikgPT4gdi5pZCA9PT0gK2FjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgcG9zdC5saWtlZFVzZXJzID0gcG9zdC5saWtlZFVzZXJzLmZpbHRlcihcbiAgICAgICAgICAgICh2KSA9PiB2Ll9pZCAhPT0gYWN0aW9uLmRhdGEudXNlcklkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gK2FjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSArYWN0aW9uLmRhdGEucG9zdElkKTtcbiAgICAgICAgcG9zdC5jb21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMuY29tbWVudHMgPSBkcmFmdC5tYWluUG9zdHMuY29tbWVudHMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5jb21tZW50SWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuL3Bvc3RcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDrgrQg7KCV67O0IOuhnOuUqSDsi5zrj4TspJFcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IGZhbHNlLFxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuhnOuUqeykkVxuICBsb2FkVXNlckVycm9yOiBmYWxzZSxcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcbiAgZm9sbG93RG9uZTogZmFsc2UsXG4gIGZvbGxvd0Vycm9yOiBmYWxzZSxcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxuICB1bmZvbGxvd0Vycm9yOiBmYWxzZSxcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxuICBsb2dJbkRvbmU6IGZhbHNlLFxuICBsb2dJbkVycm9yOiBmYWxzZSxcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBudWxsLFxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRmFpbHVyZTogbnVsbCxcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVGYWlsdXJlOiBudWxsLFxuICBtZTogbnVsbCxcbiAgYWNjZXNzVG9rZW46IG51bGwsXG4gIHJlZnJlc2hUb2tlbjogbnVsbCxcbiAgdXNlcmluZm86IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dJbkRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZX0lORk9fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZX0lORk9fRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9IFwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXG59KTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5tZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dlcnMgPSBkcmFmdC5tZS5mb2xsb3dlcnMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5pZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93aW5ncy5wdXNoKHsgX2lkOiBhY3Rpb24uZGF0YS51c2VySWQgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dpbmdzID0gZHJhZnQubWUuZm9sbG93aW5ncy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuX2lkICE9PSBhY3Rpb24uZGF0YS51c2VySWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5tZTtcbiAgICAgICAgZHJhZnQuYWNjZXNzVG9rZW4gPSBhY3Rpb24uZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgZHJhZnQucmVmcmVzaFRva2VuID0gYWN0aW9uLmRhdGEucmVmcmVzaFRva2VuO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XG4gICAgICAgIGRyYWZ0Lm1lLnBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcbiAgICAgICAgZHJhZnQubWUucG9zdCA9IGRyYWZ0Lm1lLnBvc3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gK2FjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYmFja1VybDtcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5pZiAoY29va2llLmxvYWQoXCJhY2Nlc3NUb2tlblwiKSkge1xuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIngtYWNjZXNzLXRva2VuXCJdID0gY29va2llLmxvYWQoXCJhY2Nlc3NUb2tlblwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2ZvcmsodXNlclNhZ2EpLCBmb3JrKHBvc3RTYWdhKV0pO1xufVxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxuICBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfUkVRVUVTVCxcbiAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfRkFJTFVSRSxcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcbiAgQUREX1BPU1RfVE9fTUUsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gIFJFTU9WRV9QT1NUX09GX01FLFxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxuICBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxuICBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxuICBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC91c2VyL2NvbW1lbnRzLyR7ZGF0YS5wb3N0SWR9YCwgeyBjb21tZW50OiBkYXRhLmNvbW1lbnQgfSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvYXBpL2xpa2UvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL2FwaS91bmxpa2UvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3RzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFERF9QT1NUX1RPX01FLCBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLmlkIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvZGVsZXRlLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLCBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLmlkIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXBsb2FkL2ltZ1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5tZXNzYWdlLmltYWdlUGF0aHMsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9uZXh0cy8ke2xhc3RJZCB8fCBcImZpcnN0XCJ9YCk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFxuICAgIGAvYXBpL3NlYXJjaC8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdGlkPSR7bGFzdElkIHx8IFwiZmlyc3RcIn1gXG4gICk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS91c2VycG9zdHMvJHtkYXRhfT9sYXN0aWQ9JHtsYXN0SWQgfHwgXCJmaXJzdFwifWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9jb21tZW50cy8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiByZW1vdmVDb21tZW50KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICAvLyB5aWVsZCBwdXQoeyB0eXBlOiBSRU1PVkVfQ09NTUVOVF9PRl9NRSwgZGF0YTogYWN0aW9uLmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUNvbW1lbnQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCwgcmVtb3ZlQ29tbWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxuICAgIGZvcmsod2F0Y2hSZW1vdmVDb21tZW50KSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZXNcIjtcbmltcG9ydCB7XG4gIExPR19JTl9SRVFVRVNULFxuICBMT0dfSU5fU1VDQ0VTUyxcbiAgTE9HX0lOX0ZBSUxVUkUsXG4gIExPR19PVVRfU1VDQ0VTUyxcbiAgTE9HX09VVF9GQUlMVVJFLFxuICBMT0dfT1VUX1JFUVVFU1QsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIEZPTExPV19SRVFVRVNULFxuICBVTkZPTExPV19SRVFVRVNULFxuICBGT0xMT1dfU1VDQ0VTUyxcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcbiAgRk9MTE9XX0ZBSUxVUkUsXG4gIFVORk9MTE9XX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgTE9BRF9VU0VSX1JFUVVFU1QsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvZm9sbG93aW5ncy8ke2RhdGF9P29wdGlvbj1mb2xsb3dgKTtcbn1cblxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci9mb2xsb3dpbmdzLyR7ZGF0YX0/b3B0aW9uPXVuZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goXCIvYXV0aC9uaWNrbmFtZVwiLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xufVxuXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2F1dGgvbWVcIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogZGF0YSxcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgLy8gY29uc3QgcmVmcmVzaFRva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5yZWZyZXNoVG9rZW47XG5cbiAgICBjb29raWUuc2F2ZShcImFjY2Vzc1Rva2VuXCIsIGFjY2Vzc1Rva2VuLCB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcbiAgICAvLyBjb29raWUuc2F2ZShcInJlZnJlc2hUb2tlblwiLCByZWZyZXNoVG9rZW4sIHtcbiAgICAvLyAgIHBhdGg6IFwiL1wiLFxuICAgIC8vIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS91c2VySW5mby8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2F1dGgvbG9naW5cIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWFjY2Vzcy10b2tlblwiXSA9XG4gICAgICByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLnJlZnJlc2hUb2tlbjtcblxuICAgIGNvb2tpZS5zYXZlKFwiYWNjZXNzVG9rZW5cIiwgYWNjZXNzVG9rZW4sIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0pO1xuICAgIGNvb2tpZS5zYXZlKFwicmVmcmVzaFRva2VuXCIsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coY29va2llKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2F1dGgvbG9nb3V0XCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIngtcmVmcmVzaC10b2tlblwiOiBkYXRhLFxuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogbG9nT3V0KGFjdGlvbikge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcbiAgICB9KTtcbiAgICBjb29raWUucmVtb3ZlKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgY29va2llLnJlbW92ZShcInJlZnJlc2hUb2tlblwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hdXRoL3VzZXJzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICB9KTtcbiAgICBhbGVydChcIu2ajOybkOqwgOyeheyXkCDshLHqs7XtlZjshajsirXri4jri6QuXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hTaWduVXApLFxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXG4gICAgZm9yayh3YXRjaExvZ0luKSxcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwibmFtZXMiOlsiYmFja1VybCIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiSGVhZCIsIndyYXBwZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3aXRoUmVkdXgiLCJIWURSQVRFIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwicHJvZHVjZSIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsInNpbmdsZVBvc3QiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQT3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9DT01NRU5UX1JFUVVFU1QiLCJSRU1PVkVfQ09NTUVOVF9TVUNDRVNTIiwiUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJwb3N0UmVkdWNlciIsImRyYWZ0IiwiY29uY2F0IiwiZGF0YSIsImxlbmd0aCIsImVycm9yIiwiZmlsdGVyIiwidiIsImkiLCJmaW5kIiwiaWQiLCJwb3N0SWQiLCJsaWtlZFVzZXJzIiwicHVzaCIsIl9pZCIsInVzZXJJZCIsInVubGlrZVBvc3RFcnJvciIsInVuc2hpZnQiLCJjb21tZW50cyIsImNvbW1lbnRJZCIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJFcnJvciIsImxvYWRVc2VyRG9uZSIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEZhaWx1cmUiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUZhaWx1cmUiLCJtZSIsImFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwidXNlcmluZm8iLCJzaWduVXBEYXRhIiwibG9nSW5EYXRhIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJ1c2VySW5mbyIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJmb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NEb25lIiwiZm9sbG93aW5ncyIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJtZXNzYWdlIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibmlja25hbWUiLCJwb3N0cyIsImFsbCIsImZvcmsiLCJheGlvcyIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJjb29raWUiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJsb2FkIiwiaGVhZGVycyIsImNvbW1vbiIsInJvb3RTYWdhIiwiY2FsbCIsInB1dCIsInRha2VMYXRlc3QiLCJ0aHJvdHRsZSIsImFkZENvbW1lbnRBUEkiLCJjb21tZW50IiwiYWRkQ29tbWVudCIsInJlc3VsdCIsImVyciIsInJlc3BvbnNlIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibG9hZFBvc3RzQVBJIiwibGFzdElkIiwiZ2V0IiwibG9hZFBvc3RzIiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWRIYXNodGFnUG9zdHMiLCJsb2FkVXNlclBvc3RzQVBJIiwibG9hZFVzZXJQb3N0cyIsInJlbW92ZUNvbW1lbnRBUEkiLCJyZW1vdmVDb21tZW50Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaExvYWRIYXNodGFnUG9zdHMiLCJ3YXRjaExvYWRVc2VyUG9zdHMiLCJ3YXRjaFJlbW92ZUNvbW1lbnQiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93IiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwic2F2ZSIsInBhdGgiLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInJlbW92ZSIsInNpZ25VcEFQSSIsInNpZ25VcCIsImFsZXJ0Iiwid2F0Y2hMb2FkVXNlciIsIndhdGNoU2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJzdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9
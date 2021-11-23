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
  console.log(data.comment, data.postId);
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/user/comments/${data.postId}`, {
    comment: data.comment
  });
}

function* addComment(action) {
  try {
    console.log(action.data);
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addCommentAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT_SUCCESS,
      data: result.data.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.ADD_POST_FAILURE,
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

function* postSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUploadImages), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnlikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemovePost)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQUQsQ0FQSSxDQUFELENBQVQ7QUFTRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hURDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTU8sY0FBYyxHQUFJQyxPQUFELElBQWE7QUFDbENqUCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWdQLE9BQVo7QUFDQSxRQUFNQyxjQUFjLEdBQUdMLGlEQUFvQixFQUEzQztBQUNBLFFBQU1NLFdBQVcsR0FBRyxDQUFDRCxjQUFELENBQXBCO0FBQ0EsUUFBTUUsUUFBUSxHQUNaLFNBQ0lSLENBREosR0FFSUcsNkVBQW1CLENBQUNMLHNEQUFlLENBQUMsR0FBR1MsV0FBSixDQUFoQixDQUh6QjtBQUlBLFFBQU1FLEtBQUssR0FBR1Ysa0RBQVcsQ0FBQy9GLDhDQUFELEVBQVV3RyxRQUFWLENBQXpCO0FBQ0FDLEVBQUFBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQkosY0FBYyxDQUFDSyxHQUFmLENBQW1CN0UsMkNBQW5CLENBQWpCO0FBQ0EsU0FBTzJFLEtBQVA7QUFDRCxDQVhEOztBQWFBLE1BQU1wUSxPQUFPLEdBQUc2UCxpRUFBYSxDQUFDRSxjQUFELEVBQWlCO0FBQzVDUSxFQUFBQSxLQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSUEsaUVBQWV2USxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUV6QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmFja1VybCA9IFwiaHR0cDovL3d3dy4yZ2V0aGVyLnRrOjMwMDBcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8dGl0bGU+VG9nZXRoZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCAvPlxuICAgIDwvPlxuICApO1xufTtcblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcblxyXG4vLyjsnbTsoIQg7IOB7YOcICwg7JWh7IWYKT0+IOuLpOydjCDsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgc2luZ2xlUG9zdDogbnVsbCxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIHVubGlrZVBPc3RFcnJvcjogbnVsbCxcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9IFwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcblxuY29uc3QgcG9zdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPT09IDEwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoXG4gICAgICAgICAgICAodikgPT4gdi5pZCA9PT0gK2FjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgcG9zdC5saWtlZFVzZXJzLnB1c2goeyBfaWQ6IGFjdGlvbi5kYXRhLnVzZXJJZCB9KTtcbiAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKFxuICAgICAgICAgICAgKHYpID0+IHYuaWQgPT09ICthY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHBvc3QubGlrZWRVc2VycyA9IHBvc3QubGlrZWRVc2Vycy5maWx0ZXIoXG4gICAgICAgICAgICAodikgPT4gdi5faWQgIT09IGFjdGlvbi5kYXRhLnVzZXJJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09ICthY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gK2FjdGlvbi5kYXRhLnBvc3RJZCk7XG4gICAgICAgIHBvc3QuY29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YS5jb21tZW50KTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0UmVkdWNlcjtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSBcIi4vcG9zdFwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOuCtCDsoJXrs7Qg66Gc65SpIOyLnOuPhOykkVxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXG4gIGxvYWRNeUluZm9FcnJvcjogZmFsc2UsXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg66Gc65Sp7KSRXG4gIGxvYWRVc2VyRXJyb3I6IGZhbHNlLFxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxuICBmb2xsb3dEb25lOiBmYWxzZSxcbiAgZm9sbG93RXJyb3I6IGZhbHNlLFxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXG4gIHVuZm9sbG93RXJyb3I6IGZhbHNlLFxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXG4gIGxvZ0luRG9uZTogZmFsc2UsXG4gIGxvZ0luRXJyb3I6IGZhbHNlLFxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxuICBsb2dPdXREb25lOiBmYWxzZSxcbiAgbG9nT3V0RXJyb3I6IG51bGwsXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxuICBzaWduVXBGYWlsdXJlOiBudWxsLFxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZUZhaWx1cmU6IG51bGwsXG4gIG1lOiBudWxsLFxuICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgcmVmcmVzaFRva2VuOiBudWxsLFxuICB1c2VyaW5mbzogbnVsbCxcbiAgc2lnblVwRGF0YToge30sXG4gIGxvZ0luRGF0YToge30sXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSBcIkxPQURfTVlfSU5GT19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSBcIkxPQURfTVlfSU5GT19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSBcIkxPQURfTVlfSU5GT19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gXCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gXCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcbiAgZGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcbn0pO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhLm1lO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2VycyA9IGRyYWZ0Lm1lLmZvbGxvd2Vycy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmlkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5mb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEudXNlcklkIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93aW5ncyA9IGRyYWZ0Lm1lLmZvbGxvd2luZ3MuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS51c2VySWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YS5tZTtcbiAgICAgICAgZHJhZnQuYWNjZXNzVG9rZW4gPSBhY3Rpb24uZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgZHJhZnQucmVmcmVzaFRva2VuID0gYWN0aW9uLmRhdGEucmVmcmVzaFRva2VuO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XG4gICAgICAgIGRyYWZ0Lm1lLnBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcbiAgICAgICAgZHJhZnQubWUucG9zdCA9IGRyYWZ0Lm1lLnBvc3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gK2FjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYmFja1VybDtcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5pZiAoY29va2llLmxvYWQoXCJhY2Nlc3NUb2tlblwiKSkge1xuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIngtYWNjZXNzLXRva2VuXCJdID0gY29va2llLmxvYWQoXCJhY2Nlc3NUb2tlblwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2ZvcmsodXNlclNhZ2EpLCBmb3JrKHBvc3RTYWdhKV0pO1xufVxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxuICBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfUkVRVUVTVCxcbiAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfRkFJTFVSRSxcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcbiAgQUREX1BPU1RfVE9fTUUsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gIFJFTU9WRV9QT1NUX09GX01FLFxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcbiAgY29uc29sZS5sb2coZGF0YS5jb21tZW50LCBkYXRhLnBvc3RJZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvdXNlci9jb21tZW50cy8ke2RhdGEucG9zdElkfWAsIHsgY29tbWVudDogZGF0YS5jb21tZW50IH0pO1xufVxuXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvbGlrZS8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvYXBpL3VubGlrZS8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdHNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1BPU1RfVE9fTUUsIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEuaWQgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9kZWxldGUvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEuaWQgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91cGxvYWQvaW1nXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuaW1hZ2VQYXRocyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL25leHRzLyR7bGFzdElkIHx8IFwiZmlyc3RcIn1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XG59XG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXG4gICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xuXG5pbXBvcnQge1xuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci9mb2xsb3dpbmdzLyR7ZGF0YX0/b3B0aW9uPWZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93aW5ncy8ke2RhdGF9L29wdGlvbj11bmZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2ZvbGxvd2Vyc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2ZvbGxvd2luZ3NcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goXCIvYXV0aC9uaWNrbmFtZVwiLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xufVxuXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2F1dGgvbWVcIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogZGF0YSxcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgLy8gY29uc3QgcmVmcmVzaFRva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5yZWZyZXNoVG9rZW47XG5cbiAgICBjb29raWUuc2F2ZShcImFjY2Vzc1Rva2VuXCIsIGFjY2Vzc1Rva2VuLCB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcbiAgICAvLyBjb29raWUuc2F2ZShcInJlZnJlc2hUb2tlblwiLCByZWZyZXNoVG9rZW4sIHtcbiAgICAvLyAgIHBhdGg6IFwiL1wiLFxuICAgIC8vIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS91c2Vycy8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9hdXRoL2xvZ2luXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wieC1hY2Nlc3MtdG9rZW5cIl0gPVxuICAgICAgcmVzdWx0LmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gcmVzdWx0LmRhdGEuZGF0YS5yZWZyZXNoVG9rZW47XG5cbiAgICBjb29raWUuc2F2ZShcImFjY2Vzc1Rva2VuXCIsIGFjY2Vzc1Rva2VuLCB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcbiAgICBjb29raWUuc2F2ZShcInJlZnJlc2hUb2tlblwiLCByZWZyZXNoVG9rZW4sIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGNvb2tpZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hdXRoL2xvZ291dFwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJ4LXJlZnJlc2gtdG9rZW5cIjogZGF0YSxcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24qIGxvZ091dChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXG4gICAgfSk7XG4gICAgY29va2llLnJlbW92ZShcImFjY2Vzc1Rva2VuXCIpO1xuICAgIGNvb2tpZS5yZW1vdmUoXCJyZWZyZXNoVG9rZW5cIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXV0aC91c2Vyc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXG4gICAgfSk7XG4gICAgYWxlcnQoXCLtmozsm5DqsIDsnoXsl5Ag7ISx6rO17ZWY7IWo7Iq164uI64ukLlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXG4gICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxuICAgIGZvcmsod2F0Y2hMb2dJbiksXG4gICAgZm9yayh3YXRjaExvZ091dCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY29udGV4dCk7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJuYW1lcyI6WyJiYWNrVXJsIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJIZWFkIiwid3JhcHBlciIsIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndpdGhSZWR1eCIsIkhZRFJBVEUiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJwcm9kdWNlIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBPc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwicG9zdFJlZHVjZXIiLCJkcmFmdCIsImNvbmNhdCIsImRhdGEiLCJsZW5ndGgiLCJlcnJvciIsImZpbHRlciIsInYiLCJpIiwiZmluZCIsImlkIiwicG9zdElkIiwibGlrZWRVc2VycyIsInB1c2giLCJfaWQiLCJ1c2VySWQiLCJ1bmxpa2VQb3N0RXJyb3IiLCJ1bnNoaWZ0IiwiY29tbWVudHMiLCJjb21tZW50IiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJEb25lIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRmFpbHVyZSIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRmFpbHVyZSIsIm1lIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ1c2VyaW5mbyIsInNpZ25VcERhdGEiLCJsb2dJbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInVzZXJJbmZvIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsInJlbW92ZUZvbGxvd2VyRG9uZSIsImZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJmb2xsb3dpbmdzIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93ZXJzRG9uZSIsIm1lc3NhZ2UiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJuaWNrbmFtZSIsInBvc3RzIiwiYWxsIiwiZm9yayIsImF4aW9zIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImNvb2tpZSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImxvYWQiLCJoZWFkZXJzIiwiY29tbW9uIiwicm9vdFNhZ2EiLCJjYWxsIiwicHV0IiwidGFrZUxhdGVzdCIsInRocm90dGxlIiwiYWRkQ29tbWVudEFQSSIsImFkZENvbW1lbnQiLCJyZXN1bHQiLCJlcnIiLCJyZXNwb25zZSIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsImxvYWRQb3N0c0FQSSIsImxhc3RJZCIsImdldCIsImxvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0IiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsInNhdmUiLCJwYXRoIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJyZW1vdmUiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJhbGVydCIsIndhdGNoU2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJzdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9
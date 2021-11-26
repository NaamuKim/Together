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
        post.comments.unshift(action.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsR0FBR1MsV0FBSixDQUFoQixDQUh6QjtBQUlBLFFBQU1FLEtBQUssR0FBR1Ysa0RBQVcsQ0FBQ2hHLDhDQUFELEVBQVV5RyxRQUFWLENBQXpCO0FBQ0FDLEVBQUFBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQkosY0FBYyxDQUFDSyxHQUFmLENBQW1COUUsMkNBQW5CLENBQWpCO0FBQ0EsU0FBTzRFLEtBQVA7QUFDRCxDQVhEOztBQWFBLE1BQU12USxPQUFPLEdBQUdnUSxpRUFBYSxDQUFDRSxjQUFELEVBQWlCO0FBQzVDUSxFQUFBQSxLQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSUEsaUVBQWUxUSxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250Ly4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3RvZ2V0aGVyLWZyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vdG9nZXRoZXItZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly90b2dldGhlci1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiYWNrVXJsID0gXCJodHRwOi8vd3d3LjJnZXRoZXIudGs6MzAwMFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5Ub2dldGhlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5BcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuXHJcbi8vKOydtOyghCDsg4Htg5wgLCDslaHshZgpPT4g64uk7J2MIOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtdLFxuICBzaW5nbGVQb3N0OiBudWxsLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcbiAgdW5saWtlUE9zdEVycm9yOiBudWxsLFxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSBcIlJFTU9WRV9JTUFHRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XG5cbmNvbnN0IHBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPT09IDEwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKFxuICAgICAgICAgICAgKHYpID0+IHYuaWQgPT09ICthY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHBvc3QubGlrZWRVc2Vycy5wdXNoKHsgX2lkOiBhY3Rpb24uZGF0YS51c2VySWQgfSk7XG4gICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZChcbiAgICAgICAgICAgICh2KSA9PiB2LmlkID09PSArYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwb3N0Lmxpa2VkVXNlcnMgPSBwb3N0Lmxpa2VkVXNlcnMuZmlsdGVyKFxuICAgICAgICAgICAgKHYpID0+IHYuX2lkICE9PSBhY3Rpb24uZGF0YS51c2VySWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSArYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09ICthY3Rpb24uZGF0YS5wb3N0SWQpO1xuICAgICAgICBwb3N0LmNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi9wb3N0XCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g64K0IOygleuztCDroZzrlKkg7Iuc64+E7KSRXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcbiAgbG9hZE15SW5mb0Vycm9yOiBmYWxzZSxcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDroZzrlKnspJFcbiAgbG9hZFVzZXJFcnJvcjogZmFsc2UsXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogZmFsc2UsXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJFcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcbiAgdW5mb2xsb3dFcnJvcjogZmFsc2UsXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogZmFsc2UsXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXG4gIGxvZ091dERvbmU6IGZhbHNlLFxuICBsb2dPdXRFcnJvcjogbnVsbCxcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcbiAgc2lnblVwRG9uZTogZmFsc2UsXG4gIHNpZ25VcEZhaWx1cmU6IG51bGwsXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRmFpbHVyZTogbnVsbCxcbiAgbWU6IG51bGwsXG4gIGFjY2Vzc1Rva2VuOiBudWxsLFxuICByZWZyZXNoVG9rZW46IG51bGwsXG4gIHVzZXJpbmZvOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9nSW5EYXRhOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9NWV9JTkZPX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9NWV9JTkZPX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9NWV9JTkZPX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJMT0FEX1VTRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSBcIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxufSk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEubWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93ZXJzID0gZHJhZnQubWUuZm9sbG93ZXJzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2luZ3MucHVzaCh7IF9pZDogYWN0aW9uLmRhdGEudXNlcklkIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuZm9sbG93aW5ncyA9IGRyYWZ0Lm1lLmZvbGxvd2luZ3MuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2Ll9pZCAhPT0gYWN0aW9uLmRhdGEudXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEubWU7XG4gICAgICAgIGRyYWZ0LmFjY2Vzc1Rva2VuID0gYWN0aW9uLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgICAgIGRyYWZ0LnJlZnJlc2hUb2tlbiA9IGFjdGlvbi5kYXRhLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5wb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLnBvc3QgPSBkcmFmdC5tZS5wb3N0cy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09ICthY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZXNcIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuaWYgKGNvb2tpZS5sb2FkKFwiYWNjZXNzVG9rZW5cIikpIHtcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWFjY2Vzcy10b2tlblwiXSA9IGNvb2tpZS5sb2FkKFwiYWNjZXNzVG9rZW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHVzZXJTYWdhKSwgZm9yayhwb3N0U2FnYSldKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7XG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIEFERF9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX0ZBSUxVUkUsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIEFERF9QT1NUX1RPX01FLFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcblxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvdXNlci9jb21tZW50cy8ke2RhdGEucG9zdElkfWAsIHsgY29tbWVudDogZGF0YS5jb21tZW50IH0pO1xufVxuXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL2FwaS9saWtlLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvdW5saWtlLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0c1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRERfUE9TVF9UT19NRSwgZGF0YTogcmVzdWx0LmRhdGEuZGF0YS5pZCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL2RlbGV0ZS8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSwgZGF0YTogcmVzdWx0LmRhdGEuZGF0YS5pZCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VwbG9hZC9pbWdcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEubWVzc2FnZS5pbWFnZVBhdGhzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvbmV4dHMvJHtsYXN0SWQgfHwgXCJmaXJzdFwifWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcbiAgICBgL2FwaS9zZWFyY2gvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RpZD0ke2xhc3RJZCB8fCBcImZpcnN0XCJ9YFxuICApO1xufVxuXG5mdW5jdGlvbiogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XG59XG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xuaW1wb3J0IHtcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTSUdOX1VQX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgRk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIEZPTExPV19TVUNDRVNTLFxuICBVTkZPTExPV19TVUNDRVNTLFxuICBGT0xMT1dfRkFJTFVSRSxcbiAgVU5GT0xMT1dfRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9GQUlMVVJFLFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyL2ZvbGxvd2luZ3MvJHtkYXRhfT9vcHRpb249Zm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvZm9sbG93aW5ncy8ke2RhdGF9P29wdGlvbj11bmZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKFwiL2F1dGgvbmlja25hbWVcIiwgeyBuaWNrbmFtZTogZGF0YSB9KTtcbn1cblxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hdXRoL21lXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIngtYWNjZXNzLXRva2VuXCI6IGRhdGEsXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgfSk7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgIC8vIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEucmVmcmVzaFRva2VuO1xuXG4gICAgY29va2llLnNhdmUoXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gICAgLy8gY29va2llLnNhdmUoXCJyZWZyZXNoVG9rZW5cIiwgcmVmcmVzaFRva2VuLCB7XG4gICAgLy8gICBwYXRoOiBcIi9cIixcbiAgICAvLyB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvdXNlcnMvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXV0aC9sb2dpblwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5kYXRhLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIngtYWNjZXNzLXRva2VuXCJdID1cbiAgICAgIHJlc3VsdC5kYXRhLmRhdGEuYWNjZXNzVG9rZW47XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuO1xuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHJlc3VsdC5kYXRhLmRhdGEucmVmcmVzaFRva2VuO1xuXG4gICAgY29va2llLnNhdmUoXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbiwge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgfSk7XG4gICAgY29va2llLnNhdmUoXCJyZWZyZXNoVG9rZW5cIiwgcmVmcmVzaFRva2VuLCB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhjb29raWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXV0aC9sb2dvdXRcIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwieC1yZWZyZXNoLXRva2VuXCI6IGRhdGEsXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgIH0pO1xuICAgIGNvb2tpZS5yZW1vdmUoXCJhY2Nlc3NUb2tlblwiKTtcbiAgICBjb29raWUucmVtb3ZlKFwicmVmcmVzaFRva2VuXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2F1dGgvdXNlcnNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxuICAgIH0pO1xuICAgIGFsZXJ0KFwi7ZqM7JuQ6rCA7J6F7JeQIOyEseqzte2VmOyFqOyKteuLiOuLpC5cIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwibmFtZXMiOlsiYmFja1VybCIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiSGVhZCIsIndyYXBwZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3aXRoUmVkdXgiLCJIWURSQVRFIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwicHJvZHVjZSIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsInNpbmdsZVBvc3QiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQT3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsInBvc3RSZWR1Y2VyIiwiZHJhZnQiLCJjb25jYXQiLCJkYXRhIiwibGVuZ3RoIiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsImZpbmQiLCJpZCIsInBvc3RJZCIsImxpa2VkVXNlcnMiLCJwdXNoIiwiX2lkIiwidXNlcklkIiwidW5saWtlUG9zdEVycm9yIiwidW5zaGlmdCIsImNvbW1lbnRzIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJEb25lIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRmFpbHVyZSIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRmFpbHVyZSIsIm1lIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ1c2VyaW5mbyIsInNpZ25VcERhdGEiLCJsb2dJbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInVzZXJJbmZvIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsInJlbW92ZUZvbGxvd2VyRG9uZSIsImZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJmb2xsb3dpbmdzIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93ZXJzRG9uZSIsIm1lc3NhZ2UiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJuaWNrbmFtZSIsInBvc3RzIiwiYWxsIiwiZm9yayIsImF4aW9zIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImNvb2tpZSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImxvYWQiLCJoZWFkZXJzIiwiY29tbW9uIiwicm9vdFNhZ2EiLCJjYWxsIiwicHV0IiwidGFrZUxhdGVzdCIsInRocm90dGxlIiwiYWRkQ29tbWVudEFQSSIsImNvbW1lbnQiLCJhZGRDb21tZW50IiwicmVzdWx0IiwiZXJyIiwicmVzcG9uc2UiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJnZXQiLCJsb2FkUG9zdHMiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsInNhdmUiLCJwYXRoIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJyZW1vdmUiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJhbGVydCIsIndhdGNoU2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJzdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9
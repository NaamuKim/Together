"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/AppLayout.js + 4 modules
var AppLayout = __webpack_require__(6109);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./hooks/useInput.js


const useInput = (initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(initialValue);
  const handler = (0,external_react_.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

/* harmony default export */ const hooks_useInput = (useInput);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./reducers/post.js
var reducers_post = __webpack_require__(5087);
// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__(5542);
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
;// CONCATENATED MODULE: ./components/PostForm.js









const PostForm = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    imagePaths,
    addPostDone
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const [text, onChangeText, setText] = hooks_useInput("");
  (0,external_react_.useEffect)(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  const onSubmit = (0,external_react_.useCallback)(() => {
    if (!text || !text.trim()) {
      return alert("게시글을 작성하세요.");
    }

    return dispatch({
      type: reducers_post/* ADD_POST_REQUEST */.z9,
      data: {
        images: imagePaths,
        content: text
      }
    });
  }, [text, imagePaths]);
  const imageInput = (0,external_react_.useRef)();
  const onClickImageUpload = (0,external_react_.useCallback)(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = (0,external_react_.useCallback)(e => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("img", f);
    });
    dispatch({
      type: reducers_post/* UPLOAD_IMAGES_REQUEST */.QA,
      data: imageFormData
    });
  }, []);
  const onRemoveImage = (0,external_react_.useCallback)(index => () => {
    dispatch({
      type: reducers_post/* REMOVE_IMAGE */.Po,
      data: index
    });
  }, []);
  return (0,jsx_runtime_.jsxs)(external_antd_.Form, {
    style: {
      margin: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [jsx_runtime_.jsx(external_antd_.Input.TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC624\uB298 \uC720\uC800\uB2D8\uC774 \uBB34\uC2A8 \uC77C\uC774 \uC788\uC73C\uC168\uB294 \uC9C0 \uAD81\uAE08\uD569\uB2C8\uB2E4"
    }), (0,jsx_runtime_.jsxs)("div", {
      children: [jsx_runtime_.jsx("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }), jsx_runtime_.jsx(external_antd_.Button, {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }), jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        style: {
          float: "right"
        },
        htmlType: "submit",
        children: "Together"
      })]
    }), jsx_runtime_.jsx("div", {
      children: imagePaths.map((v, i) => (0,jsx_runtime_.jsxs)("div", {
        style: {
          display: "inline-block"
        },
        children: [jsx_runtime_.jsx("img", {
          src: `${config/* backUrl */.T}/upload/img/${v}`,
          style: {
            width: "200px"
          },
          alt: v
        }), jsx_runtime_.jsx("div", {
          children: jsx_runtime_.jsx(external_antd_.Button, {
            children: "\uC81C\uAC70"
          })
        })]
      }, v))
    })]
  });
};

/* harmony default export */ const components_PostForm = (PostForm);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
;// CONCATENATED MODULE: ./components/imagesZoom/styles.js


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const Overlay = base_default()("div",  true ? {
  target: "evbuce35"
} : 0)( true ? {
  name: "ghj037",
  styles: "position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0"
} : 0);
const Header = base_default()("header",  true ? {
  target: "evbuce34"
} : 0)( true ? {
  name: "io3y5b",
  styles: "height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}"
} : 0);
const CloseBtn = /*#__PURE__*/base_default()(icons_.CloseOutlined,  true ? {
  target: "evbuce33"
} : 0)( true ? {
  name: "1wb9kyx",
  styles: "position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer"
} : 0);
const SlickWrapper = base_default()("div",  true ? {
  target: "evbuce32"
} : 0)( true ? {
  name: "vmj6ym",
  styles: "height:calc(100% - 44px);background:#898989"
} : 0);
const ImgWrapper = base_default()("div",  true ? {
  target: "evbuce31"
} : 0)( true ? {
  name: "ce34pe",
  styles: "padding:32px;text-align:center;&img{margin:0 auto;max-height:750px;}"
} : 0);
const Indicator = base_default()("div",  true ? {
  target: "evbuce30"
} : 0)( true ? {
  name: "idgjb3",
  styles: "text-align:center;&>div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"
} : 0);
;// CONCATENATED MODULE: ./components/imagesZoom/index.js







const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  return (0,jsx_runtime_.jsxs)(Overlay, {
    children: [jsx_runtime_.jsx(GlobalStyle, {}), (0,jsx_runtime_.jsxs)(Header, {
      children: [jsx_runtime_.jsx("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }), jsx_runtime_.jsx(CloseBtn, {
        onClick: onClose,
        children: "\u2716"
      })]
    }), jsx_runtime_.jsx(SlickWrapper, {
      children: (0,jsx_runtime_.jsxs)("div", {
        children: [jsx_runtime_.jsx((external_react_slick_default()), {
          initialSlide: 0,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => jsx_runtime_.jsx(ImgWrapper, {
            children: jsx_runtime_.jsx("img", {
              src: `${config/* backUrl */.T}/upload/img/${v}`,
              alt: v
            })
          }, v))
        }), jsx_runtime_.jsx(Indicator, {
          children: (0,jsx_runtime_.jsxs)("div", {
            children: [currentSlide + 1, " / ", images.length]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const imagesZoom = (ImagesZoom);
;// CONCATENATED MODULE: ./components/PostImages.js








const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = (0,external_react_.useState)(false);
  const onZoom = (0,external_react_.useCallback)(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = (0,external_react_.useCallback)(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [jsx_runtime_.jsx("img", {
        role: "presentation",
        src: `${config/* backUrl */.T}/upload/img/${images[0]}`,
        alt: images[0],
        onClick: onZoom
      }), showImagesZoom && jsx_runtime_.jsx(imagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  }

  if (images.length === 2) {
    return (0,jsx_runtime_.jsxs)("div", {
      children: [jsx_runtime_.jsx("img", {
        role: "presentation",
        width: "50%",
        src: `${config/* backUrl */.T}/upload/img/${images[0]}`,
        alt: images[0],
        onClick: onZoom
      }), jsx_runtime_.jsx("img", {
        role: "presentation",
        width: "50%",
        src: `${config/* backUrl */.T}/upload/img/${images[1]}`,
        alt: images[1],
        onClick: onZoom
      })]
    });
  }

  return (0,jsx_runtime_.jsxs)("div", {
    children: [jsx_runtime_.jsx("img", {
      role: "presentation",
      width: "50%",
      src: "data:image/jpeg;base64,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",
      alt: images[0],
      onClick: onZoom
    }), (0,jsx_runtime_.jsxs)("div", {
      role: "presentation",
      style: {
        display: "inline-block",
        width: "50%",
        textAlign: "center",
        verticalAlign: "middle"
      },
      onClick: onZoom,
      children: [jsx_runtime_.jsx(icons_.PlusOutlined, {
        onClick: onZoom
      }), jsx_runtime_.jsx("br", {}), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
    }), showImagesZoom && jsx_runtime_.jsx(imagesZoom, {
      images: images,
      onClose: onClose
    })]
  });
};

/* harmony default export */ const components_PostImages = (PostImages);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: external "moment/locale/ko"
const ko_namespaceObject = require("moment/locale/ko");
;// CONCATENATED MODULE: ./components/CommentForm.js









const CommentForm = ({
  post
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    id
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    addCommentDone,
    addCommentLoading
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const [commentText, onChangeCommentText, setCommentText] = hooks_useInput("");
  (0,external_react_.useEffect)(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);
  const onSubmitComment = (0,external_react_.useCallback)(() => {
    console.log(post.id, commentText);
    dispatch({
      type: reducers_post/* ADD_COMMENT_REQUEST */.Ot,
      data: {
        comment: commentText,
        postId: post.id
      }
    });
  }, [commentText]);
  return jsx_runtime_.jsx(external_antd_.Form, {
    onFinish: onSubmitComment,
    children: (0,jsx_runtime_.jsxs)(external_antd_.Form.Item, {
      children: [jsx_runtime_.jsx(external_antd_.Input.TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }), jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        children: "\u2714"
      })]
    })
  });
};

/* harmony default export */ const components_CommentForm = (CommentForm);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__(8226);
;// CONCATENATED MODULE: ./components/FollowButton.js







const FollowButton = ({
  post
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me,
    followLoading,
    unfollowLoading
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : me.followings.find(v => v._id === post.writer.id);
  const onClickButton = (0,external_react_.useCallback)(() => {
    if (isFollowing) {
      dispatch({
        type: user/* UNFOLLOW_REQUEST */.Bk,
        data: post.writer.id
      });
    } else {
      dispatch({
        type: user/* FOLLOW_REQUEST */.U_,
        data: post.writer.id
      });
    }
  }, [isFollowing]);

  if (post.writer.id === me.id) {
    return null;
  }

  return jsx_runtime_.jsx(external_antd_.Button, {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    children: isFollowing ? "언팔로우" : "팔로우"
  });
};

FollowButton.protoTypes = {
  post: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const components_FollowButton = (FollowButton);
;// CONCATENATED MODULE: ./components/PostCardContent.js
 // eslint-disable-next-line import/no-unresolved




const PostCardContent = ({
  postData
}) => jsx_runtime_.jsx("div", {
  children: postData.split(/(#[^\s#]+)/g).map((v, i) => {
    if (v.match(/(#[^\s#]+)/)) {
      return (
        /* 사용자 의도가 들어가는 key => key = {i} 로 사용하겠음 */
        // eslint-disable-next-line react/no-array-index-key
        jsx_runtime_.jsx(next_link.default, {
          href: `/hashtag/${v.slice(1)}`,
          children: jsx_runtime_.jsx("a", {
            children: v
          })
        }, i)
      );
    }

    return v;
  })
});

/* harmony default export */ const components_PostCardContent = (PostCardContent);
;// CONCATENATED MODULE: ./components/PostCard.js


function PostCard_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

















const StyledDiv = base_default()("div",  true ? {
  target: "ep1fbea0"
} : 0)( true ? {
  name: "1azpx8r",
  styles: "margin-bottom:20px"
} : 0);

external_moment_default().locale("ko");

const PostCard = ({
  post
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    removePostLoading
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const id = (0,external_react_redux_.useSelector)(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = (0,external_react_.useState)(false);
  const onLike = (0,external_react_.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    return dispatch({
      type: reducers_post/* LIKE_POST_REQUEST */.xD,
      data: post.id
    });
  }, [id]);
  const onUnlike = (0,external_react_.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    dispatch({
      type: reducers_post/* UNLIKE_POST_REQUEST */.VT,
      data: post.id
    });
  }, [id]);
  const onToggleComment = (0,external_react_.useCallback)(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const onRemovePost = (0,external_react_.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    dispatch({
      type: reducers_post/* REMOVE_POST_REQUEST */.HU,
      data: post.id
    });
  }, [id]);
  const liked = post.likedUsers.find(v => v._id === id);
  return (0,jsx_runtime_.jsxs)(StyledDiv, {
    children: [(0,jsx_runtime_.jsxs)(external_antd_.Card, {
      cover: post.images[0] && jsx_runtime_.jsx(components_PostImages, {
        images: post.images
      }),
      actions: [jsx_runtime_.jsx(icons_.RetweetOutlined, {}, "retweet"), liked ? jsx_runtime_.jsx(icons_.HeartTwoTone, {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart") : jsx_runtime_.jsx(icons_.HeartOutlined, {
        onClick: onLike
      }, "heart"), commentFormOpened ? jsx_runtime_.jsx(icons_.MessageTwoTone, {
        twoToneColor: "#eb2f96",
        onClick: onToggleComment
      }, "comment") : jsx_runtime_.jsx(icons_.MessageOutlined, {
        onClick: onToggleComment
      }, "comment"), jsx_runtime_.jsx(external_antd_.Popover, {
        content: jsx_runtime_.jsx(external_antd_.Button.Group, {
          children: id && post.writer.id === id ? (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [jsx_runtime_.jsx(external_antd_.Button, {
              children: "\uC218\uC815"
            }), jsx_runtime_.jsx(external_antd_.Button, {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            })]
          }) : jsx_runtime_.jsx(external_antd_.Button, {
            children: "\uC2E0\uACE0"
          })
        }),
        children: jsx_runtime_.jsx(icons_.EllipsisOutlined, {})
      }, "more")],
      extra: id && jsx_runtime_.jsx(components_FollowButton, {
        post: post
      }),
      children: [(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [jsx_runtime_.jsx("div", {
          style: {
            float: "right"
          },
          children: external_moment_default()(post.createdAt).fromNow()
        }), jsx_runtime_.jsx(external_antd_.Card.Meta, {
          avatar: jsx_runtime_.jsx(next_link.default, {
            href: `/user/${post.writer.id}`,
            children: jsx_runtime_.jsx("a", {
              children: jsx_runtime_.jsx(external_antd_.Avatar, {
                children: post.writer.nickname[0]
              })
            })
          }),
          title: post.writer.nickname,
          description: jsx_runtime_.jsx(components_PostCardContent, {
            postData: post.content
          })
        })]
      }), jsx_runtime_.jsx(external_antd_.Image, {})]
    }), commentFormOpened && (0,jsx_runtime_.jsxs)("div", {
      children: [jsx_runtime_.jsx(components_CommentForm, {
        post: post
      }), jsx_runtime_.jsx(external_antd_.List, {
        header: `${post.comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.comments,
        renderItem: item => jsx_runtime_.jsx("li", {
          children: jsx_runtime_.jsx(external_antd_.Comment, {
            author: item.writer.nickname,
            avatar: jsx_runtime_.jsx(external_antd_.Avatar, {
              children: item.writer.nickname
            }),
            content: item.comment
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const components_PostCard = (PostCard);
// EXTERNAL MODULE: ./store/configureStore.js + 4 modules
var configureStore = __webpack_require__(5442);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(8883);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
;// CONCATENATED MODULE: ./pages/index.js
















const Home = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading
  } = (0,external_react_redux_.useSelector)(state => state.post); // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //     data: cookie.load("accessToken"),
  //   });
  // }, []);

  (0,external_react_.useEffect)(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: reducers_post/* LOAD_POSTS_REQUEST */.aO,
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
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx((head_default()), {
      children: jsx_runtime_.jsx("title", {
        children: "Together"
      })
    }), (0,jsx_runtime_.jsxs)(AppLayout/* default */.Z, {
      children: [me && jsx_runtime_.jsx(components_PostForm, {}), mainPosts.map(post => jsx_runtime_.jsx(components_PostCard, {
        post: post
      }, post.id))]
    })]
  });
};

const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps(async context => {
  const parsedCookie = context.req ? external_cookie_default().parse(context.req.headers.cookie || "") : "";

  if (context.req && parsedCookie) {
    if (parsedCookie["accessToken"]) {
      context.store.dispatch({
        type: user/* LOAD_MY_INFO_REQUEST */.qq,
        data: parsedCookie["accessToken"]
      });
    }
  }

  context.store.dispatch({
    type: reducers_post/* LOAD_POSTS_REQUEST */.aO
  });
  context.store.dispatch(external_redux_saga_.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 7381:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 4554:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 4617:
/***/ ((module) => {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 953:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8883:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 2596:
/***/ ((module) => {

module.exports = require("emotion-reset");

/***/ }),

/***/ 4584:
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5287:
/***/ ((module) => {

module.exports = require("react-cookies");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 5176:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 7765:
/***/ ((module) => {

module.exports = require("redux-saga");

/***/ }),

/***/ 5060:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,226,103,442], () => (__webpack_exec__(6886)));
module.exports = __webpack_exports__;

})();
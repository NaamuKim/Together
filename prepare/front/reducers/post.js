import produce from "immer";

export const initialState = {
  mainPosts: [],
  imagePaths: [],
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

const postReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });
};

export default postReducer;

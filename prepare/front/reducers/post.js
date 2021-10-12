import produce from "immer";

export const initialState = {
  mainPosts: [],
  imagePaths: [],
};

const postReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });
};

export default postReducer;

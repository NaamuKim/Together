import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./post";
import userSaga from "./user";
import { backUrl } from "../config/config";
import cookie from "react-cookies";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;
if (cookie.load("accessToken")) {
  console.log("HI");
  axios.defaults.headers.common["x-access-token"] = cookie.load("accessToken");
}

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}

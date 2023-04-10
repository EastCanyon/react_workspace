import axios from "axios";
import { boardReducers } from "../reducers/board_reducer";
import { baseUrl } from "../../apiurl";

function getBoardList(currentPage) {
  return async (dispatch) => {
    // axios.get()으로 서버에서 데이터를 받으면 data라는 변수에 넣기
    const data = await axios
      .get(`${baseUrl}/board/list/${currentPage}`)
      .then((response) => response.data);
    console.log(data);
    dispatch(boardReducers.getBoardList({ data }));
  };
}

function getBoardDetail(num, config) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/view/${num}`, config)
      .then((response) => response.data);
    dispatch(boardReducers.getBoardDetail({ data }));
  };
}

function getBoardDownload(upload, config) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/contentdownload/${upload}`, config, {
        responseType: "blob",
      })
      .then((response) => response.data);
    //dispatch(boardActions.getBoardDownload(data));

    return data;
  };
}

function getBoardDelete(num, config) {
  return async (dispatch) => {
    await axios
      .delete(`${baseUrl}/board/delete/${num}`, config)
      .then((response) => response.data);
  };
}

function getBoardWrite(formData, config) {
  return async () => {
    await axios
      .post(`${baseUrl}/board/write`, formData, config)
      .then((response) => response.data);
  };
}

function getBoardUpdate(formData, config) {
  return async () => {
    await axios
      .put(`${baseUrl}/board/update`, formData, config)
      .then((response) => response.data);
  };
}

export const boardActions = {
  getBoardList,
  getBoardDetail,
  getBoardDownload,
  getBoardDelete,
  getBoardWrite,
  getBoardUpdate,
};

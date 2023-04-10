import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  boardList: [],
  pv: { currentPage: 1 },
  boardDetail: {},
  boardFile: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,

  reducers: {
    getBoardList(state, action) {
      state.boardList = action.payload.data.aList; //back의 Service에서 받아온 aList
      state.pv = action.payload.data.pv; //back의 this.pdto로 받아온 pv
    },

    getBoardDetail(state, action) {
      state.boardDetail = action.payload.data;
    },

    getBoadDownload(state, action) {
      state.boardFile = action.payload.data;
    },
  },
});

//아래 변수로 함수명 자동완성 가능
export const boardReducers = boardSlice.actions;
export default boardSlice.reducer;

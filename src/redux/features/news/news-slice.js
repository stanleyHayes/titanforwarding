import {createSlice} from "@reduxjs/toolkit";
import {news} from "./news.js";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: {
            latest: [...news.latest],
            popular: [...news.popular],
            featured: [...news.featured],
        },
        loading: false,
        error: null
    },
    reducers: {}
});

const {reducer} = newsSlice;

export const selectNews = state => state.news;

export default reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {  urlRollingStone } from '../../config'

const initialState = {
    categories: [],
    loading: false,
    error: null,
}

export const fetchPostCategories = createAsyncThunk("categories/fetch", async ( query = '' , /* id */ ) => {
    //console.trace()
    const response = await axios.get(urlRollingStone + "categories" + "?per_page=100")
    //console.log(response.data)
    return response.data
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostCategories.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPostCategories.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload;
            })
            .addCase(fetchPostCategories.rejected, (state, action) => {
                state.loading = false
            });
    }
})

const { reducer , actions } = categoriesSlice;
export default reducer
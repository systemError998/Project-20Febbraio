import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl , urlRollingStone , fields } from '../../config'

const initialState = {
    posts: [],
    loading: false,
    error: null,
}

export const fetchPosts = createAsyncThunk("posts/fetch", async ( query = '' ) => {
    //console.trace()
    const response = await axios.get(urlRollingStone + "posts" + fields + "?_embed")
    console.log(response.data)
    return response.data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false
            });
    }
})

const { reducer , actions } = postsSlice;
export default reducer
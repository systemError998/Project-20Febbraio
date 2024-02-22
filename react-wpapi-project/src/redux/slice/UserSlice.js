import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl , urlRollingStone , fields } from '../../config'

const initialState = {
    users: [],
    loading: false,
    error: null,
}

export const fetchUsers = createAsyncThunk("users/fetch", async ( query = '' ) => {
    //console.trace()
    const response = await axios.get(urlRollingStone + "users" + "?per_page=100")
    console.log(response.data)
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
            });
    }
})

const { reducer , actions } = usersSlice;
export default reducer
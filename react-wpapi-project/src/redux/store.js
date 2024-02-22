import {configureStore} from '@reduxjs/toolkit'
import postsReducer from './slice/PostSlice'
import categoriesReducer from './slice/PostCategories'
import usersReducer from './slice/UserSlice'

export const store = configureStore({
    reducer : {
        posts: postsReducer,
        categories: categoriesReducer,
        users: usersReducer,
    }
})
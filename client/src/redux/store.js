import {configureStore} from '@reduxjs/toolkit'
import catSlice from './slices/catSlice'
import userSlice from './slices/userSlice'

export default configureStore({reducer: {
    catSlice,
    userSlice
}})



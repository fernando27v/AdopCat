import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';



const slice = createSlice({
    name: 'slice',
    initialState:{
    loggedUser: {},
    cats: [],
    isLoading: false,
    rejectedUser: {}
    },
    reducers:{

    },
    extraReducers: (builder)=> {

    }




})


const {reducer,actions} = slice;
//export {} = actions;
export default reducer

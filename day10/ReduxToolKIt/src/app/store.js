import {configureStore} from "@reduxjs/toolkit"
import  todoReducer  from "../features/todo/todoSlice"

export const store   = configureStore({

    //reducer banaya hai to baataobhi to store ko
    reducer: todoReducer,
    
})
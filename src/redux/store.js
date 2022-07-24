import { configureStore } from "@reduxjs/toolkit";
import { Women } from "./women";

const store = configureStore({
    reducer:{
        Women,
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import { Women } from "./women";
import { Men } from "./men";

const store = configureStore({
    reducer:{
        Women,
        Men,
    }
})

export default store
import { createSlice } from '@reduxjs/toolkit'


export const tokenSlice = createSlice({
    name: 'token',
    initialState: "",
    reducers: {
        display: (state) => {

            const token = localStorage.getItem("accessToken");
            console.log("Token from localStorage:", token);
            //  state= localStorage.getItem("accessToken") || ""
             return token || ""
        },

    },
})


export const { display } = tokenSlice.actions

export default tokenSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: "",
    email: "",
    imageUrl: ""
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.imageUrl = action.payload.imageUrl;
        },
        setSignOut: (state) => {
            state.username = null;
            state.email = null;
            state.imageUrl = null;
        }
    }
})

export const selectUsername = (state) => state.user.username
export const selectEmail = (state) => state.user.email
export const selectImageUrl = (state) => state.user.imageUrl
export const { setSignIn, setSignOut } = userSlice.actions
export default userSlice.reducer
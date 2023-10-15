import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Nguyễn Thị Huyền",
        age: "20",
        about: "Huyền óc tó",
        avaUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/347251545_994758324871623_5445790195550295858_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SpZZ_9Lh7acAX_zGaxj&_nc_ht=scontent.fdad3-1.fna&_nc_e2o=f&oh=00_AfA3uT0f2ZjEr825AzQ1hFBbhB7OwW8JweH7k8-0Wz8Irg&oe=65303687",
        themeColor: "#ff9051",
        pending: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateError: (state) => {
            state.pending = false;
            state.error = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }

    }
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;

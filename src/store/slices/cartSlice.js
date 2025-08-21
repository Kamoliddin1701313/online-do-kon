import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false, // dastlabki qiymat false

  token:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("auth"))?.token
      : null,
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("auth"))?.user
      : null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const authData = {
        access: action.payload.access,
        refresh: action.payload.refresh,
        user: action.payload.user,
      };

      state.token = authData.access;
      state.user = authData.user;

      if (typeof window !== "undefined") {
        localStorage.setItem("auth", JSON.stringify(authData));
      }
    },

    clearToken: (state) => {
      state.token = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth");
      }
    },
  },
});

export const { toggleCart, setToken, clearToken } = cartSlice.actions;
export default cartSlice.reducer;

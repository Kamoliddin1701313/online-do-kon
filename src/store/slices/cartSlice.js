// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isOpen: false, // dastlabki qiymat false

//   token:
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("auth"))?.token
//       : null,
//   user:
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("auth"))?.user
//       : null,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setToken: (state, action) => {
//       const authData = {
//         access: action.payload.access,
//         refresh: action.payload.refresh,
//         user: action.payload.user,
//       };

//       state.token = authData.access;
//       state.user = authData.user;

//       if (typeof window !== "undefined") {
//         localStorage.setItem("auth", JSON.stringify(authData));
//       }
//     },

//     clearToken: (state) => {
//       state.token = null;
//       if (typeof window !== "undefined") {
//         localStorage.removeItem("auth");
//       }
//     },
//   },
// });

// export const { toggleCart, setToken, clearToken } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

let authData = null;
if (typeof window !== "undefined") {
  try {
    authData = JSON.parse(localStorage.getItem("auth"));
  } catch {
    authData = null;
  }
}

const initialState = {
  isOpen: false,
  isOpenBox: false,
  token: authData?.access || null, // 🟢 bu yerda access ishlatamiz
  user: authData?.user || null,
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
      state.user = null; // 🟢 user ham tozalansin
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth");
      }
    },

    toggleSidebar: (state, action) => {
      state.isOpenBox = !state.isOpenBox;
    },
  },
});

export const { setToken, clearToken, toggleSidebar } = cartSlice.actions;
export default cartSlice.reducer;

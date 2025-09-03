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

// 🔐 LocalStorage'dan auth ma'lumotini olish
let authData = null;
if (typeof window !== "undefined") {
  try {
    authData = JSON.parse(localStorage.getItem("auth"));
  } catch (e) {
    console.error("Auth parse error:", e);
    authData = null;
  }
}

const initialState = {
  isOpenBox: false, // sidebar yopiq bo'lsin default
  token: authData?.access || null,
  user: authData?.user || null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Token saqlash
    setToken: (state, action) => {
      const { access, refresh, user } = action.payload;

      state.token = access;
      state.user = user;

      if (typeof window !== "undefined") {
        localStorage.setItem("auth", JSON.stringify({ access, refresh, user }));
      }
    },

    // ✅ Token tozalash
    clearToken: (state) => {
      state.token = null;
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth");
      }
    },

    // ✅ Sidebar toggle
    toggleSidebar: (state) => {
      state.isOpenBox = !state.isOpenBox;
    },
  },
});

export const { setToken, clearToken, toggleSidebar } = cartSlice.actions;
export default cartSlice.reducer;

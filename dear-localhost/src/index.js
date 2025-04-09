import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/userSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//store will be available in whole project
reportWebVitals();

//proje calistiginda userlari cekmek istiyorum ama React hook'ları (useDispatch, useSelector, useState, useEffect vs.) sadece bir component içinde çalışır.
//Bu nedenle dahil edemedigim icin store uzerinden cektim

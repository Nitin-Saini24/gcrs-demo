import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <ToastContainer />
    <Provider store={store}>
      <App />
    </Provider>
  </>
  // </StrictMode>
);

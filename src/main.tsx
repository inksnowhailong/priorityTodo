import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 定义当前项目的路由模式
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { App as AppAntd } from "antd";
import App from "./App";
// 定义当前项目的路由模式
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import dayjs from "dayjs";

import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <AppAntd>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AppAntd>
    </ConfigProvider>
  </Router>
);

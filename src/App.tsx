import React from "react";

import { Layout } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

const { Content, Footer, Sider } = Layout;
import logo from "./assets/logo.png";

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ backgroundColor: "#d5cbbf" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            style={{ height: "100px", width: "100px" }}
            alt="logo"
          />
        </div>
      </Sider>
      <Layout>
        <Content style={{ backgroundColor: "#c3fcf2" }}>
          <RouterProvider router={router} />
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "#649b92" }}>
          Pelycano Music
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

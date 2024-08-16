import React from "react";

import { Layout } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ backgroundColor: "#5d576b" }}></Sider>
      <Layout>
        <Content style={{ backgroundColor: "#F1DEDE" }}>
          <RouterProvider router={router} />
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "#6cd4ff" }}>
          Pelycano Music
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

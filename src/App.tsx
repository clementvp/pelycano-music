import { Layout } from "antd";
import logo from "./assets/logo.png";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

const { Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Sider style={{ backgroundColor: "#d5cbbf" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            style={{ height: "150px", width: "150px" }}
            alt="logo"
          />
        </div>
      </Sider>
      <Layout>
        <Content
          style={{
            height: "calc(100% - 64px)",
            overflow: "auto",
            backgroundColor: "#c3fcf2",
          }}
        >
          <RouterProvider router={router} />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            height: "64px",
            backgroundColor: "#649b92",
          }}
        >
          Pelican Music ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

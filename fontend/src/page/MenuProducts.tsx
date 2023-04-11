import React from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import Product from "./Product";
import { Route } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const menuList = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/products",
    name: "Product",
  },
  {
    id: 3,
    path: "/products/mercedes",
    name: "Mercedes",
  },
  {
    id: 4,
    path: "/products/BMW",
    name: "BMW",
  },
  {
    id: 5,
    path: "/products/lamborghini",
    name: "Lamborghini",
  },
];


const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key={1}>
              <Link to={"/"}>Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key={2}>
              <Link to={"/products"}>Sản Phẩm</Link>
            </Menu.Item>

            <Menu.Item key={3}>
              <Link to={"/products/mercedes"}>Mercedes</Link>
            </Menu.Item>
            <Menu.Item key={4}>
              <Link to={"/products/BMW"}>BMW</Link>
            </Menu.Item>
            <Menu.Item key={5}>
              <Link to={"/products/lamborghini"}>Lamborghini</Link>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

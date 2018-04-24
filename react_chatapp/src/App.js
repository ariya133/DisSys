import React, { Component } from "react";
import "./App.css";
import { Layout, Menu, Icon, Input, List, Avatar } from "antd";
const { Content, Sider, Header } = Layout;

const data = [
  {
    title: "User 1"
  },
  {
    title: "User 2"
  }
];

class App extends Component {
  render() {
    return (
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Header
          style={{
            background: "#fff",
            position: "fixed",
            paddingRight: "25px",
            width: "100%",
            borderBottom: "1px solid rgba(0, 0, 0, .10)"
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "480"
            }}
          >
            Messenger
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "500",
              left: "50%",
              position: "absolute",
              margin: 0,
              marginRight: "-50%"
            }}
          >
            Group 1
          </span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "500",
              float: "right"
            }}
          >
            Arros
            <a style={{ marginLeft: "10px" }} href="/">
              <Icon type="logout" />
            </a>
          </span>
        </Header>
        <Sider
          width={200}
          style={{
            margin: "64px 0 0 0 ",
            overflow: "auto",
            background: "#fff",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%" }}
          >
            <Menu.Item key="1">
              <Icon type="user" />
              <span>User 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              <span>Group 1</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              <span>User 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span>User 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            margin: "64px 200px 0 200px"
          }}
        >
          <Content style={{ background: "#fff", padding: "24px" }}>
            Hello World!
          </Content>
          <Input
            size="large"
            style={{ bottom: 0 }}
            placeholder="Type a message..."
          />
        </Layout>
        <Sider
          width={200}
          style={{
            margin: "64px 0 0 0 ",
            padding: "0 0 0 10px",
            overflow: "auto",
            background: "#fff",
            height: "100vh",
            position: "fixed",
            right: 0,
            borderLeft: "1px solid rgba(0, 0, 0, .1)"
          }}
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon="user" />}
                  title={<span href="/">{item.title}</span>}
                />
              </List.Item>
            )}
          />
        </Sider>
      </Layout>
    );
  }
}

export default App;

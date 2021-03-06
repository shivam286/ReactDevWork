import React from "react";
import { useState } from "react";
import { Layout,Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import "./SideNavMenu.css"
import HamBurgerMenu from "../../HamBurgerMenu";

  const {Header,Sider, Content} = Layout

  function SideNavMenu() {
    const [collapseNav, isCollapsed] = useState(false)
    const [containerToggle, isContainerToggled] = useState(false);

    function toggleSideMenu(){
      if (collapseNav === false){
        isCollapsed(true)
      }
      else {
        isCollapsed(false)
      }
    }
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapseNav}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <HamBurgerMenu toggle={toggleSideMenu}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggleSideMenu,
              })}
            </Header>
            </HamBurgerMenu>
            
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      );
    }



  export default SideNavMenu;
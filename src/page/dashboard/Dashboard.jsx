import React, { useState } from 'react';
import { HomeOutlined, DatabaseOutlined, FolderOutlined, BellOutlined, FormOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import PlotGraph from '../LiveSensorsData/plotGraph';
import Home from '../Home/home'; // Replace 'Home' with the actual component file path

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '2',
      icon: <DatabaseOutlined />,
      label: 'Live Sensors Data',
    },
    {
      key: '3',
      icon: <FormOutlined />,
      label: 'Alert',
    },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState('2'); // '2' is the default selected menu item

  const handleMenuSelect = (item) => {
    setSelectedMenuItem(item.key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <Home />; // Replace 'Home' with the actual component you want to render for 'Home' menu
      case '2':
        return <PlotGraph />;
      // Add cases for other menu items if you have corresponding components
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          padding: 0,
          background: "#009e47",
          position: 'sticky', // Make the sidebar sticky
          top: 0, // Stick it to the top of the viewport
          height: '100vh', // Set the height to take the full viewport height
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          onSelect={handleMenuSelect}
          style={{ background: '#009e47', color: "#ffffff" }}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#009e47",
            color: "#ffffff",
            position: 'sticky', // Make the sidebar sticky

          }}
        >
          <span style={{ fontSize: '20px', fontWeight: 'bold', paddingLeft: '20px' }}>
            {menuItems.find((item) => item.key === selectedMenuItem)?.label}
          </span>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'auto', // Add overflow property to allow the content to scroll
            height: 'calc(100vh - 64px - 48px)', // Calculate the content height to fit between header and footer
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '100%', // Set min-height to occupy the full height of the content area
              background: colorBgContainer,
            }}
          >
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

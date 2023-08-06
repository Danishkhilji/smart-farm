import React from 'react';
import { HomeOutlined, DatabaseOutlined, FolderOutlined, BellOutlined, FormOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;

const Sidebar = ({ selectedMenuItem, handleMenuSelect }) => {
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
      icon: <FolderOutlined />,
      label: 'Comparison',
    },
    {
      key: '4',
      icon: <FormOutlined />,
      label: 'Alert',
    },
  ];

  return (
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
        background: colorBgContainer,
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[selectedMenuItem]}
        onSelect={handleMenuSelect}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;

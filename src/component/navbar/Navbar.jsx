import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import '../../component/style.css'
import Sidebar from '../sidebar/Sidebar';
const { Header, Content, Footer } = Layout;


function Navbar() {
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' , background: 'rgba(186, 214, 165)'}}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 14px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          style={{background: 'rgba(186, 214, 165)', color:'black'}}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `${index + 1}`,
          }))}/>
      </Header>
      <Sidebar/>
      <Footer style={{ textAlign: 'center', background: 'rgba(186, 214, 165)' }}></Footer>
    </Layout>
  );
};

export default Navbar
import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom'
import Company from '../../pages/Company'
import Product from '../../pages/Product.jsx'
import Productentry from '../../pages/Productentry.jsx'
import Productlist from '../../pages/Productlist.jsx'
import Subcategory from '../../pages/Subcategory.jsx'
import UserForm from '../../pages/UserForm.jsx'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, theme, Menu } from 'antd';
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Home', '2', <DesktopOutlined />),
    getItem('Company', 'sub1', <UserOutlined />, [
        getItem('Company ', '3'),
        getItem('Company List', '4'),
        getItem(' Sub Category', '5'),
    ]),
    getItem('Product', 'sub2', <TeamOutlined />, [
        getItem('Product ', '6'),
        getItem('Product Entry', '7'),
        getItem('Product List', '8')]),
    getItem('User Registration', '9', <FileOutlined />),
];

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ background: 'rgba(123,456,234)', color: 'green' }}>
                <Menu theme="info" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Content>
                    <>
                        <Routes>
                            <Route path='/userform' element={<UserForm />} />
                            <Route path='/company' element={<Company />} />
                            <Route path='/product' element={<Product />} />
                            <Route path='/productentry' element={<Productentry />} />
                            <Route path='/productlist' element={<Productlist />} />
                            <Route path='/subcategory' element={<Subcategory />} />
                        </Routes>
                    </>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Sidebar
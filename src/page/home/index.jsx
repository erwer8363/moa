/**
 * Created by ever on 2019/11/6.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import {Breadcrumb, Icon, Layout, Menu} from 'antd'

const {SubMenu} = Menu
const {Header, Content, Sider} = Layout

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'mail'
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    onLogOut = () => {
        console.log('logout')
    }

    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Header className="header">
                    <Link className="logo" to='/'/>
                    <Menu className='mainMenu' onClick={this.handleClick} selectedKeys={[this.state.current]}
                          mode="horizontal">
                        <Menu.Item key="mail">
                            <Icon type="mail"/>
                            Navigation One
                        </Menu.Item>
                        <Menu.Item key="app">
                            <Icon type="appstore"/>
                            Navigation Two
                        </Menu.Item>
                        <SubMenu
                            title={<span className="submenu-title-wrapper"><Icon type="setting"/>Navigation Three - Submenu</span>}>
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu title={
                            <span className="submenu-title-wrapper">
                                <Icon type="user"/>欢迎,Admin</span>
                        }>
                            <Menu.Item key="state" onClick={this.onLogOut}>
                                <Icon type="poweroff"/>退出
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
                <Layout>
                    <Sider className='aside' width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0, backgroundColor: '#ccc'}}
                        >
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user"/>首页</span>}>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="laptop"/>商品</span>}>
                                <Menu.Item key="5">商品管理</Menu.Item>
                                <Menu.Item key="6">品类管理</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>订单</span>}>
                                <Menu.Item key="9">订单管理</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="notification"/>用户</span>}>
                                <Menu.Item key="10">用户管理</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
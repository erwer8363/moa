/**
 * Created by ever on 2019/11/8.
 */
import React, {Component} from 'react'
import './index.less'
import {Icon, Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'

const {SubMenu} = Menu
const {Header} = Layout

export default class NavTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'mail'
        }
    }

    handleClick = e => {
        console.log(e)
        this.setState({
            current: e.key,
        });
    }
    onLogOut = () => {
        console.log('tuichu')
    }

    render() {
        return (
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
        )
    }
}
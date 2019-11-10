/**
 * Created by ever on 2019/11/8.
 */
import React, {Component} from 'react'
import './index.less'
import {Icon, Layout, Menu} from 'antd'
import {Link, withRouter} from 'react-router-dom'

import {apiPostData} from 'api'
import MUtil from 'util/mm'

const {SubMenu} = Menu
const {Header} = Layout
const _mm = new MUtil()

class NavTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'mail',
            username: ''
        }
    }

    componentWillMount() {
        const {username} = _mm.getStorage('userinfo')
        this.setState({
            username
        })
    }

    handleClick = e => {
        console.log(e)
        this.setState({
            current: e.key,
        });
    }
    onLogOut = () => {
        apiPostData({
            url: '/user/logout.do'
        }).then(res => {
            if (res.status === 0) {
                this.props.history.push('/login')
                console.log('tuichu', res, this.props)
            }
        })
    }

    render() {
        const {username} = this.state
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
                            {
                                username ? <span><Icon type="user"/>欢迎,{username}</span> : <span>欢迎您,请登录</span>
                            }
                        </span>
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

const NavTopWithRouter = withRouter(NavTop)
export default NavTopWithRouter
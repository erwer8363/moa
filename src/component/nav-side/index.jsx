/**
 * Created by ever on 2019/11/8.
 */
import React, {Component} from 'react'

import {Icon, Layout, Menu} from 'antd'

const {SubMenu} = Menu
const {Sider} = Layout

export default class NavSide extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Sider className='aside' width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0, backgroundColor: '#ccc'}}
                >
                    <Menu.Item key="1" style={{marginTop: '0'}}>
                        <Icon type='user'/>
                        <span>首页</span>
                    </Menu.Item>
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
        )
    }
}
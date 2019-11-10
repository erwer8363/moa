/**
 * Created by ever on 2019/11/6.
 */
import React, {Component} from 'react'
import './index.less'
import {Button, Layout} from 'antd'
import NavTopWithRouter from "../../component/nav-top";
import NavSide from "../../component/nav-side";
import PageTitle from "../../component/page-title";

const {Content} = Layout

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout style={{height: '100%'}}>
                <NavTopWithRouter/>
                <Layout>
                    <NavSide/>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <PageTitle title='首页'>
                            <Button type="primary" style={{marginTop: '2px'}}>Primary</Button>
                        </PageTitle>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
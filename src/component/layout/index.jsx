/**
 * Created by ever on 2019/11/11.
 */
import React, {Component} from 'react'
import './index.less'
import {Layout} from 'antd'
import NavTopWithRender from '../nav-top'
import NavSide from '../nav-side'

const {Content} = Layout

class LayOut extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout style={{height: '100%'}}>
                <NavTopWithRender/>
                <Layout>
                    <NavSide/>
                    <Layout style={{padding: '12px'}}>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default LayOut
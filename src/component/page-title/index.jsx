/**
 * Created by ever on 2019/11/8.
 */
import React, {Component, Fragment} from 'react'
import {Col, Row} from 'antd'
import './index.less'

export default class PageTitle extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        document.title = `${this.props.title}-happyMMall`
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col span={24} className='content'>
                        <span className='title-style'>{this.props.title}</span>
                        {this.props.children}
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
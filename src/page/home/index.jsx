/**
 * Created by ever on 2019/11/6.
 */
import React, {Component, Fragment} from 'react'
import './index.less'
import {apiGetData} from 'api'
import {Link} from 'react-router-dom'
import PageTitle from "../../component/page-title";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userCount: '-',
            productCount: '-',
            orderCount: '-'
        }
    }

    componentDidMount() {
        this.loadCount()
    }

    loadCount = () => {
        apiGetData({
            url: '/manage/statistic/base_count.do'
        }).then(res => {
            const {status, data} = res
            this.setState({...data})
            console.log('获取到的数据是...', res)
        })
    }

    render() {
        const {userCount, productCount, orderCount} = this.state
        return (
            <Fragment>
                <PageTitle title='首页'/>
                <div className='count-content'>
                    <Link to='/user' className='count-item'>
                        <p className='item-num'>{userCount}</p>
                        <div className='item-title'>用户总数</div>
                    </Link>
                    <Link to='/product' className='count-item'>
                        <p className='item-num'>{productCount}</p>
                        <div className='item-title'>商品总数</div>
                    </Link>
                    <Link to='/order' className='count-item'>
                        <p className='item-num'>{orderCount}</p>
                        <div className='item-title'>订单总数</div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}
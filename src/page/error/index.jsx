/**
 * Created by ever on 2019/11/12.
 */
import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import PageTitle from '../../component/page-title'

class Error extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <PageTitle title='出错啦!'/>
                <p className='error'>
                    <span>找不到该路径</span>
                    <Link to='/'>点我返回首页</Link>
                </p>
            </Fragment>
        )
    }
}

export default Error
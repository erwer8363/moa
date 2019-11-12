/**
 * Created by ever on 2019/11/9.
 */
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.less'
import {Button, Checkbox, Form, Icon, Input, Layout, message} from 'antd'
import {apiPostData} from "api"
import MUtil from 'util/mm'

const {Content} = Layout

const _mm = new MUtil()

class Login extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        document.title = '登陆 - MMall'
    }

    onKeyUpHandler = (e) => {
        console.log(e.keyCode)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            console.log('the err is ', err, values)
            if (!err) {
                let params = {
                    url: '/manage/user/login.do',
                    data: {...values}
                }
                apiPostData(params).then(res => {
                    const {status, data, msg} = res
                    if (status === 0) {
                        _mm.setStorage('userinfo', data)
                        // localStorage.setItem('userinfo', JSON.stringify(data))
                        this.props.history.push('/')
                        console.log('接收到的数据是...', res)
                    } else {
                        message.error(msg)
                    }

                })
            }
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <Layout style={{height: '100%'}}>
                <Layout>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content style={{background: '#007fff', padding: 0, margin: 0, minHeight: 280}}>
                            <Form onSubmit={this.handleSubmit} onKeyUp={this.onKeyUpHandler} className='login-form'>
                                <h1 style={{textAlign: 'center', fontSize: '20px'}}>欢迎登陆-MALL管理系统</h1>
                                <Form.Item>
                                    {
                                        getFieldDecorator('username', {
                                            rules: [{required: true, message: '请填写用户名!'}]
                                        })(
                                            <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                   placeholder='请输入用户名' onPressEnter={this.onKeyUpHandler}
                                            />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('password', {
                                            rules: [{required: true, message: '请填写密码!'}]
                                        })(
                                            <Input prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                   type='password' placeholder='请输入密码'
                                                   onPressEnter={this.onKeyUpHandler}
                                            />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true
                                        })(<Checkbox>记住我</Checkbox>)
                                    }
                                    <a className='login-forget-name' href='javascript:;'>
                                        忘记密码
                                    </a>
                                    <Button type='primary' htmlType='submit' className='login-form-button'>
                                        登陆
                                    </Button>
                                    <a href='javascript:;'>现在注册</a>
                                </Form.Item>
                            </Form>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

const WrappedNormalLogin = Form.create({name: 'login-form'})(Login)

export default withRouter(WrappedNormalLogin)
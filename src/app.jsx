/**
 * Created by ever on 2019/11/3.
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Ever',
            age: 18
        }
    }

    handlerClick = () => {
        console.log('点击输出', this.state.age)
        this.setState(() => {
            return {
                age: this.state.age + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>I ma {this.state.name}</h1>
                <p>i am {this.state.age} years old</p>
                <button onClick={this.handlerClick}>加一岁</button>
            </div>
        )

    }
}

class Title extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Title>
                    <span>newTitle</span>
                    <a href="javascript:;">Link</a>
                </Title>
                <hr/>
                <Component/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
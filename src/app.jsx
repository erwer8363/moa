/**
 * Created by ever on 2019/11/3.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './indx.less'
import LayOut from "./component/layout";
import Home from "page/home";
import WrappedNormalLogin from 'page/login'
import PageError from 'page/error'

class App extends React.Component {
    render() {
        let LayoutRouter = (
            <LayOut>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route component={PageError}/>
                </Switch>
            </LayOut>
        )
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={WrappedNormalLogin}/>
                    <Route path='/' render={props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
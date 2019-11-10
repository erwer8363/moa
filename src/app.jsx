/**
 * Created by ever on 2019/11/3.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import './indx.less'
import WrappedNormalLogin from "page/login";
import Home from "page/home";


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={WrappedNormalLogin}/>
                    <Route path='/' render={props => (
                        <Switch>
                            <Route exact path='/' component={Home}/>
                        </Switch>
                    )}/>
                    <Redirect from='*' to='/login'/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
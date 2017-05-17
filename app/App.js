/**
 * Created by jack on 15/05/2017.
 */
/*eslint-disable*/
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Bundle from './lib/Bundle/Bundle'
import Greeter from './lib/Greeter/Greeter';
import Home from './lib/Home/Home'
import loadHello from 'bundle-loader?lazy!./lib/Hello/Hello'
import loadWorld from 'bundle-loader?lazy!./lib/Hello/World'

import './common.css'// 使用require导入c
/*eslint-enable*/
const Hello = () => (
    <Bundle load={loadHello}>
        {(Hello) => <Hello/>}
    </Bundle>
)

const World = () => (
    <Bundle load={loadWorld}>
        {(World) => <World/>}
    </Bundle>
)

class App extends Component {
    componentDidMount () {
        // preloads the rest
        loadHello(() => {})
        loadWorld(() => {})
    }
    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/greeter">Greeter</Link></li>
                        <li><Link to="/hello">Hello</Link></li>
                        <li><Link to="/world">World</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/hello" component={Hello}/>
                    <Route path="/world" component={World}/>
                    <Route path="/greeter" component={Greeter}/>

                </div>
            </Router>
        )
    }
}

export default App

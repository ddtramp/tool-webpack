/**
 * Created by jack on 13/05/2017.
 */
/*eslint-disable*/
import React, { Component } from 'react'
import style from './style.css'
/*eslint-enable*/
class Hello extends Component {
    constructor (props) {
        super(props)
        this.state = {
            d: 'hello'
        }
    }
    render () {
        return (
            <div>
                { this.state.d }
            </div>
        )
    }
}

export default Hello

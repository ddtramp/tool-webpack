// Greeter,js
/*eslint-disable*/
import React, { Component } from 'react'
import config from '../../config/config.json'
import moment from 'moment'
import styles from './Greeter.css' // 导入
/*eslint-enable*/

class Greeter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hello: 'hello world'
        }
    }
    render () {
        import('./d').then((d) => {
            console.log(d)
        }).catch((err) => {
            console.log('Failed to load moment', err)
        })

        return (
            <div className={styles.root}>
                <p>{ config.greetText }</p>
                <p>{ moment().format() }</p>
            </div>
        )
    }
}

export default Greeter

// Greeter,js
/*eslint-disable*/
import React, {Component} from 'react'
import config from './config.json'
import styles from './Greeter.css' // 导入
/*eslint-enable*/
class Greeter extends Component {
    render () {
        return (
            <div className={styles.root}>
                { config.greetText }
            </div>
        )
    }
}

export default Greeter

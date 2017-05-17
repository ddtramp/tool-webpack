import React, { Component } from 'react' // eslint-disable-line
/**
 * [react-router](https://reacttraining.cn/web/guides/code-splitting)
 * Usage
 * bundle-loader; import loadSomething from 'bundle-loader?lazy!./Something'
 * <Bundle load={loadSomething}>
 *     {(Comp) => Comp ? <Comp/> : <Loading/> )}
 *</Bundle>
 * import
 * <Bundle load={() => import('./something')}>
 *    {(mod) => ()}
 * </Bundle>
 */
import Loading from 'react-loading-animation' // Loading Component

class Bundle extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        }
    }
    componentWillMount () {
        this.load(this.props)
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    load (props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }
    render () {
        return this.props.children(this.state.mod ? this.state.mod : Loading)
    }
}

export default Bundle

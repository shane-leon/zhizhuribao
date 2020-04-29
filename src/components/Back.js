import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
class Back extends Component {
    goBack() {
        // console.log(this.props)
        this.props.history.go(-1)
    }
    render() {
        return (
            <div onClick={this.goBack.bind(this)}>返回</div>
        )
    }
}
export default withRouter(Back)

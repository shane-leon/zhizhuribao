import React, { Component } from 'react'
import { getDetail } from "../util/request"
export default class Details extends Component {
    constructor() {
        super()
        this.state = {
            datail: {}
        }
        this.con = React.createRef()
    }
    componentDidMount() {
        console.log(this.props)
        getDetail().then(res => {
            this.setState({
                datail: res.data
            })
        })
    }
    render() {
        if (this.state.detail.body) {
            // 富文本
            this.refs.current.innerHTML = this.state.detail.body
        }

        return (
            <div>
                {this.state.detail.css ? <link rel="stylesheet" href={this.state.detail.css[0]} /> : null}
                {/* details  详情页面*/}
                <div ref={this.con}></div>
            </div >
        )
    }
}

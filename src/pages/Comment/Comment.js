import React, { Component } from 'react'
import Back from "../../components/Back"
import querystring from "querystring"
import "./Comment.css"
import Group from "../Group/Group"
import { requsetLong, requsetStory } from "../../util/request"
export default class Comment extends Component {
    constructor() {
        super()
        this.state = {
            str: [],
            arr: [],
            isShow: false,
            isShow2: false
        }
    }
    componentDidMount() {
        console.log(this.props.location.search);
        console.log(typeof (this.props.location.search));
        var json = querystring.parse(this.props.location.search.slice(1))
        console.log(json.id)
        requsetLong(json.id).then(res => {
            // console.log(res);
            console.log(res.data.comments);
            this.setState({
                str: res.data.comments
            })
        })
        requsetStory(json.id).then(res => {
            // console.log(res);
            console.log(res.data.comments);
            this.setState({
                arr: res.data.comments
            })
        })
    }

    close() {
        this.state.isShow = !this.state.isShow
        this.setState({
            isShow: this.state.isShow
        })
    }
    close2() {
        this.state.isShow2 = !this.state.isShow2
        this.setState({
            isShow2: this.state.isShow2
        })
    }
    render() {
        const { arr, str, isShow, isShow2 } = this.state
        return (
            <div className="comment">
                {/* 评论页面 */}
                <header>
                    <div className="comment_top">
                        <Back></Back>
                        <p>{arr.length + str.length}条评论</p>
                    </div>
                    <div>
                        <p>评论</p>
                    </div>
                </header>
                <div className="short">
                    {/* 短评论 */}
                    <div className="short_top">
                        <h4>{str.length}条长评论</h4>
                        <p onClick={this.close.bind(this)}>⇈</p>
                    </div>
                    <div >
                        {/* 这里遍历短品论的 */}
                        {
                            isShow ? null : str.map(item => {
                                return <div key={item.id}>
                                    <Group info={item}></Group>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="long">
                    <div className="long_top">
                        {/* 长评论 */}
                        <h4>{arr.length}条短评论</h4>
                        <p onClick={this.close2.bind(this)}>⇈</p>
                    </div>
                    <div >
                        {/* 这里遍历长品论的 */}
                        {
                            isShow2 ? null : arr.map(item => {
                                return <div key={item.id}>
                                    <Group info={item}></Group>
                                </div>
                            })
                        }

                    </div>
                    {/* arr.map(item => {
                                    return <div key={item.id}>
                                        <Group info={item}></Group>
                                    </div>
                                }) */}
                </div>
            </div>
        )
    }
}

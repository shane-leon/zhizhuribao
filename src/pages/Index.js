import React, { Component } from 'react'
import "./index.css"
import Banner from "./Banner"
import Card from "./Card"
import { requestIndex } from "../util/request"
import { Link } from 'react-router-dom'
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            msg: "",
            arr: []
        }
    }
    componentDidMount() {
        requestIndex().then(res => {
            console.log(res.data.top_stories);
            // this.state.msg = res.data.stories
            this.setState({
                arr: res.data.top_stories
            })
        })

    }
    // toDetail() {
    //     this.props.history.push("/details")
    // }
    render() {
        const { arr } = this.state
        return (
            <div className="index">
                <header>
                    <div>
                        <span>三</span>
                        <span>首页</span>
                    </div>
                    <div>
                        <span>铃</span>
                        <span>点</span>
                    </div>
                </header>
                <div className="index_body">

                    <Banner></Banner>


                </div>
                <div className="index_body_two">
                    <h3>今日热闻</h3>
                    {
                        arr.map(item => {
                            return <Link key={item.id}><
                                Card info={item}
                                to={"/details/" + item.id}

                            ></Card></Link>
                        })
                    }
                </div>
            </div>
        )
    }
}

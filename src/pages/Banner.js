import React, { Component } from 'react';
import { Carousel } from "antd-mobile"
import { requestIndex } from "../util/request"
import "./Banner.css"
class Banner extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            open: false
        }
    }
    componentDidMount() {
        requestIndex().then(res => {
            console.log(res.data.stories);
            // this.state.banner = res.data.stories
            this.setState({
                banner: res.data.stories
            })

        })
    }
    onOpenChange() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const sidebar = (
            <div className="sideBar">
                <span >123</span>
            </div>
        )
        return (
            <div>  {/* 轮播图 */}
                <div className="banner">
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.state.banner.map((val) => {
                            return (
                                <img key={val.id} src={val.images}
                                    to={val.url}
                                    alt=""></img>
                            )
                        })}
                    </Carousel>
                </div>

            </div>
        );
    }
}

export default Banner;

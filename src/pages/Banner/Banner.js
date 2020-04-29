import React, { Component } from 'react';
import { Carousel } from "antd-mobile"
import { requestIndex } from "../../util/request"
import "./Banner.css"
import { Link } from 'react-router-dom';
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
            console.log(res.data.top_stories);
            // this.state.banner = res.data.stories
            this.setState({
                // banner: res.data.stories
                banner: res.data.top_stories
            })

        })
    }
    onOpenChange() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        // const sidebar = (
        //     <div className="sideBar">
        //         <span >123</span>
        //     </div>
        // )
        return (
            <div>
                {/* 轮播图 */}
                <div className="banner">
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.state.banner.map((val) => {
                            return (
                                <Link key={val.id} to={"/details/" + val.id}>
                                    <h1 className="h1-title">{val.title}</h1>
                                    <img src={val.image} alt=""></img>
                                </Link>
                            )
                        })}
                    </Carousel>
                </div>

            </div>
        );
    }
}

export default Banner;

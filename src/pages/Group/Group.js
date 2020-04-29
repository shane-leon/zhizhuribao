import React, { Component } from 'react'
import "./Group.css"
export default class Group extends Component {
    render() {
        return (
            <div>
                <div className="group">
                    <div className="group_left">
                        <img src={this.props.info.avatar} alt="" />
                    </div>
                    <div className="group_center">
                        <h3>{this.props.info.author}</h3>
                        <p>{this.props.info.content}</p>
                        <p className="center_p2">{this.props.info.time}</p>
                    </div>
                    <div className="group_right">
                        <p><span>点赞</span><em>{this.props.info.likes}</em></p>
                    </div>
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react'
import "./index.css"
export default class Card extends Component {
    render() {
        const { info } = this.props;
        return (
            <div className="card">
                <div className="card_left">
                    <p>{info.title}</p>
                </div>
                <div>
                    <img src={info.image} alt="" />
                </div>
            </div>
        )
    }
}

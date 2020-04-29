

// 新的世界
import "./Collection.css"
import Back from "../../components/Back"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getCollections } from "../../store/collections"
class Collection extends Component {
    render() {
        const { collections } = this.props
        // console.log(collections);

        return (
            <div className="box">
                <div className="box_back"> {/* 返回 */}
                    <Back></Back>
                </div>
                <h1 className="collection_header">收藏页</h1>
                {/* 遍历数据 */}
                {
                    collections.map((item, index) => {
                        return <Link key={index} to={"/details/" + item.id}>
                            <div className="collection">
                                <span className="collection_title">{item.title}</span>
                                <img src={item.image} alt="" />
                            </div>

                        </Link>
                    })
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        collections: getCollections(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Collection)


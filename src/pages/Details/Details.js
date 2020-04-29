import React, { Component } from 'react'
import { requsetDetail } from "../../util/request"
import "../Index/index.css"
import Back from "../../components/Back"
import { getDetail, requestDetailAction } from "../../store/detail"
import { connect } from "react-redux"
import { collectAction, cancelAction, getCollections } from "../../store/collections"


class Details extends Component {
    constructor() {
        super()
        this.state = {
            detail: {},
            title: "",
            res: {},
            // comment_id: ""


        }
        //3.定义ref方便绑定innerHTML
        this.con = React.createRef()
    }
    componentDidMount() {
        // console.log(this.props)
        let id = this.props.match.params.id
        this.setState({
            comment_id: id
        })


        console.log(id);
        requsetDetail(id).then(res => {
            // console.log(res);
            this.setState({
                detail: res.data,
                title: res.data.title,
                res: res

            })
        })
    }
    componentwillummount() {
        // 要干个啥来着
    }
    render() {
        const { collect, cancel, collections } = this.props;
        console.log(this.state.detail);
        const { detail, title, comment_id } = this.state
        console.log(comment_id);

        //4.绑定innerHTML
        if (this.state.detail.body) {
            //富文本
            this.con.current.innerHTML = this.state.detail.body;
        }

        return (<div>
            {/* <h1 className="detail-header">这里是详情页</h1> */}
            <header className="detail_header">
                <div> {/* 返回 */}
                    <Back></Back>
                </div>
                <div className="detail_right">
                    <span>分享</span>
                    {/* <span onClick={() => this.collection()}>收藏</span> */}
                    {/* <span>取消收藏</span> */}
                    {
                        collections.some(item => item.id === detail.id) ?
                            <span onClick={() => cancel(detail.id)}>取消收藏</span> :
                            <span onClick={() => collect(detail)}>收藏</span>
                    }
                    <span onClick={() => this.props.history.push('/comment/?id=' + `${comment_id}`)}>评论<em></em></span>
                    <span>点赞<em></em></span>
                </div>
            </header>
            {
                this.state.detail.css ?
                    <link rel="stylesheet"
                        href={this.state.detail.css[0]} /> :
                    null}
            { /* details  详情页面*/}
            <h1 className="h1_header">{title}</h1>
            <img className="detail-img" src={this.state.detail.image} alt="" />
            <div ref={this.con}> </div>
        </div >
        )
    }
}

//成批导入状态
const mapStateToProps = (state) => {
    console.log(state)
    return {
        detail: getDetail(state),
        collections: getCollections(state)
    }
}
//成批导入方法
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        requestDetail: (id) => dispatch(requestDetailAction(id)),
        collect: (detail) => dispatch(collectAction(detail)),
        cancel: (id) => dispatch(cancelAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)
import React, { Component } from 'react'
import "./index.css"
import Banner from "../Banner/Banner"
import Card from "../Card/Card"
import { requestIndex, requsetOld } from "../../util/request"
import { Link } from 'react-router-dom'
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            open: false,
            showBox: true,//box出现的状态 true就出现，false就消失
            obj: [],
            showTime: "",

        }
        this.newarr = [];
        this.n = 0;
        //判断是否可以发请求，作为发起请求的一个开关
        this.isRequest = true;
    }
    componentDidMount() {
        requestIndex().then(res => {
            console.log(res.data.stories);
            // this.state.msg = res.data.stories
            this.setState({
                // 今日新闻赋值给arr数组
                arr: res.data.stories

            })
        })
        //
        //到底判断，页面滚动事件
        window.onscroll = () => {
            // console.log("页面滚动了");
            //获取窗口的高度
            var wh = document.documentElement.clientHeight;
            //获取文档的高度
            var dh = document.documentElement.offsetHeight;
            //获取上卷的距离
            var st = document.documentElement.scrollTop || document.body.scrollTop;

            if (st + wh + 50 >= dh && this.isRequest) {
                //开关关掉
                this.isRequest = false;
                console.log("到底了")
                this.n++;
                var paramsTime = this.getTime(this.n).params;
                var showTime = this.getTime(this.n).show;
                console.log(paramsTime)
                console.log(showTime)

                // this.setState({
                //     showTime: showTime
                // })
                /*
                // 有定时器的写法，有些小bug
                 setTimeout(() => {
                    requsetOld(paramsTime).then(res => {
                        console.log(res.data.stories);
                        // this.setState({
                        //     obj: this.state.obj.concat(res.data.stories),
                        //     showTime: showTime
                        // })
                        // var newarr = []
                        this.newarr.push({
                            timers: showTime,
                            dataArr: res.data.stories
                        })
                        this.setState({
                            obj: this.newarr,
                            // showTime: showTime
                        })
                        console.log(this.state.obj)
                        console.log(this.state.obj.length)
                        this.isRequest = true;
                    })
                }, 1000)
                // 发起请求// requsetOld
                */

                // 老师修改的方法
                requsetOld(paramsTime).then(res => {
                    this.isRequest = true
                    console.log(res.data.stories);
                    if (this.isRequest) {
                        this.newarr.push({
                            timers: showTime,
                            dataArr: res.data.stories
                        })
                        this.setState({
                            obj: this.newarr,
                        })
                    }
                    console.log(this.state.obj)
                    console.log(this.state)

                })

            }
        }
    }
    getTime(n) {
        //n-1天前的时间对象
        var paramsDate = new Date(new Date().getTime() - (n - 1) * 24 * 60 * 60 * 1000)
        var paramsDateYear = paramsDate.getFullYear();
        var paramsDateMonth = (paramsDate.getMonth() + 1 + "").padStart(2, "0")
        var paramsDateDate = (paramsDate.getDate() + "").padStart(2, "0");
        var params = paramsDateYear + paramsDateMonth + paramsDateDate;//参数
        //n天前的时间对象
        var showDate = new Date(new Date().getTime() - n * 24 * 60 * 60 * 1000)
        var showDateMonth = (showDate.getMonth() + 1 + "").padStart(2, "0")
        var showDateDate = (showDate.getDate() + "").padStart(2, "0");
        var day = showDate.getDay();//0-6
        var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var week = arr[day];
        var show = showDateMonth + "月" + showDateDate + "日" + " " + week;

        return {
            params,
            show
        }
    }
    //善后工作
    componentWillUnmount() {
        this.isRequest = false;
        window.onscroll = null;
    }
    changeOpen() {
        this.setState({
            open: !this.state.open
        })
    }
    sideBarClick(e) {
        e.stopPropagation();
    }
    render() {
        var json = {
            left: this.state.open ? '0px' : "-100%",
            opacity: this.state.open ? '1' : '0.1'
        }
        const { arr, obj, showTime } = this.state
        // if (arr.length > 0)
        // console.log(arr);
        return (
            <div className="index">
                <header>
                    <div>
                        <span onClick={this.changeOpen.bind(this)}>三</span>
                        <span className="index_span2">首页</span>
                    </div>
                    <div>
                        <span className="index_span3">铃</span>
                        <span>点</span>
                    </div>
                </header>
                {/* 抽屉 */}
                {/* 3.通过动态行间样式实现动画 */}
                <div className="mask" style={json} onClick={this.changeOpen.bind(this)}>
                    <div className="sideBar" onClick={this.sideBarClick.bind(this)}>
                        <div className="sidBar_header">
                            <h2 className="h2_name"><i>头像</i><em>陆明夷</em></h2>
                            <h3><Link to="/collection">我的收藏</Link><em>离线下载</em></h3>
                        </div>
                        <h3 className="mask_fooder">首页</h3>
                    </div>
                </div>
                <div className="index_body">
                    <Banner></Banner>
                </div>
                <div className="index_body_two">
                    <h3>今日热闻</h3>
                    {
                        arr.map(item => {
                            return <Link key={item.id} to={"/details/" + item.id}>
                                <Card info={item}></Card>
                            </Link>
                        })
                    }
                </div>
                <div>
                    {/* //过往信息 */}
                    {/* <div className="index_body_two">
                        <h3>{showTime}</h3>
                        {
                            obj.map(item => {
                                return <Link key={item.id} to={"/details/" + item.id}>
                                    <Card info={item}></Card>
                                </Link>
                            })
                        }
                    </div> */}
                    {
                        // 往期新闻。obj遍历大数组遍历日期，item遍历小数组遍历数据
                        obj.map((item, index) => {
                            return (
                                <div className="index_body_two" key={index}>
                                    <h3>{item.timers}</h3>
                                    {
                                        item.dataArr.map(i => {
                                            return <Link key={i.id} to={"/details/" + i.id}>
                                                <Card info={i}></Card>
                                            </Link>
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

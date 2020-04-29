import axios from "axios"
axios.interceptors.response.use(res => {
    console.log("这次请求数据的地址：" + res.config.url)
    console.log(res)
    return res;
})


export const requestIndex = () => {
        return axios({
            url: "/api/4/stories/latest",
        })
    }
    // 获取详情
export const requsetDetail = (id) => {
    // export const getDetail = (id) => {
    return axios({
        // id: id,
        url: "/api/4/story/" + id,
        // url: "/api/4/story/{id}",
    })
}

// 获取之前的新闻
export const requsetOld = (time) => {
    return axios({
        url: "/api/4/stories/before/" + time
    })
}

// 获取文章长评
export const requsetLong = (id) => {
    return axios({
        url: "/api/4/story/" + id + "/long-comments"
    })
}

// 获取文章短评
export const requsetStory = (id) => {
    return axios({
        url: "/api/4/story/" + id + "/short-comments"
    })
}
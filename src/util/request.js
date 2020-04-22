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
export const getDetail = (id) => {
    return axios({
        // id: id,
        url: "/api/4/story/" + id,
        // url: "/api/4/story/{id}",
    })
}
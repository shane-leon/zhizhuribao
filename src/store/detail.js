import {
    requsetDetail
} from "../util/request"
//状态
const init = {
    detail: {}
}

//actions 
const changeDetailAction = (detail) => {
    return {
        type: "changeDetail",
        detail: detail
    }
}
export const requestDetailAction = (id) => {
    return (dispatch, getState) => {
        const {
            detail
        } = getState().detail;
        if (!!detail.id && id === detail.id) {
            return;
        }
        if (detail.id && id !== detail.id) {
            dispatch(changeDetailAction({}))
        }

        requsetDetail(id).then(res => {
            dispatch(changeDetailAction(res.data))
        })
    }
}

//reducer
const detailReducer = (state = init, action) => {
    switch (action.type) {
        case "changeDetail":
            return {
                ...state,
                detail: action.detail
            }
        default:
            return state
    }
}
export default detailReducer


//导出状态给组件
export const getDetail = state => state.detail.detail;
const initState = {
    long: [],
    short: []
}

const reducer = (state = initState, action)=>{
    switch (action.type) {
        case "changeLong":
            return state;
        default:
            return state;
    }
}
export default reducer

export const getLong = state => state.comment.long;
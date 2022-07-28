import * as ActionType from "../ActionType"


export const loginUser = (data) => (dispatch) => {

    dispatch({type: ActionType.AUTH_LOGIN , payload:data})
}

export const emailVerify = (user) => (dispatch) => {

    dispatch({type: ActionType.EMAIL_VERIFY , payload:user})
}
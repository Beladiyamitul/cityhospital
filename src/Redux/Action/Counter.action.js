import * as ActionType from '../ActionType'

export const increment = () => (dispatch) => {
    dispatch({type : ActionType.INCREMENT_COUNTER})
}   

export const decrement = () => (dispatch) => {
    dispatch({type : ActionType.DECREMENT_COUNTER})
}   
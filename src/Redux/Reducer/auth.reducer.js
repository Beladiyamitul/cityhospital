import * as ActionType from  '../ActionType'

const initalstate = {
    isLoading : false,
    user: null,
    error : ''
}


export const authReducer = (state=initalstate , action) => {

    switch (action.type) {
        case ActionType.EMAIL_VERIFY : 
            return{
                ...state,
                isLoading : false,
                user:action.payload,
                error : ''
            }
        
         default :
            return state;       

    }
}
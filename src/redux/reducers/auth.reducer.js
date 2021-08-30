import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOAD_PROFILE, LOG_OUT } from './../actionType';


const initialState ={
    accessToken: sessionStorage.getItem('ytc-access-token')?sessionStorage.getItem('ytc-access-token') : null,
    user: sessionStorage.getItem('ytc-profile')? JSON.parse(sessionStorage.getItem('ytc-profile')) : null,
    loading:false
}

export const authReducer =(prevState = initialState, action)=>{
    const {type,payload} = action

    switch(type){
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return{
                ...prevState,
                loading:false,
                accessToken:payload,
            }
        case LOGIN_FAIL:
            return{
                ...prevState,
                accessToken: null,
                loading:false,
            }
        case LOAD_PROFILE:
            return{
                ...prevState,
                user: payload,

            }
        case LOG_OUT:
            return{
                ...prevState,
                accessToken:null,
                user:null
            }
        default:
            return prevState
    }
}
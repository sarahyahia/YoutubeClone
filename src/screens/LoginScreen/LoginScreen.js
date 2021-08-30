import React, {useEffect} from 'react'
import './_loginScreen.scss'
import {useDispatch, useSelector} from 'react-redux'
import { login } from './../../redux/actions/auth.action';
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin=()=>{
        dispatch(login())
    }
    
    const history = useHistory();

    useEffect(() => {
        if(accessToken){
            history.push('/')
        }
    }, [accessToken, history])
    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
                <button onClick={handleLogin}>Login with google</button>
                <p>This Project is made using Youtube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen

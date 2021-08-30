import React from 'react'
import "./_sidebar.scss"
import Header from './../header/Header';
import { useDispatch } from 'react-redux';
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdHome,
    MdLibraryBooks,
    MdSentimentDissatisfied
} from "react-icons/md";
import { logout } from '../../redux/actions/auth.action';

const Sidebar = ({sidebar, handleToggleSidebar  }) => {


    const dispatch = useDispatch()
    const logoutHandler=()=>{
        dispatch(logout())
    }

    return (
        <nav 
            className={sidebar? "sidebar open":"sidebar"}
            onClick={() => handleToggleSidebar(false)}>
         <li>
             <MdHome size={23} />
             <span>Home</span>
         </li>
         <li>
             <MdSubscriptions size={23} />
             <span>Subscriptions</span>
         </li>
         <li>
             <MdThumbUp size={23} />
             <span>Liked Video</span>
         </li>
         <li>
             <MdHistory size={23} />
             <span>History</span>
         </li>
         <li>
             <MdLibraryBooks size={23} />
             <span>Library</span>
         </li>
         <li>
             <MdSentimentDissatisfied size={23} />
             <span>I don't know</span>
         </li>
         <hr/>
         <li onClick={logoutHandler}>
             <MdExitToApp size={23} />
             <span>Log Out</span>
         </li>
         <hr/>
        </nav>
    )
}

export default Sidebar

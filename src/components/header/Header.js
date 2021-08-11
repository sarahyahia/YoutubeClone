import React from 'react'
import "./_header.scss"

import avater from "./pngwing.com.png"
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"

const Header = ({handleToggleSidebar}) => {
    return (
        <div className="header border border-dark">
            <FaBars 
                className="header__menu" 
                size={26}
                onClick={()=>handleToggleSidebar()}
            />

            <img 
                src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" 
                alt="" 
                className="header__logo" 
            />

            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src={avater} alt="" />
            </div>

        </div>
    )
}

export default Header

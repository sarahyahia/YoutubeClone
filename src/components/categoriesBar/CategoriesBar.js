import React, { useState } from 'react'
import "./_categoriesBar.scss"

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    "use of API",
    'Redux',
    'Music',
    'Art of Algorithms',
    'Math',
    'Movies',
    'Django'
]


const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState("All")
    const handleClick = (value)=>{
        setActiveElement(value)
    }

    return (
        <div className="CategoriesBar">
            {keywords.map((value,i)=> (
                <span 
                    onClick={()=> handleClick(value)}
                    key={i}
                    className={activeElement===value? "active":""}
                >{value} 
                </span>
            ))}
        </div>
    )
}

export default CategoriesBar

import React from 'react'
import './_comment.scss'
import moment from 'moment'
// import numeral from 'numeral'

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img 
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                alt=""
                className="rounded-circle mx-3"
            />
            <div className="comment__body">
                <p className="comment__header mb-1">
                    Sarah Yahia • {moment('2020-06-06').fromNow()}
                </p>
                <p className="mb-0">Nice Video!</p>
            </div>
        </div>
    )
}

export default Comment

import React from 'react'
import moment from 'moment'
import numeral from 'numeral'

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img 
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                alt=""
                className="rounded-circle mr-3"
            />
            <div className="comment__body">
                <p className="comment__header">
                    Sarah Yahia • {moment('2020-06-06').fromNow()}
                </p>
            </div>
        </div>
    )
}

export default Comment

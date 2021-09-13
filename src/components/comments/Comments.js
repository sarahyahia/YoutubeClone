import React,{useState, useEffect} from 'react'
import Comment from '../comment/Comment'
import './_comments.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentsOfVideoId } from './../../redux/actions/comments.action';

const Comments = ({videoId, totalComments}) => {
    const [text,setText]= useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommentsOfVideoId(videoId))
    }, [dispatch, videoId])

    const comments = useSelector(state=> state.commentList.comments)

    const _comments= comments?.map(comment=>comment.snippet.topLevelComment.snippet)
    console.log(_comments)

    const handleComment=(e)=>{
        e.preventDefault()
        if(text.length ===0) return
        dispatch(addComment(videoId,text))
        setText('')
    }
    return (
        <div className="comments">
            <p>{totalComments} comments</p>
            <div className="comments__form d-flex w-100 my-2">
                <img 
                    src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                    alt=""
                    className="rounded-circle mx-3"
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input 
                        type="text" 
                        placeholder="Write a comment..." 
                        className="flex-grow-1"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                    <button className="border-0 p-2">Comment</button>
                </form>
            </div>
            <div className="comments__list">
                {
                    _comments?.map((comment,i)=>(
                        <Comment comment={comment} key={i} />
                    ))
                }
            </div>
        </div>

    )
}

export default Comments

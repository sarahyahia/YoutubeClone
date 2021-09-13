import React, {useEffect} from 'react'
import './_videoMetaData.scss'
import { AiFillEye } from 'react-icons/ai'
import moment from 'moment'
import numeral from 'numeral'
import {MdThumbUp, MdThumbDown} from 'react-icons/md'
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from 'react-redux';
import { checkSubscriptionStatus, getChannelDetails } from './../../redux/actions/cannel.action';


const VideoMetaData = ({video:{snippet,statistics},videoId}) => {

    const {channelId, channelTitle, description, title, publishedAt} = snippet;
    const {viewCount, likeCount, dislikeCount}= statistics;

    const dispatch = useDispatch();

    const subscriptionStatus = useSelector(state=> state.channelDetails.subscriptionStatus)
    const {snippet:channelSnippet, statistics:channelStatistics}= useSelector(state=> state.channelDetails.channel)
    
    useEffect(()=>{
        dispatch(getChannelDetails(channelId));
        dispatch(checkSubscriptionStatus(channelId));
    },[dispatch,channelId])

    return (
        <>
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>{title}</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        <AiFillEye/> {numeral(viewCount).format("0.a")} Views • {moment(publishedAt).fromNow()}
                    </span>
                    
                    <div>
                        <span className="mx-3">
                            <MdThumbUp size={26}/> {numeral(likeCount).format("0.a")}
                        </span>
                        <span className="mr-3">
                            <MdThumbDown size={26}/> {numeral(dislikeCount).format("0.a")}
                        </span>
                    </div>
                </div>
            </div> 
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img 
                        src={channelSnippet?.thumbnails?.default?.url}
                        alt=""
                        className='rounded-circle mx-3'
                    />
                    <div className="d-flex flex-column">
                        <span>{channelTitle}</span>
                        <span> {numeral(channelStatistics?.subscriberCount).format("0.a")} Subscriber</span>
                    </div>
                </div>
                <button className={`btn border-0 p-2 m-2 ${subscriptionStatus&& 'btn-gray'}`}>
                    {subscriptionStatus?'SUBSCRIBED':'SUBSCRIBE'}
                </button>
            </div>
            <div className="videoMetaData__description">
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    className="content-css"
                    anchorClass="showMoreClass"
                    expanded={false}
                >
                    {description}
                </ShowMoreText>
            </div>
        </div>
        </>
    )
}

export default VideoMetaData

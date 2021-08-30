import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"

import request from '../../api'

export const getPopularVideos = () => async dispatch =>{
    try{
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const res = await request.get("/videos", {
            params: {
                part:"snippet,contentDetails,statistics",
                chart : 'mostPopular',
                regionCode : 'US',
                maxResults : 20,
                pageToken : '',
            }
        })

        dispatch({
            type : HOME_VIDEOS_SUCCESS,
            payload : {
                videos : res.data.items,
                nextPageToken : res.data.nextPageToken
            },
        })
        console.log(res);
    }catch(error){
        console.log(error.message);
        dispatch({
            type : HOME_VIDEOS_FAIL,
            payload : error.message
        })
    }
}
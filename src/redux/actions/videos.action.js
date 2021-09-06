import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"

import request from '../../api'

export const getPopularVideos = () => async (dispatch, getState) =>{
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
                pageToken : getState().homeVideos.nextPageToken,
            }
        })

        dispatch({
            type : HOME_VIDEOS_SUCCESS,
            payload : {
                videos : res.data.items,
                nextPageToken : res.data.nextPageToken,
                category:'All'
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

export const getVideosByCategory = (keyword) => async (dispatch,getState) =>{
    try{
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const res = await request.get("/search", {
            params: {
                part:"snippet",
                maxResults : 20,
                pageToken : getState().homeVideos.nextPageToken,
                q: keyword,
                type:'video'
            }
        })

        dispatch({
            type : HOME_VIDEOS_SUCCESS,
            payload : {
                videos : res.data.items,
                nextPageToken : res.data.nextPageToken,
                category:keyword
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
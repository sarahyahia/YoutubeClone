import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionType"

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
                regionCode : 'KR',
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


export const getVideoByID = (id) => async dispatch=>{
    try{
        dispatch({
            type:SELECTED_VIDEO_REQUEST,

        })
        const {data} = await request('/videos',{
            params:{
                part:'snippet,statistics',
                id:id
            }
        })
        dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0]
        })
    }catch(error){
        console.log(error.message);
        dispatch({
            type: SELECTED_VIDEO_FAIL,
            payload: error.message,
        })
    }
}
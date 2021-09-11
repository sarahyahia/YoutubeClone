import React from 'react'
import './_videoMetaData.scss'
import { AiFillEye } from 'react-icons/ai'
import moment from 'moment'
import numeral from 'numeral'
import {MdThumbUp, MdThumbDown} from 'react-icons/md'
import ShowMoreText from "react-show-more-text";


const VideoMetaData = () => {

    const handleSubscribe =(e)=>{
        // console.log(e)
    }

    return (
        <>
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>Video title</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        <AiFillEye/> {numeral(1000).format("0.a")} Views • {moment('2020-06-06').fromNow()}
                    </span>
                    
                    <div>
                        <span className="mx-3">
                            <MdThumbUp size={26}/>{numeral(1000).format("0.a")}
                        </span>
                        <span className="mr-3">
                            <MdThumbDown size={26}/>{numeral(1000).format("0.a")}
                        </span>
                    </div>
                </div>
            </div> 
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img 
                        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                        alt=""
                        className='rounded-circle mx-3'
                    />
                    <div className="d-flex flex-column">
                        <span>SOYF</span>
                        <span> {numeral(1000).format("0.a")} Subscriber</span>
                    </div>
                </div>
                <button className="btn border-0 p-2 m-2" onClick={handleSubscribe}>Subscribe</button>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio, culpa impedit nesciunt non ducimus reprehenderit maxime! Doloribus dolorem vitae deleniti impedit vero? Earum eius nobis nesciunt excepturi odit architecto qui quasi vero impedit, possimus ratione culpa, esse fugiat, quibusdam atque doloribus laborum porro recusandae voluptatum corrupti. Beatae, fuga nemo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio, culpa impedit nesciunt non ducimus reprehenderit maxime! Doloribus dolorem vitae deleniti impedit vero? Earum eius nobis nesciunt excepturi odit architecto qui quasi vero impedit, possimus ratione culpa, esse fugiat, quibusdam atque doloribus laborum porro recusandae voluptatum corrupti. Beatae, fuga nemo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio, culpa impedit nesciunt non ducimus reprehenderit maxime! Doloribus dolorem vitae deleniti impedit vero? Earum eius nobis nesciunt excepturi odit architecto qui quasi vero impedit, possimus ratione culpa, esse fugiat, quibusdam atque doloribus laborum porro recusandae voluptatum corrupti. Beatae, fuga nemo.
                </ShowMoreText>
            </div>
        </div>
        </>
    )
}

export default VideoMetaData

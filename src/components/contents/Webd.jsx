import React from 'react'
import { webdText } from '../../data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
    return (
        <section id ='webd'>
            <h2>웹디자인기능자 준비는 이걸로</h2>
            <div className='video_inner'>
                {webdText.map((video,key) => (
                    <div className='video' key={key}>
                        <div className='video_thumb play_icon'>
                            <Link to= {`/video/ ${video.videoId}`}>
                                <img src={video.img} alt ="" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Webd

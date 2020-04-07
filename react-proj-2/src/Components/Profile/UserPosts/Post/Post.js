import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <div className='Post'>
            <img className='Post__img' src={props.srcImg} alt='postImage'/>
            <p className='Post__p'>{props.feed}</p>
            <span className='Post__like'>like:</span>
        </div>
    )
}

export default Post
import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <div className='Post'>
            <img className='Post__img' src={props.srcImg} alt='postImage'/>
            <p className='Post__p'>{props.text}</p>
            <span className='Post__like'>like:{props.likes}</span>
        </div>
    )
}

export default Post
import React from 'react'
import './Post.css'

const Post = () => {
    return (
        <div className='Post'>
            <img className='Post__img' src='https://manshet.org/templates/teensy/dleimages/noavatar.png' alt='postImage'/>
            <p className='Post__p'>Hey, why nobody love me?</p>
        </div>
    )
}

export default Post
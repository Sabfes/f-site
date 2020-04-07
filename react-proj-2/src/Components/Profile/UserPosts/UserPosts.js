import React from 'react'
import './UserPosts.css'
import Post from './Post/Post'

const UserPosts = () => {
    return (
        <div>
            <div className='UserPosts'>
                <h1>My posts</h1>
                <textarea className='UserPosts__textarea' placeholder='Your news...'></textarea>
                <div className='UserPosts__button'>Send</div>
            </div>
            <Post 
                feed='Hey, why nobody love me?' 
                srcImg='https://manshet.org/templates/teensy/dleimages/noavatar.png'
            />
        </div>
    )
}

export default UserPosts
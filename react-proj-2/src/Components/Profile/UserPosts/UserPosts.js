import React from 'react'
import './UserPosts.css'
import Post from './Post/Post'

const UserPosts = () => {
    let postData = [
        {id:1, text: 'Hi world!', likeConter: 12, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png'},
        {id:2, text: 'Hi world!2e123', likeConter: 2, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png'},
        {id:3, text: 'asdasHi world!', likeConter: 55, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png'}
    ]
    return (
        <div>
            <div className='UserPosts'>
                <h1>My posts</h1>
                <textarea className='UserPosts__textarea' placeholder='Your news...'></textarea>
                <div className='UserPosts__button'>Send</div>
            </div>
            <div>
                {postData.map( (item, index) => {
                    return (
                        <Post key={index} text={item.text} srcImg={item.img} likes={item.likeConter} />
                    )
                })}
            </div>
        </div>
    )
}

export default UserPosts
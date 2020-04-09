import React from 'react'
import './UserPosts.css'
import Post from './Post/Post'

const UserPosts = (props) => {
    let postData = props.dataBillPost;

    let newPostEl = React.createRef();

    let addPost = () => {
        props.addPost(`${newPostEl.current.value}`)
        newPostEl.current.value = ''
    }
    return (
        <div>
            <div className='UserPosts'>
                <h1>My posts</h1>
                <textarea ref={newPostEl} className='UserPosts__textarea' placeholder='Your news...'></textarea>
                <div className='UserPosts__button' onClick={addPost}>Send</div>
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
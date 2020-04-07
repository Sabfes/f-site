import React from 'react'
import './Profile.css'
import UserPosts from './UserPosts/UserPosts'
import UserInfo from './UserInfo/UserInfo'

const Profile = () => {
    return (
        <main className='Profile'>
            <img className='Profile__img' src='https://www.4kpapers.com/assets/2016/09/27/mount-fitz-roy-wallpaper.jpg' alt='as'/>
            <UserInfo />
            <UserPosts />
        </main>
    )
}

export default Profile;
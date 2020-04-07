import React from 'react'
import './Profile.css'
import UserPosts from './UserPosts/UserPosts'
import UserInfo from './UserInfo/UserInfo'

const Profile = () => {
    return (
        <main className='Profile'>
            <img className='Profile__img' src='https://404store.com/2017/08/15/CpRGNUC.jpg' alt='as'/>
            <UserInfo />
            <UserPosts />
        </main>
    )
}

export default Profile;
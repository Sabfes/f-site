import React from 'react'
import './Profile.css'
import UserPosts from './UserPosts/UserPosts'
import UserInfo from './UserInfo/UserInfo'

const Profile = () => {
    return (
        <main className='Profile'>
            <UserInfo />
            <UserPosts />
        </main>
    )
}

export default Profile;
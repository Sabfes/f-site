import React from 'react'
import './Profile.css'
import UserPosts from './UserPosts/UserPosts'
import UserInfo from './UserInfo/UserInfo'

const Profile = (props) => {
    return (
        <main className='Profile'>
            <UserInfo />
            <UserPosts dataBillPost={props.dataBillPost} dispatch={props.dispatch}/>
        </main>
    )
}

export default Profile;
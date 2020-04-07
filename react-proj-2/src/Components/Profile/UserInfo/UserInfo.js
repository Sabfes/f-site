import React from 'react'
import './UserInfo.css'

const UserInfo = () => {
    return (
        <div className='UserInfo'>
            <img className='UserInfo__img' src='http://a1327.phobos.apple.com/us/r30/Purple4/v4/69/d9/b2/69d9b296-863f-fc1c-cf44-9ebe07e8b9ca/mzl.rlfkiuff.png' alt='userInfo-img'/>
            <div className='UserInfo__info'>
                <h1 className='UserInfo__info-item'>Name</h1>
                <p className='UserInfo__info-item'>Date of BD:</p>
                <p className='UserInfo__info-item'>City:</p>
                <p className='UserInfo__info-item'>Education:</p>
                <p className='UserInfo__info-item'>Web-site:</p>
            </div>
        </div>
    )
}

export default UserInfo



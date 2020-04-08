import React from 'react'
import './UserInfo.css'

const UserInfo = () => {
    return (
        <div className='UserInfo'>
            <img className='UserInfo__bg-Img' src='https://www.4kpapers.com/assets/2016/09/27/mount-fitz-roy-wallpaper.jpg' alt='as'/>
            <div className='UserInfo__content'>
                <img className='UserInfo__img' src='https://zorenko.github.io/trifit/img/img.jpg' alt='userInfo-img'/>
                <div className='UserInfo__info'>
                    <h1 className='UserInfo__info-item'>Name</h1>
                    <p className='UserInfo__info-item'>Date of BD:</p>
                    <p className='UserInfo__info-item'>City:</p>
                    <p className='UserInfo__info-item'>Education:</p>
                    <p className='UserInfo__info-item'>Web-site:</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo



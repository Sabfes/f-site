import React from 'react'
import './Chat.css'

const Chat = (props) => {
    return (
        <div className='Chat'>
            <p className='Chat__p'>{props.text}</p>
        </div>
    )
}

export default Chat
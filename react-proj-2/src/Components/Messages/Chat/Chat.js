import React from 'react'
import './Chat.css'

const Chat = (props) => {
    return (
        <div>
            <div>{props.text}</div>
        </div>
    )
}

export default Chat
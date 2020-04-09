import React from 'react'
import './Messages.css'
import Dialog from './Dialog/Dialog.js'
import Chat from './Chat/Chat'


const Messages = (props) => {
    let newMsg = React.createRef()
    let addMsg = () => {
        props.dispatch({type: 'ADD-MESSAGE', text: newMsg.current.value})
        newMsg.current.value = ''
    }

    return (
        <div className='Messages'>
            <h1 className='Messages__h1'>Messages</h1>
            <div className='Messages__container'>
                <div className='Messages__chat-list'>
                    {props.dataBillDialogs.map( (item, index) => {
                        return (
                            <Dialog key={index} link={`/Messages/${item.id}`} dialogName={item.name}/>
                        )
                    })}
                </div>
                <div className='Messages__chat'>
                    {props.dataBillMessages.map( (item, index) => {
                        return (
                            <Chat key={index} text={item.text}/>
                        )
                    })}
                    <textarea ref={newMsg} className='Messages__textarea' placeholder='Your text...'></textarea>
                    <div className='Messages__send-btn' onClick={addMsg}>Send</div>
                </div>
            </div>
        </div>
    )
}

export default Messages
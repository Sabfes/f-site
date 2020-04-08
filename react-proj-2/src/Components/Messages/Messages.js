import React from 'react'
import './Messages.css'
import Dialog from './Dialog/Dialog.js'
import Chat from './Chat/Chat'


const Messages = (props) => {
    let dialogsData = [
        {id:1, name: 'Dima'},
        {id:2, name: 'Liza'},
        {id:3, name: 'Misha'}
    ]
    let messagesData = [
        {id:1, text: 'Hi world!'},
        {id:2, text: 'Hi world!2e123'},
        {id:3, text: 'asdasHi world!'}
    ]

    return (
        <div className='Messages'>
            <h1 className='Messages__h1'>Messages</h1>
            <div className='Messages__container'>
                <div className='Messages__chat-list'>
                    {dialogsData.map( (item, index) => {
                        return (
                            <Dialog key={index} link={`/Messages/${item.id}`} dialogName={item.name}/>
                        )
                    })}
                </div>
                <div className='Messages__chat'>
                    {messagesData.map( (item, index) => {
                        return (
                            <Chat key={index} text={item.text}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Messages
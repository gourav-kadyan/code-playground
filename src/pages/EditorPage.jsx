import React, { useState } from 'react'
import Client from '../Components/Client';
import Editor from '../Components/Editor';

const EditorPage = () => {

  const [ clients, setClients ] = useState([
    { socketId: 1, username : 'gourav'},
    { socketId: 2, username : 'tony Op'},
    { sockerId: 3, username : 'Luffy K'}
  ]);


  return (

    <div className='main-wrapper'>
        <div className='left-wrapper'>
          <div className='aside-inner'>
            <div className='logo'>
              <img className='logoImage' src="/code-sync.png" alt="" />
            </div>
            <h3>Connected</h3>
            <div className='clientList'>
              {
                clients.map(client => <Client 
                  key={client.socketId} 
                  username={ client.username }
                />)
              }
            </div>
          </div>
          <button className='btn copy-btn'>Copy Room ID</button>
          <button className='btn leave-btn'>Leave</button>
        </div>
        <div className='editor-wrapper'>
          <Editor />
        </div>
    </div>
  )
}

export default EditorPage
import React, { useState } from 'react'
import Client from '../Components/Client';


const EditorPage = () => {

  const [ clients, setClients ] = useState([
    { socketId: 1, username : 'gourav'},
    { socketId: 2, username : 'tony'}
  ]);


  return (

    <div className='main-wrapper'>
        <div className='left-wrapper'>
          <div className='aside-inner'>
            <div className='logo'>
              <img src="/code-sync.png" alt="" />
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
        </div>
        <div className='editor-wrapper'>Editor goes here</div>
    </div>
  )
}

export default EditorPage
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import Client from '../Components/Client';
import Editor from '../Components/Editor';
import ACTION from '../Action'
import { initSocket } from '../socket';
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom';

const EditorPage = () => {

  const socketRef = useRef(null);
  const location = useLocation();
  const reactNavigator = useNavigate();
  const { roomId } = useParams();
  const [ clients, setClients ] = useState([]);

  useEffect(() => {
    const init = async() => {
      socketRef.current = await initSocket();
      //to handle the error cases while connecting to the server
      socketRef.current.on('connect_error', (err) => handleErrors(err));
      socketRef.current.on('connect_failed', (err) => handleErrors(err));

      function handleErrors(e) {
          console.log('socket error', e);
          toast.error('Socket connection failed, try again later.');
          reactNavigator('/');
      }

      socketRef.current.emit(ACTION.JOIN,{
        roomId,
        username : location.state?.username,
      });

      //listenening for joined events
      socketRef.current.on(ACTION.JOINED, ({clients,username,socketId}) => {
        if(username !== location.state?.username){
          toast.success(`${username} joined`)
          console.log(`${username} joined`);
        }
        setClients(clients);
      })

      //listening for leave events
      socketRef.current.on(ACTION.DISCONNECTED, ({socketId, username}) => {
        toast.success(`${username} left the room `);
        setClients((prev) => {
          return prev.filter((client) => client.socketId !== socketId);
        })
      })

    }
    init();
    //for cleaning 
    return() => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTION.DISCONNECTED);
      socketRef.current.off(ACTION.JOINED);
      // socketRef.current.off(ACTION.JOIN);

    }
  },[])

  

  if(!location.state){
    <Navigate to="/"/>
  }

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
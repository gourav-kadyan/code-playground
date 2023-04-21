import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const HomePage = () => {

  const [ roomid, setRoomid] = useState('');

  //create a new room id and use hot-toast
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomid(id);
    toast.success("Successfully created a New Room");
  }

  return (
    <div className="homepage">
      <div className="form">
        <img src="/code-sync.png" alt="Code-Sync-Editor logo" />
        <h4 className="label">Paste Your Invitation ROOM ID</h4>
        <div className="input">

          <input type="text" value={roomid} onChange={(e) => setRoomid(e.target.value)} className="inputbox" placeholder='ROOM ID' />

          <input type="text" className="inputbox" placeholder='USER NAME' />
          <button className="btn Joinbtn">Join</button>
        </div>
        <span className="info">
          If you do not have any invite then create &nbsp; 
          <button onClick={createNewRoom} className="btn createNewRoomBtn">New Room</button>
        </span>
      </div>
      <footer>
        <h4>Built with 💛 by <a href="https://github.com/gourav-kadyan" target="blank">Gourav Kadyan</a> </h4>
      </footer>
    </div>
  )
}

export default HomePage;
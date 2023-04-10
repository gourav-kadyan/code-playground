import React from 'react'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="form">
        <img src="/code-sync.png" alt="Code-Sync-Editor logo" />
        <h4 className="label">Paste Your Invitation ROOM ID</h4>
        <div className="input">
          <input type="text" className="inputbox" placeholder='ROOM ID' />
          <input type="text" className="inputbox" placeholder='USER NAME' />
          <button className="btn Joinbtn">Join</button>
        </div>
        <span className="info">
          If you do not have any invite then create &nbsp; 
          <button className="btn createNewRoomBtn">New Room</button>
        </span>
      </div>
      <footer>
        <h4>Built with 💛 by <a href="https://github.com/gourav-kadyan" target="blank">Gourav Kadyan</a> </h4>
      </footer>
    </div>
  )
}

export default HomePage;
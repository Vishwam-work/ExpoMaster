import React from 'react'
import '../../style/sidebar/sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import PersonIcon from '@mui/icons-material/Person';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
const Sidebar_pannel = () => {
  return (
    <div className='sidebar'>
      <div className="top">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>EXPOMASTER</span>
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
          <Link to="/" style={{textDecoration:"none"}}>

            <HomeIcon  className='icon'/>
            <span>Home</span>
          </Link>
          </li>
          <p className="title">Login</p>
          <li>
          <Link to="/performa" style={{textDecoration:"none"}}>
            
            <RequestPageIcon className='icon' />
            <span>Performa</span>
          </Link>
          </li>

          <p className="title">User Pannel</p>
          <li>
            <PersonIcon className='icon' />
            <span>User</span>
          </li>
          <p className="title">Documentation</p>
          <li>
            <SummarizeIcon className='icon' />
            <span>Report</span>
          </li>
          <p className="title">Setting</p>

          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Theme pannel */}
      {/* <div className="bottom">Theme</div> */}
    </div>

  )
}
export default Sidebar_pannel
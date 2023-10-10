import React from 'react'
import '../../style/navbar/navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search' />
          <SearchIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
          <NotificationsIcon className='icon'/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <Person2Icon className='icon'/>
          </div>

        </div>
      </div>
    </div>

  )
}
export default Navbar
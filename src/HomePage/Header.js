import React from 'react'
import './Header.css';
import logo from '../Images/logo.png';
import avatar from '../Images/avatar.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOptions from './HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../Firebase';

function Header({userData}) {

  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
        <div className="header_left">
          <img src={logo} alt="logo" />

          <div className="header_search">
            <input type="text" placeholder='Search' />
            <SearchIcon style={{color: "#317AE7"}}/>
          </div>
        </div>
        <div className="header_right">
          <a href=""><HeaderOptions Icon={HomeIcon} title='Home'/></a>
          <a href="/connect" style={{textDecoration: "none"}} state={{...userData}}><HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/></a>
          <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOptions Icon={ChatIcon} title='Messaging'/>
          <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
          <HeaderOptions avatar={true} title='Logout' onClick={logoutApp} />
        </div>
    </div>
  )
}

export default Header
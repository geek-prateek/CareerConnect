import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';
import cover from '../Images/cover.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import CategoryIcon from '@mui/icons-material/Category';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <a href="/profile"><div className="sidebar_top">
            <img src={cover} alt="image" />
            <Avatar style={{width: "60px", height:"60px"}} src={user.photoUrl} className='sidebar_avatar'>{user?.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

        </div></a>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">
                    2,543
                </p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">
                    2,447
                </p>
            </div>
        </div>
        <div className="sidebar_items">
            <div className="sidebar_itemsLeft">
                <CategoryIcon />
            </div>
            <div className="sidebar_itemsRight">
                <h4>My items</h4>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Trending Hashtags</p>
            {recentItems('reactjs')}
            {recentItems('Java programming')}
            {recentItems('SQL')}
            {recentItems('GitHub')}
            {recentItems('Frontend')}
        </div>
    </div>
  )
}

export default Sidebar
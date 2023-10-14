import React, { forwardRef } from 'react';
import './Posts.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({name, desc, msg, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
         <div className="post_header">
            <Avatar src={photoUrl} >{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
         </div>

         <div className="post_body">
            <p>{msg}</p>
         </div>

         <div className="post_react">
            <div className="post_left">
               <div className="post_left">
               <FavoriteIcon style={{color: "#ED7524"}}/>
               
               <a href="/">Prateek Kumar and 40 others</a>
               </div>
               
               <a href="/" className="post_right">71 comments . 10 reposts</a>
            </div>
            
         </div>

         <div className="post_button">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
            <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray" />
            <InputOption Icon={RepeatRoundedIcon} title="Repost" color="gray" />
            <InputOption Icon={SendIcon} title="Send" color="gray" />
         </div>
    </div>
  )
})

export default Post
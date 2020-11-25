import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu'; 
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InboxIcon from '@material-ui/icons/Inbox';
import { Avatar } from '@material-ui/core'
import './Navbar.css'
import ProfileMenu from './ProfileMenu';












const materialIcons = { 
    
    color: '#20C5FB',
    margin: '0px 17px 0px'

    
}

const avatarIcon = {
    margin: '0px 0px 0px 60px',
    border: '2px solid #DDDDDC'
}







export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="menu__icon">
                    <MenuIcon style={{ color: '#20C5FB'}}/>
                    
                    <h4 className="h41">Company</h4><h4 className="h42">Logo</h4>
                </div>
            
                <div className="navbar__items">
                    <div className="navbar__itemsIcons">
                        <SearchIcon style={ materialIcons }/>
                        <NotificationsIcon style={ materialIcons}/>
                        <InboxIcon style={ materialIcons}/>
                    </div>
                    <div className="avatar__container">
                        <Avatar  src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU"
                        style= {avatarIcon}/>
                        <ProfileMenu/>
                        
                    </div>
                </div>
                
        </div>
        )
    }
}


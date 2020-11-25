import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const avatarDetails = {
    color: '#20C5FB',
    margin: '0px 20px 0px 4px'
}

const ProfileMenu = () => {
    const [anchorEl, setAnchorEL] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEL(event.currentTarget);
    }
    const handleClose = () =>  { 
        setAnchorEL(null);
    }
    return (
        <div>
            <ArrowDropDownIcon style={avatarDetails} onClick={handleClick}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
        
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
        </div>
    )
}

export default ProfileMenu

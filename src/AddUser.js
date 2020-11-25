import React, { Component } from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class AddUser extends Component {
    render() {
        return (
            <div>
                <PersonAddIcon/>
                <Menu id="simple-menu">
                            <MenuItem >Profile</MenuItem>
        
                            <MenuItem>Logout</MenuItem>
                        </Menu>
            </div>
        )
    }
}

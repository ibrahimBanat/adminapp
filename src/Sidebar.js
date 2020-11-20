import React, { Component } from 'react'
import SpeedIcon from '@material-ui/icons/Speed';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import './Sidebar.css'

const sidebarListItem = {
    color: '#B1B1B1',
    margin: '0px 0px 0px 14px'

}
const sidebarListItem2 = {
    color: '#20C5FB',
    margin: '0px 0px 0px 10px'
}

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__item1"><SpeedIcon style={ sidebarListItem }/>
                <div>Dashboard</div>
                </div>

                <div className="sidebar__item2"><AssignmentOutlinedIcon style={ sidebarListItem2 }/>
                <div>Work Orders</div>
                </div>

                <div className="sidebar__item3"><SettingsOutlinedIcon style={ sidebarListItem }/>
                <div>Settings</div>
                </div>
            </div>
        )
    }
}

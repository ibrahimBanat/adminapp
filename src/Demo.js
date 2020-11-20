import * as React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import './Demo.css'
import { Component } from 'react'
import Users from './users.json'

export default class Demo extends Component {
    

    render() {
        const columns = [
            { field: 'ID', headerName: 'ID', width: 130, 
            valueGetter: getID,
            sortComparator: (v1, v2, cellParams1, cellParams2) =>
              getID(cellParams1).localeCompare(getID(cellParams2))},

            { field: 'Username', headerName: 'Username', width: 130, 
            valueGetter: getUserName,
            sortComparator: (v1, v2, cellParams1, cellParams2) =>
            getUserName(cellParams1).localeCompare(getUserName(cellParams2))},

            { field: 'Password', headerName: 'Password', width: 130 },
            { field: 'Mobile Number', headerName: 'Mobile Number', width: 260,
             valueGetter: getMobileNumber,
            sortComparator: (v1, v2, cellParams1, cellParams2) =>
            getMobileNumber(cellParams1).localeCompare(getMobileNumber(cellParams2))},
            {
              field: 'Full Name',
              headerName: 'Full name',
              width: 260,
              valueGetter: getFullName,
              sortComparator: (v1, v2, cellParams1, cellParams2) =>
                getFullName(cellParams1).localeCompare(getFullName(cellParams2)),
            },
          ];
          
          const rows = [
            { id: `${Users[0].ID}`, UserName: `${Users[0].userName}`, Password: '*****', MobileNumber: `${Users[0].mobileNumber}`, FullName: `${Users[0].fullName}`},
            { id: `${Users[1].ID}`, UserName: `${Users[1].userName}`, Password: '*****', MobileNumber: `${Users[1].mobileNumber}`, FullName: `${Users[1].fullName}` },
            { id: `${Users[2].ID}`, UserName: `${Users[2].userName}`, Password: '*****', MobileNumber: `${Users[2].mobileNumber}`, FullName: `${Users[2].fullName}` },
            { id: `${Users[3].ID}`, UserName: `${Users[3].userName}`, Password: '*****', MobileNumber: `${Users[3].mobileNumber}`, FullName: `${Users[3].fullName}` },
            { id: `${Users[4].ID}`, UserName: `${Users[4].userName}`, Password: '*****', MobileNumber: `${Users[4].mobileNumber}`, FullName: `${Users[4].fullName}` },
            
          ];
        function getUserName(params) {
            return `${params.getValue('UserName')
            }`;
        }

        function getID(params) {
              return `${params.getValue('id')}`
                
        }
        function getMobileNumber(params) {
              return `${params.getValue('MobileNumber')}`
                
        }
        function getFullName(params) {
              return `${params.getValue('FullName')}`
                
        }
          
        return (
        
            <div className ="body__table">
                <div className="card__title">
                    <h4>Records</h4>
                </div>
                <div className="search"><input type="text" placeholder="Search"></input></div>
                <div style={{ height: 400, width: '100%' }}>
            
                    <DataGrid rows={rows} columns={columns} />
                </div>
            </div>
            
        
        )
    }
}








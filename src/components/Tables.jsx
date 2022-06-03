import React from 'react'
import classes from '../assets/styles/Table.module.css';
const Tables = ({ children }) => {
  return (
      <>
        <table id={classes.myTable}>
            <thead>
            <tr>
                <th>id</th>
                <th>Questions</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
            </table>
      </>
  )
}

export default Tables
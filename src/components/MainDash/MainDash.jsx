import { Card } from '@mui/material'
import React ,{visibility}from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import './MainDash.css'

const MainDash = () => {
 
  return (
    <div className='MainDash' >
        <h1 className='pageTitle'>Dashboard</h1>
      <Cards/>
      <Table/>
    </div>
  )
}

export default MainDash


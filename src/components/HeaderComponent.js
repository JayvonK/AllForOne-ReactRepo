import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <div className='header d-flex align-items-center'>
        <Link to={'/'} className='darkBlue headerTxt text-center w-100 dHead'>API - ALL FOR ONE</Link>
        <Link to={'/'} className='darkBlue headerTxt text-center w-100 mHead'>ALL FOR ONE</Link>
    </div>
  )
}

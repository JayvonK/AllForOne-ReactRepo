import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <div className='header d-flex align-items-center'>
        <Link to={'/'} className='darkBlue headerTxt text-center w-100'>API - ALL FOR ONE</Link>
    </div>
  )
}

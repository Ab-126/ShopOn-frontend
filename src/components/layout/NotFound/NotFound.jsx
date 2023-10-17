import React from 'react'
import './NotFound.css'
import pagenotfound from '../../../images/pagenotfound.avif'

const NotFound = () => {
  return (
    <div className='pnf'>
      <img src={pagenotfound} alt="" />
      <h1>Page Not Found</h1>
    </div>
  )
}

export default NotFound

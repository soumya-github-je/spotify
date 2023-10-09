import React from 'react'
import {CheckOutlined} from "@ant-design/icons"
import "./authortopcard.css"
const AuthorTopCard = () => {
  return (
    <div className='author-top-card-container'>
      <div className='verified-container'>
      <CheckOutlined className='check-icon'/>
        <p className='verified-text'>Verified Artist</p>
      </div>
      <p className="author-top-card-artist-name">janet redger</p>
      <p className="author-top-card-listerners-count">1,157,580 monthly listeners</p>
    </div>
  )
}

export default AuthorTopCard
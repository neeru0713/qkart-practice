import React from 'react'
import SearchBar from './SearchBar'
import Button from './Button'

const Header = () => {
  return (
    <div className='header flex justify-between m-4'>
     <img src="logo_light.svg" alt="QKart-icon"></img>
     <SearchBar/>
     <div className='flex gap-4'>
       <Button name="LOGIN" type="secondary"/>
       <Button name="REGISTER" type="primary"/>
     </div>
    </div>
  )
}

export default Header
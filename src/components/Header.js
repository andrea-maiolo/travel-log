import React from 'react'

function Header(){
    return(
        <div className='header'>
            <img className="logo" src={require('./../images/logo.png')}/>
            <h1 className="title">My Travels</h1>
        </div>
    )
}

export default Header
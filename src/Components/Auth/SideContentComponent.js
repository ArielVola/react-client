import React from 'react'

export const SideContentComponent = ({ picture }) => {

    return (
        <div className='auth__side-content-container'>
            <img className='auth__side-content-img' src={picture} alt="Van Gogh art" />
        </div>
    )
}

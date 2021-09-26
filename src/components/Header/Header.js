import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {

    const parliamentIcon = <FontAwesomeIcon className='parliament-icon' icon={faLandmark} />

    return (
        <div className='header'>
            <div className='top-header'>
                <h1>Bangladesh</h1>
                <h3>Jatiyo Sangshad</h3>
            </div>

            <div className='bottom-header'>
                <h1>{parliamentIcon}10th Parliament Members <br />Of Bangladesh</h1>
                <p>2014-01-29-current</p>
            </div>
        
        </div>
    )
}

export default Header;
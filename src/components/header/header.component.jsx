import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.style.scss';

import {signout} from '../../firebase/firebase.utils';

const Header = ({ currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        {/* Sebelumnya Link bukan nav, krn ada warning jadi sy ganti */}
        <nav className='options' to='/options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            { currentUser ? 
            // <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div> 
            <div className='option' onClick={ () => signout()}>SIGN OUT</div> 
            : <Link className='option' to='/signin'>SIGN IN</Link>}
        </nav>
    </div>
)

export default Header;
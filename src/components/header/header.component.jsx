import React from 'react';
import {Link} from 'react-router-dom';

//importamos connect para poder aplicar el user-reducer en el header
import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';

import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT
                </div>
                : 
                <Link className='option' to="/register">SIGN IN</Link>
            }
            {
                currentUser?
                <Link className='option user' to="/userProfile">{currentUser.displayName}</Link>
                :
                ""
            }
            
        </div>
    </div>
)

const mapStateToProps = state => ({

    currentUser : state.user.currentUser
});

export default connect(mapStateToProps)(Header);
import React from 'react';
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faUserAlt, faAddressBook, faHistory, faSave, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  console.log(user)

  const logout = () => {
    signOut(auth);
  }

  return (
    <div className='container-xxl'>
      <div className=' pt-5'>
        <div className='d-flex justify-content-center'>
          <FontAwesomeIcon icon={faUserAlt} className='main-pro-pic' />
        </div>
        <div className='d-flex justify-content-center pt-3'>
          <h5>Hi</h5>
        </div>
        <div className='d-flex justify-content-center'>
          <h5>Abdullah al masud</h5>
        </div>
        <div className='d-flex justify-content-center'>
          <h5>{user.phoneNumber}</h5>
        </div>
      </div>
      <div className='py-5 dashboard'>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faUserAlt} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>My Profile</h6>
          </div>
        </div>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faAddressBook} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>Address</h6>
          </div>
        </div>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faListCheck} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>Order Histoty</h6>
          </div>
        </div>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faHistory} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>Your Transactions</h6>
          </div>
        </div>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faSave} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>Saved Items</h6>
          </div>
        </div>

        <div className='dashboard-item dashboard-logout'>
          <div className='dashboard-item-dev'>
            <Link to='/'>
              <FontAwesomeIcon onClick={logout} icon={faSignOut} className='dashboard-item-font dashboard-logout' />
            </Link>
          </div>
          <div>
            <h6 className='text-center pt-1 '>Logout</h6>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
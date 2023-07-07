import './sidebar.css';
import cloud from '../../assets/logo.png'
import { useState } from 'react';

const Sidebar = () => {
    const[menu, setMenu] = useState(false);

  return (
    <div className='sidebar'>
        <div className="first">
            <div className='logo'>
                <img src={cloud} alt="" />
            </div>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <span></span>
                <span></span>
            </div>
            <div className={!menu? "points" : 'points-active'}>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        </div>

        <div className="profile">
            <span>DK</span>
        </div>
    </div>
  )
}

export default Sidebar;
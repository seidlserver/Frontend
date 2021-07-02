import React from 'react';
import '../styles/Sidebar.scss';

function Sidebar(){
    return(
        <nav className="sidebar">
            <ul className="sidebar-content">
                <li className="sidebar-item">
                    Server
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;

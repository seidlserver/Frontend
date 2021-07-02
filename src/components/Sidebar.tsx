import React from 'react';
import '../styles/Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebar-content">
                <li className="sidebar-item">
                        <Link to="/server" className="sidebar-link">
                            <FontAwesomeIcon icon={faServer}/>
                            <span className="sidebar-text">Server</span>
                        </Link>

                </li>

                <li className="sidebar-item">
                        <Link to="/server" className="sidebar-link">
                            <FontAwesomeIcon icon={faServer}/>
                            <span className="sidebar-text">Server</span>
                        </Link>
                </li>

                <li className="sidebar-item">
                        <Link to="/server" className="sidebar-link">
                            <FontAwesomeIcon icon={faServer}/>
                            <span className="sidebar-text">Server</span>
                        </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

import React from 'react';
import '../styles/Layout.scss';
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'

type LayoutProps = {
    children: any
}

function Layout({children}:LayoutProps){
    return(
        <>
            <Topbar/>
            <div className="main">
                <Sidebar/>
                <div className="main-content">
                    {children}
                </div>
            </div>
            
        </>
    );
}

export default Layout;

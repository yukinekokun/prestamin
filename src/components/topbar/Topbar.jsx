import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Prestamin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone />
                    <span className="topIconBadge">3</span>
                </div>
                <div className="topbarIconContainer">
                <Language />
                    <span className="topIconBadge">3</span>
                </div>
                <div className="topbarIconContainer">
                <Settings />
                </div>
                <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?cs=srgb&dl=pexels-ihsan-adityawarman-1056251.jpg&fm=jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
    )
}

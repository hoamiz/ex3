import React from 'react';
import { MenuFoldOutlined } from '@ant-design/icons';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='menuIcon' >
                <MenuFoldOutlined className='icon' />
            </div>
            <div className='menuContent'>
                <div className="sidebarItem">Option 1</div>
                <div className="sidebarItem">Option 2</div>
                <div className="sidebarItem">Option 3</div>
                <div className="sidebarItem">Option 4</div>
            </div>
        </div>
    )
}
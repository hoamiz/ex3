import React from 'react';

export const Header = () => {
    const avaSrc = "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2019/09/cat.jpg"
    return (
        <header className="header">
            <div><img className='avatar' src={avaSrc} alt="avatar" /></div>
            <div className='userName'>userName</div>
        </header>
    )
}
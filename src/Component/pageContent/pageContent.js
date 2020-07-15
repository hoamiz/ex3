import React from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { MainContent } from './mainContent';

export const PageContent = () => {
    return (
        <div className="grid-container">
            <Header />
            <Sidebar />
            <MainContent />
        </div>
    )
}
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-7xl mx-auto px-4">
                {children}
            </div>
        </div>
    );
};

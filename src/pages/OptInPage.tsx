import React from 'react';
import { Layout } from '../components/Layout';
import { OptInForm } from '../components/OptInForm';

export const OptInPage: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-8 text-center animate-fade-in">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-6xl mx-auto">
                        Battle Tested YouTube Hacks To Drive Reliable Sales & Leads <br className="hidden md:block" /> For Your Business
                    </h1>
                    <p className="text-xl text-gray-300 font-medium">
                        Get battle tested strategies weekly delivered direct to your inbox
                    </p>
                </div>

                <div className="w-full max-w-md mx-auto">
                    <OptInForm />
                </div>
            </div>
        </Layout>
    );
};

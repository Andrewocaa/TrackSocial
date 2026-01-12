import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { OptInForm } from '../components/OptInForm';

export const OptInPage: React.FC = () => {
    useEffect(() => {
        // TrackFlow Base Script
        const meta = document.createElement('meta');
        meta.name = "tf-product-id";
        meta.content = "2b5716d1-4803-4725-b1c5-cd7030128c5d";
        document.head.appendChild(meta);

        const script = document.createElement('script');
        script.src = "https://www.trackflow.space/s/b.js";
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(meta);
            document.head.removeChild(script);
        };
    }, []);

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

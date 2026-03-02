import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { OptInForm } from '../components/OptInForm';

export const OptInPage: React.FC = () => {
    useEffect(() => {
        // TrackFlow Base Script
        const meta = document.createElement('meta');
        meta.name = "tf-product-id";
        meta.content = "0eed4c71-763b-4649-96ae-f45dbe080255";
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
                        Know Which Videos Make You Money
                    </h1>
                    <p className="text-xl text-gray-300 font-medium">
                        Tracks clicks, conversions, and revenue from your YouTube videos.<br className="hidden md:block" /> Finally answer the question that matters.
                    </p>
                    <p className="text-lg text-gray-400 font-medium pt-2">
                        Sign up for free access now
                    </p>
                </div>

                <div className="w-full max-w-md mx-auto">
                    <OptInForm />
                </div>
            </div>
        </Layout>
    );
};

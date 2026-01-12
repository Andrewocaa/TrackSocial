import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { CheckCircle } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
    useEffect(() => {
        // TrackFlow Conversion Script
        const metas = [
            { name: "tf-product-id", content: "2b5716d1-4803-4725-b1c5-cd7030128c5d" },
            { name: "tf-event", content: "form_submit" },
            { name: "tf-value", content: "undefined" }
        ].map(data => {
            const meta = document.createElement('meta');
            meta.name = data.name;
            meta.content = data.content;
            document.head.appendChild(meta);
            return meta;
        });

        const script = document.createElement('script');
        script.src = "https://www.trackflow.space/s/c.js";
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            metas.forEach(meta => document.head.removeChild(meta));
            document.head.removeChild(script);
        };
    }, []);

    return (
        <Layout>
            <div className="text-center space-y-6 animate-fade-in">
                <div className="flex justify-center">
                    <CheckCircle className="w-20 h-20 text-youtube-red" />
                </div>

                <h1 className="text-4xl font-bold">
                    Thanks for signing up!
                </h1>

                <p className="text-xl text-gray-400">
                    First strategy hitting your inbox momentarily.
                </p>

                <div className="pt-8">
                    <a
                        href="https://www.youtube.com/@Andrewocaa?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-youtube-red/50 text-white font-semibold py-4 px-8 rounded-xl transition-all group"
                    >
                        <span className="text-2xl"></span>
                        <span className="text-lg">
                            Back to YouTube: How this guy makes <span className="text-youtube-red">$535,000 per month</span> with a small channel
                        </span>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

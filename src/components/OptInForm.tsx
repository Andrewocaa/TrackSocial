import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const ROLES = [
    'Info business',
    'Agency Owner',
    'Full Time Content Creator',
    'SaaS Owner',
    'Absolute Beginner'
];

export const OptInForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        role: ROLES[0]
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (!formData.email || !formData.firstName) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        try {
            const { error: supabaseError } = await supabase
                .from('leads')
                .insert([
                    {
                        first_name: formData.firstName,
                        email: formData.email,
                        role: formData.role
                    }
                ]);

            if (supabaseError) {
                // Fallback for demo if table doesn't exist or permissions fail without keys
                console.error('Supabase error:', supabaseError);
                // We might want to show an error to user or just proceed for demo purposes if keys aren't set
                // But the requirement says "Validate email... Store... Redirect".
                // If it fails, I should show error.
                throw supabaseError;
            }

            navigate('/thank-you');
        } catch (err: any) {
            console.error('Submission error:', err);
            // If we are in "demo mode" without keys, we might want to still redirect?
            // No, let's be strict but helpful.
            if (err.message?.includes('violates row-level security') || err.message?.includes('API key')) {
                setError('Database connection failed. (Check console for details - missing keys?)');
            } else {
                setError('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-youtube-red transition-colors"
                    required
                />

                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-youtube-red transition-colors"
                    required
                />

                <label htmlFor="role" className="sr-only">I am a:</label>
                <div className="relative">
                    <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:border-youtube-red transition-colors cursor-pointer"
                    >
                        {ROLES.map(role => (
                            <option key={role} value={role} className="bg-charcoal">
                                {role}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        ▼
                    </div>
                </div>
            </div>

            {error && (
                <div className="text-youtube-red text-sm text-center">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-youtube-red hover:bg-youtube-dark text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
            >
                <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                <span className="text-lg uppercase tracking-wide">
                    {loading ? 'Subscribing...' : 'Subscribe'}
                </span>
            </button>

            <p className="text-white/30 text-xs text-center mt-2">
                100% Secure. No Spam. Unsubscribe Anytime.
            </p>
        </form>
    );
};

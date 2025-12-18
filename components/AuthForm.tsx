"use client";

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
    view: 'signin' | 'signup';
    onSuccess?: () => void;
    isModal?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ view, onSuccess, isModal = false }) => {
    const { login, signup, openModal } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            if (view === 'signin') {
                await login(email, password);
            } else {
                await signup(email, password, username);
            }

            // reset form
            setEmail('');
            setPassword('');
            setUsername('');

            if (onSuccess) {
                onSuccess();
            } else if (!isModal) {
                // If not modal (dedicated page), redirect to home
                router.push('/');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };

    const handleLinkClick = (targetView: 'signin' | 'signup') => {
        if (isModal) {
            openModal(targetView);
            setError(''); // Clear error when switching views
        }
        // If not modal, we use Next.js Links in the render below
    };

    return (
        <div className="w-full">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    {view === 'signin' ? 'Welcome Back' : 'Create an Account'}
                </h2>
                <p className="text-gray-500 mt-2">
                    {view === 'signin' ? 'Sign in to continue to your feed' : 'Join the community to start posting'}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 animate-fade-in-up">
                        {error}
                    </div>
                )}
                {view === 'signup' && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Choose a username"
                            required
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                        required={view === 'signup'}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your password"
                        required={view === 'signup'}
                    />
                </div>

                <Button type="submit" fullWidth className="mt-2 py-2.5">
                    {view === 'signin' ? 'Sign In' : 'Sign Up'}
                </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
                {view === 'signin' ? (
                    <>
                        Don't have an account?{' '}
                        {isModal ? (
                            <button
                                onClick={() => handleLinkClick('signup')}
                                className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                            >
                                Sign up
                            </button>
                        ) : (
                            <Link href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                                Sign up
                            </Link>
                        )}
                    </>
                ) : (
                    <>
                        Already have an account?{' '}
                        {isModal ? (
                            <button
                                onClick={() => handleLinkClick('signin')}
                                className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                            >
                                Sign in
                            </button>
                        ) : (
                            <Link href="/sign-in" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                                Sign in
                            </Link>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthForm;

"use client";

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

const Header = () => {
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 h-12">
            <div className="mx-auto px-4 h-full flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/assets/mouse.png" alt="Mouse Logo" className="h-6" />
                    <span className="text-xl font-bold tracking-tight text-gray-900">foo-rum</span>
                </Link>

                <div>
                    {isAuthenticated && user ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700 font-medium hidden sm:block">{user.name}</span>
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-9 h-9 rounded-full border border-gray-200"
                            />
                            <button
                                onClick={logout}
                                className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
                                title="Sign Out"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <Link href="/signin">
                            <Button variant="ghost" className="font-semibold text-gray-900">
                                Login
                                <span className="ml-2">→</span>
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

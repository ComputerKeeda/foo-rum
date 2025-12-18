"use client";

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const SignupModal = () => {
    const { signup, openModal } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await signup(email, password, username);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };

    return (
        <div className="flex flex-col gap-1 w-full max-w-[500px] rounded-2xl shadow-sm overflow-hidden bg-gray-100 border-8 border-gray-100">
            {/* Top Section */}
            <div className="p-8 flex flex-col items-center w-full bg-white rounded-2xl">
                {/* Icon */}
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-50">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-900"
                    >
                        <path
                            d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.4142 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 17L15 12L10 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15 12H3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Header */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an account to continue</h2>
                <p className="text-gray-400 text-sm text-center font-medium">
                    Create an account to access all the features on this app
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full mt-10 space-y-6 text-left">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 animate-fade-in-up">
                            {error}
                        </div>
                    )}
                    <div className="space-y-2">
                        <label className="text-[15px] font-bold text-gray-900 block">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Choose a username"
                            className="w-full h-10 px-4 bg-gray-100 rounded-lg border-none focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[15px] font-bold text-gray-900 block">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full h-10 px-4 bg-gray-100 rounded-lg border-none focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[15px] font-bold text-gray-900 block">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full h-10 px-4 bg-gray-100 rounded-lg border-none focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium"
                            required
                        />
                    </div>

                    <button className="w-full h-10 bg-[#545df3] hover:bg-[#4a53e0] transition-colors text-white rounded-lg font-bold text-sm mt-2">
                        Sign Up
                    </button>
                </form>
            </div>

            {/* Footer Section */}
            <div className="bg-gray-100 py-2 px-8 text-center">
                <p className="text-[#6d6d6d] text-sm font-medium">
                    Already have an account?{" "}
                    <button
                        onClick={() => openModal('signin')}
                        className="text-[#545df3] font-bold hover:underline"
                    >
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignupModal;

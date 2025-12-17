"use client";

import React from "react";
import Link from "next/link";

const SigninModal = () => {
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in to continue</h2>
                <p className="text-gray-400 text-sm text-center font-medium">
                    Sign in to access all the features on this app
                </p>

                {/* Form */}
                <div className="w-full mt-10 space-y-6 text-left">
                    <div className="space-y-2">
                        <label className="text-[15px] font-bold text-gray-900 block">
                            Email or username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email or username"
                            className="w-full h-10 px-4 bg-gray-100 rounded-lg border-none focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[15px] font-bold text-gray-900 block">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-10 px-4 bg-gray-100 rounded-lg border-none focus:ring-0 focus:outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium"
                        />
                    </div>

                    <button className="w-full h-10 bg-[#545df3] hover:bg-[#4a53e0] transition-colors text-white rounded-lg font-bold text-sm mt-2">
                        Sign In
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gray-100 py-2 px-8 text-center">
                <p className="text-[#6d6d6d] text-sm font-medium">
                    Do not have and account?{" "}
                    <Link href="/signup" className="text-[#545df3] font-bold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SigninModal;

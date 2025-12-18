"use client";

import React from 'react';
import { useAuth } from '../context/AuthContext';
import SigninModal from './signin/modal';
import SignupModal from './signup/modal';

const AuthModal = () => {
    const { isModalOpen, closeModal, modalView } = useAuth();

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
            <div className="relative animate-fade-in-up">
                {/* Close button positioned relative to the modal content */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 z-10"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {modalView === 'signin' ? <SigninModal /> : <SignupModal />}
            </div>
        </div>
    );
};

export default AuthModal;

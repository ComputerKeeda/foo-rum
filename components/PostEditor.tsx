"use client";

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import { Bold, Camera, Italic, Mic, Plus, Send, SendHorizontal, Trash2, Underline } from 'lucide-react';

const PostEditor = ({ onPostCreate }: { onPostCreate: (content: string) => void }) => {
    const { isAuthenticated, openModal } = useAuth();
    const [content, setContent] = useState('');

    const handleInteraction = () => {
        if (!isAuthenticated) {
            openModal('signin');
            return false;
        }
        return true;
    };

    const showNotImplemented = () => {
        if (handleInteraction()) {
            alert('Function not implemented');
        }
    };

    const handlePublish = () => {
        if (handleInteraction()) {
            if (!content.trim()) return;
            onPostCreate(content);
            setContent('');
        }
    };

    return (
        <div
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 transition-shadow hover:shadow-md"
            onClick={() => !isAuthenticated && openModal('signin')}
        >
            <div className="mb-4">
                {/* Options */}
                <div className="Options pb-2 flex items-center justify-between">
                    <div className="flex items-center rounded-lg bg-gray-100 p-1 space-x-2">
                        <select name="" id="" className="bg-white px-2 py-1 rounded-lg ">
                            <option value="Paragraph">Paragraph </option>
                            <option value="Heading">Heading </option>
                        </select>
                        <button
                        onClick={(e) => { e.stopPropagation(); showNotImplemented(); }}
                        className="p-2 text-gray-500 bg-white hover:cursor-pointer rounded-lg transition-colors"
                        title="Bold"
                        >
                            <Bold size={16} />
                        </button>
                        <button
                        onClick={(e) => { e.stopPropagation(); showNotImplemented(); }}
                        className="p-2 text-gray-500 hover:cursor-pointer rounded-lg transition-colors"
                        title="Italic"
                        >
                            <Italic size={16} />
                        </button>
                        <button
                        onClick={(e) => { e.stopPropagation(); showNotImplemented(); }}
                        className="p-2 text-gray-500 hover:cursor-pointer rounded-lg transition-colors"
                        title="Underline"
                        >
                            <Underline size={16} />
                        </button>
                    </div>
                    <div className="delete-icon flex items-center space-x-2">
                        <button
                        onClick={(e) => { e.stopPropagation(); showNotImplemented(); }}
                        className="p-2 text-red-500 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
                        title="Delete"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="How are you feeling today?"
                    className="w-full p-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all resize-none h-24"
                />
            </div>

            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); showNotImplemented(); }}
                        className="p-2 text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                        title="Add"
                    >
                        <Plus />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); showNotImplemented(); }}
                        className="p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors"
                        title="Microphone"
                    >
                        <Mic />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); showNotImplemented(); }}
                        className="p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors"
                        title="Video"
                    >
                        <Camera />
                    </button>

                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); handlePublish(); }}
                    disabled={!content.trim() && isAuthenticated}
                >
                    <SendHorizontal color='blue' />
                </button>
            </div>
        </div>
    );
};

export default PostEditor;

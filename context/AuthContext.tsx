"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Mock User Interface
export interface User {
    id: string;
    name: string;
    username: string;
    avatar: string; // URL to avatar image
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email?: string, password?: string) => Promise<void>;
    signup: (email?: string, password?: string, username?: string) => Promise<void>;
    logout: () => void;
    // Modal State
    isModalOpen: boolean;
    modalView: "signin" | "signup";
    openModal: (view?: "signin" | "signup") => void;
    closeModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalView, setModalView] = useState<"signin" | "signup">("signin");

    // Simulate checking for existing session
    useEffect(() => {
        const checkSession = async () => {
            // transform this into a real check later
            await new Promise((resolve) => setTimeout(resolve, 500));
            // For now, start unauthenticated
            setIsLoading(false);
        };
        checkSession();
    }, []);

    const login = async (email?: string, password?: string) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Test Accounts Logic
        if (email === "demo@example.com" && password === "password123") {
            setUser({
                id: "demo_user",
                name: "Demo User",
                username: "demo_user",
                avatar: "https://i.pravatar.cc/150?u=demo",
            });
        } else if (email === "test@user.com" && password === "testpass") {
            setUser({
                id: "test_user",
                name: "Test User",
                username: "test_user",
                avatar: "https://i.pravatar.cc/150?u=test",
            });
        } else {
            setIsLoading(false);
            throw new Error("Invalid email or password");
        }

        setIsLoading(false);
        closeModal();
    };

    const signup = async (email?: string, password?: string, username?: string) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));

        const mockUser: User = {
            id: Date.now().toString(),
            name: username || "New User",
            username: (username || "new_user").toLowerCase().replace(/\s/g, "_"),
            avatar: `https://i.pravatar.cc/150?u=${username || 'newuser'}`,
        };

        setUser(mockUser);
        setIsLoading(false);
        closeModal();
    };

    const logout = () => {
        setUser(null);
        // Optional: redirect to home if on protected route
    };

    const openModal = (view: "signin" | "signup" = "signin") => {
        setModalView(view);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                signup,
                logout,
                isModalOpen,
                modalView,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';
import AuthModal from '../components/AuthModal';

export const metadata: Metadata = {
  title: 'Feha Feed',
  description: 'A social feed application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-gray-900 font-sans antialiased">
        <AuthProvider>
          <main className="">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

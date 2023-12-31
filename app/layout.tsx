import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';

const inter = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientOnly>
                    <Modal />
                    <Navbar />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}

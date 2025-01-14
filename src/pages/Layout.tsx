import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Navigation/Footer';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen max-h-screen bg-amber-50">
            <Navbar />
            <main className="w-full overflow-y-auto mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
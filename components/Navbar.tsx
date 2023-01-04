import Link from "next/link"
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex w-full justify-between container mx-auto p-4">
            <div className="text-green font-medium text-xl flex items-center">
                Pipedrive Masters
            </div>
            <div
                className={`items-center fixed h-full top-14 shadow-lg lg:shadow-none bg-white w-72 lg:w-auto lg:static lg:flex transform duration-500 ${
                    isOpen ? "block opacity-100 right-0" : "-right-72"
                }`}
            >
                <Link
                    className="block p-4 text-sm text-gray-400 hover:text-violet hover:underline transform duration-500"
                    href="/"
                >
                    Unser Service
                </Link>
                <Link
                    className="block p-4 text-sm text-gray-400 hover:text-violet hover:underline transform duration-500"
                    href="/"
                >
                    Ablauf
                </Link>
                <Link
                    className="block p-4 text-sm text-gray-400 hover:text-violet hover:underline transform duration-500"
                    href="/"
                >
                    Case Studies
                </Link>
                <Link
                    className="block p-4 text-sm text-gray-400 hover:text-violet hover:underline transform duration-500"
                    href="/"
                >
                    Pricing
                </Link>
                <Link
                    className="block p-4 text-sm text-gray-400 hover:text-violet hover:underline transform duration-500"
                    href="/"
                >
                    FAQs
                </Link>
            </div>
            <div className="hidden lg:block">
                <Link
                    className="block bg-violet p-4 rounded-lg text-white"
                    href="/"
                >
                    Gespräch vereinbaren
                </Link>
            </div>
            <button
                className="lg:hidden flex flex-col justify-center gap-2 w-min"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`h-1 w-6 bg-black transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                    }`}
                ></div>
                <div
                    className={`h-1 w-6 bg-black transform duration-500 ${
                        isOpen ? "-rotate-45 -translate-y-3" : ""
                    }`}
                ></div>
            </button>
        </nav>
    );
}
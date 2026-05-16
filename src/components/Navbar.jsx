import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <div className="flex item-center space-x-1 group cursor-pointer">
                    <div>
                        <img src={logo} alt="Logo" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span classname="text-white">Code</span>
                        <span className="text-blue-400">Flow</span>
                    </span>
                </div>

                {/* Nav Links*/}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <a href="#features"
                        className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300">
                        Features
                    </a>

                    <a href="#pricing"
                        className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300">
                        Pricing
                    </a>

                    <a href="#testimonials"
                        className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300">
                        Testimonials
                    </a>

                </div>

                <button className="md:hidden p-2 text-gray-300 hover:text-white"
                    onClickCapture={() => setMobileMenuIsOpen((prev) => !prev)}>
                    {mobileMenuIsOpen ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}


                </button>


            </div>
        </div>
        {mobileMenuIsOpen &&
            <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                    <a href="#features"
                        onClickCapture={() => setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300">
                        Features
                    </a>

                    <a href="#pricing"
                        onClickCapture={() => setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300">
                        Pricing
                    </a>

                    <a href="#testimonials"
                        onClickCapture={() => setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300">
                        Testimonials
                    </a>
                </div>
            </div>
        }
    </nav>;
}
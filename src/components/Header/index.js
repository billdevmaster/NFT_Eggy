import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaDiscord } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <header className="bg-primary relative z-20">
                <div className="container mx-auto">
                    <nav className="site-menus">
                        <ul className="flex items-center justify-end">
                            <li className="hidden md:block mx-12"><NavLink to="/" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Home</NavLink></li>
                            <li className="hidden md:block mx-12"><NavLink to="/#rodamap" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Roadmap</NavLink></li>
                            <li className="hidden md:block mx-12"><NavLink to="/faq" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Faq</NavLink></li>
                            <li className="hidden md:block mx-12"><NavLink to="/mint" className="text-white font-bold text-2xl uppercase hover:text-opacity-70">Mint</NavLink></li>
                            <li className="ml-24">
                                <button className="flex items-center bg-transparent rounded-full py-2 px-3 border-4 border-white hover:border-opacity-70 font-bold text-white text-2xl">
                                    <FaDiscord size={24} className="mr-4 text-white" />
                                    Join Discord
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;

"use client"

import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();

    const [isMobileMenuOpen, setIsMobileMeneOpen] = useState<boolean>(false);
    const pathName = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMeneOpen(!isMobileMenuOpen);
    }

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/project", label: "Projects" },
        { href: "/blog", label: "Blogs" },
        { href: "/contact", label: "Contact" },
    ]
    return (
        <>
            <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800  z-50'>
                <div className='container max-w-7xl mx-auto px-4'>
                    {/* Navbar menu */}
                    <div className='flex items-center justify-between h-16'>
                        {/* desktop menu  */}
                        <Link href="/" className='text-xl font-bold text-primary '>My<span className='text-blue-700'>Portfolio&trade;</span> </Link>

                        {/* desktop menu item  */}

                        <div className='hidden md:flex items-center space-x-8 '>
                            {
                                menuItems.map((item) => {
                                    const isActive = pathName === item.href;
                                    return (
                                        <Link key={item.href} href={item.href} className={`hover:text-blue-900 transition-colors ${isActive ? 'text-primary font-medium' : ''}`}>{item.label}</Link>
                                    )
                                })
                            }
                            <button onClick={toggleTheme} className='p-1 rounded-lg dark:text-white hover:text-primary cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
                                {
                                    theme === "dark" ? (
                                        <SunIcon className='w-5 h-5' />
                                    ) : (
                                        <MoonIcon className='w-5 h-5' />
                                    )
                                }
                            </button>
                        </div>

                        {/* mobile menu button */}

                        <button onClick={toggleMobileMenu} className='md:hidden p-2 rounded-lg text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                            {
                                isMobileMenuOpen ? (<XMarkIcon className='w-6 h-6' />) : (<Bars3Icon className='w-6 h-6' />)
                            }
                        </button>
                    </div>

                    {/* mobile menu items  */}

                    {
                        isMobileMenuOpen && (
                            <div className='md:hidden'>
                                <div className='py-4 space-y-4'>
                                    {
                                        menuItems.map((item, index) => {
                                            return (
                                                <div key={index} onClick={toggleMobileMenu}>
                                                    <Link href={item.href} className='block hover:text-primary transition-colors'>{item.label}</Link>
                                                </div>
                                            )
                                        })
                                    }

                                    <div onClick={toggleMobileMenu}>
                                        <button onClick={toggleTheme} className='flex items-center py-2  cursor-pointer hover:text-primary transition-colors'>
                                            {
                                                theme === "dark" ? (
                                                    <><SunIcon className='w-5 h-5 mr-1' /> Light Mode</>
                                                ) : (
                                                    <><MoonIcon className='w-5 h-5 mr-1' /> Dark Mode</>
                                                )
                                            }
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </nav>
        </>
    );

}

export default Navbar;

"use client"; // Asegurar que este componente se renderiza en el cliente

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon, FaBars, FaTimes, FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'; // Iconos

const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Sincronizar con localStorage para recordar el tema elegido
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Elementos del menu
    const menuItems = (
        <>
            <Link href="about" onClick={closeMenu} className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white">
                Sobre Mí
            </Link>
            <Link href="experience" onClick={closeMenu} className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white">
                Experiencia
            </Link>
            <Link href="strategy" onClick={closeMenu} className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white">
                Estrategia
            </Link>
            <Link href="goals" onClick={closeMenu} className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white">
                Metas
            </Link>
        </>
    );

    // Enlaces de redes sociales
    const socialLinks = (
        <div className="mt-4 flex justify-around  gap-2">
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-green-500">
                <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-500">
                <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/tu-instagram" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-pink-500">
                <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://facebook.com/tu-facebook" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-blue-700">
                <FaFacebook className="h-6 w-6" />
            </a>
        </div>
    );

    return (
        <header className="border-b bg-white dark:bg-bagroundDarkPlus transition-colors">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-primary dark:text-white">
                    JeffTrade
                </h1>
                <nav className="hidden md:flex space-x-6">
                    {menuItems}
                </nav>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <FaMoon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                        ) : (
                            <FaSun className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                        )}
                    </button>
                    {/* Icono de la amburguesitaaaaaaaa */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full bg-gray-100 dark:bg-bagroundDarkPlus hover:bg-gray-200 dark:hover:bg-bagroundDark  md:hidden"
                        aria-label="Toggle Menu"
                    >
                        <FaBars className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </button>
                </div>
            </div>
            <div className={`fixed inset-0  bg-opacity-50 z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white dark:bg-bagroundDarkPlus shadow-lg flex flex-col">
                    <button
                        onClick={closeMenu}
                        className="p-4 text-right text-textlight dark:text-textDark dark:text-gray-200"
                    >
                        <FaTimes className="h-6 w-6" />
                    </button>
                    <nav className="flex flex-col space-y-4 p-4 flex-grow">
                        {menuItems}
                    </nav>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-textlight dark:text-textDark">
                            ¿Te interesa encontrarme en?
                        </h3>
                        {socialLinks}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

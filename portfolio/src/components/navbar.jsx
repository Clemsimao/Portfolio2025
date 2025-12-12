import { assets } from '@/assets/assets'
import ThemeToggle from './theme-toggle'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {mounted && resolvedTheme !== 'dark' && (
                <div className='fixed top-0 right-0 w-full -z-10 translate-y-[-80%]'>
                    <Image src={assets.header_bg_color} alt='' className='w-full' />
                </div>
            )}

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-black/90 dark:shadow-white/20" : ""}`}>
                <a href="#top" className="mr-14 cursor-pointer font-Outfit font-bold text-4xl flex items-baseline gap-0.5">
                    <span className="text-black dark:text-[#F0AD4E]">Clément</span>
                    <span className="text-[#F0AD4E] dark:text-white">.</span>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm dark:bg-transparent dark:border dark:border-white/50"} dark:text-white`}>
                    <li><a className='font-Ovo hover:text-[#F0AD4E] dark:text-white' href="#top">Accueil</a></li>
                    <li><a className='font-Ovo hover:text-[#F0AD4E] dark:text-white' href="#about">Moi</a></li>
                    <li><a className='font-Ovo hover:text-[#F0AD4E] dark:text-white' href="#work">Mes projets</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 dark:text-white dark:bg-black'>
                        Contact
                        <Image src={assets.arrow_icon} alt="" className='w-3 block dark:hidden' />
                        <Image src={assets.arrow_icon_dark} alt="" className='w-3 hidden dark:block' />
                    </a>

                    <ThemeToggle />

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6 dark:invert' />
                    </button>
                </div>
            </nav>

            {/* Menu pour les petits écrans */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-orange-50 transition duration-500 dark:bg-black dark:text-white'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt='' className='w-5 cursor-pointer dark:invert' />
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Accueil</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">Moi</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#work">Mes projets</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contactez moi</a></li>
            </ul>
        </>
    )
}

export default Navbar
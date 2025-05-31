import { assets } from '@/assests/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () =>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsCroll(true)
            }else{
                setIsCroll(false)
            }
        })
    },[])

    return (
        <>
        <div className='fixed top-0 right-0 w-11:12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='' className='w-full'/>
        </div>

        
        </>
    )
}
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='w-full h-10 flex items-center justify-between p-12 mb-26 sm-px-4 xl:p-8 xl:mt-4'>
            <section className='rotating-div'>
                <Link href='/'>
                    <Image
                        alt='logo'
                        src='/images/logo.svg'
                        width={70}
                        height={70}
                    /></Link>
            </section>
            <section className='md:block hidden'>
                <ul className='flex items-center justify-center flex-row flex-gap'>
                    <li className='text-xl hover:text-red-200'><Link href='/about'>About</Link></li>
                    <li className='text-xl hover:text-red-200'><Link href='/images/soleyflores.pdf' target='_blank' rel='noreferrer'>Resume</Link></li>
                    <li className='text-xl hover:text-red-200'><Link target='_blank' rel='noreferrer' href='http://www.linkedin.com/in/soleyflores'>LinkedIn</Link></li>
                </ul>
            </section>
            <div className="block text-2xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}><FiAlignJustify/></div>
            <nav className={`hidden ${menuOpen ? 'navbar--open' : 'navbar--closed'}`}>
                <li className='text-xl hover:text-red-200 list-none'><Link href='/about'>About</Link></li>
                <li className='text-xl hover:text-red-200 list-none'><Link href='/images/soleyflores.pdf' target='_blank' rel='noreferrer'>Resume</Link></li>
                <li className='text-xl hover:text-red-200 list-none'><Link target='_blank' rel='noreferrer' href='http://www.linkedin.com/in/soleyflores'>LinkedIn</Link></li>
            </nav>
        </nav>
    );
};

export default NavBar;

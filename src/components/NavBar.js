import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='w-full h-10 flex items-center justify-between p-16 mb-26'>
            <section className='rotating-div'>
                <Link href='/'>
                    <Image
                        alt='logo'
                        src='/images/logo.svg'
                        width={70}
                        height={70}
                    /></Link>
            </section>
            <section>
                <ul className='flex items-center justify-center flex-row flex-gap'>
                    <li className='text-xl'><Link href='/about'>About</Link></li>
                    <li className='text-xl'>Resume</li>
                    <li className='text-xl'>LinkedIn</li>
                </ul>
            </section>
        </nav>
    );
};

export default NavBar;

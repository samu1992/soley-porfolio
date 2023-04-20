import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin  } from 'react-feather';
import { SlSocialBehance } from 'react-icons/sl';

const Footer = () => {
    return (
        <footer className='flex w-full h-500 items-center justify-center p-10 flex-col gap-16 mt-32'>
            <section><h2 className='text-4xl font-bold'>Get in touch</h2></section>
            <div><a  href="mailto:soleyflores.ar@gmail.com" className='text-2xl md:text-4xl lg:text-6xl hover:text-red-200'>soleyflores.ar@gmail.com ↗</a></div>
            <section className='flex gap-16 items-center justify-center'>
                <div>
                    <a className='hover:text-red-200' target="_blank" 
                    rel='noreferrer' 
                    href="http://www.linkedin.com/in/soleyflores">
                        <Linkedin size={40}/>
                    </a>
                    </div>
                <div><a className='hover:text-red-200' target="_blank" rel='noreferrer' href="https://www.behance.net/soleyflores"><SlSocialBehance size={40}/></a></div>
                <div><a className='hover:text-red-200' target="_blank" rel='noreferrer' href="https://www.instagram.com/baxs_20/"><Instagram size={40}/></a></div>
            </section>
            <div className='rotating-div'><Image 
            src='/images/logo.svg' 
            alt='logo'
            width={250}
            height={250}/>
            </div>
        </footer>
    )
}

export default Footer
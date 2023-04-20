import React from 'react';
import NavBar from './NavBar';
//import Footer from './Footer';




const Layout = ({ children }) => {
  return (
    <main className='w-full p-0 m-0 h-screen'>
        <NavBar/>
        {children}
        {/* <Footer/> */}
    </main>
  )
}

export default Layout
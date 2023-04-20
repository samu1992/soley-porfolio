import React from 'react';
import Card from './Card';

const Proyect = () => {
  return (
    <main className="flex items-center justify-center  p-8 md:p-10 xl:p-14 lg:p-16 xl:p-20 2xl:p-24 gap-24 flex-wrap">
        <section  className='flex flex-wrap items-center justify-center gap-24 xl:items-start xl:justify-start lg:items-center lg:justify-center md:items-center md:justify-center'>
        <Card
        imagenSrc='/images/Canil.svg'
        titulo='Canil'
        descripcion='A branding of a pet friendly coffee shop'
        pdfSrc='/images/Canil.pdf'/>
        <Card
        imagenSrc='/images/Petxi.svg'
        titulo='Petxi'
        prototypeSrc='https://www.figma.com/proto/tFyHbE6uJt1QIabLNTBqMa/Patrones---Flores?page-id=1087%3A19972&node-id=1087%3A22314&starting-point-node-id=1087%3A22780&scaling=scale-down'
        descripcion='A mobile app for transportation services with pets.'
        pdfSrc='/images/Petxi.pdf'/>
        </section>
        <section  className='flex flex-wrap items-center justify-center gap-24 xl:items-start xl:justify-start lg:items-center lg:justify-center md:items-center md:justify-center'>
        <Card
        imagenSrc='/images/IMDB.svg'
        titulo='IMDb'
        prototypeSrc='https://www.figma.com/proto/V6IYAAEmjAMT78lkNetwwV/Redise%C3%B1o-IMDb?page-id=933%3A6514&node-id=933%3A6516&viewport=290%2C228%2C0.04&scaling=scale-down&starting-point-node-id=933%3A6516'
        descripcion='A redesign proposal for the IMDb website.'
        pdfSrc='/images/IMDb.pdf'/>
        <Card
        imagenSrc='/images/DD.svg'
        titulo='Digita Detox app'
        descripcion='Design System'
        pdfSrc='/images/IMDb.pdf'/>
        </section>
    </main>
  )
}

export default Proyect
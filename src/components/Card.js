import React from 'react';
import Image from 'next/image';
//import { useEffect, useState } from 'react';


const Card = ({ imagenSrc, titulo, descripcion, pdfSrc, prototypeSrc }) => {
    /* const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      // Open the pop-up window
    } else {
      // Close the pop-up window
    }
  }, [isPopupOpen]); */
    return (
        <article className='flex flex-col items-center justify-center gap-4'>
            <div className="transform hover">
                <a target='_blank' rel='noreferrer' href={pdfSrc}>
                    <Image
                        alt={`Error al cargar portada del proyecto ${titulo}`}
                        src={imagenSrc}
                        className='object-cover inset-0'
                        width={500}
                        height={600} />
                </a>
            </div>
            <div className="flex items-start justify-start flex-col w-full">
                <h2 className="text-xl font-bold">{titulo}</h2>
                {prototypeSrc && <a className='hover:text-red-200' target='_blank' rel="noreferrer" href={prototypeSrc}>Check prototype ↗</a>}
                <p className="">{descripcion}</p>
            </div>
            {/* <button onClick={() => setIsPopupOpen(true)}>Open popup</button>
            {isPopupOpen && (
                <div style={{ backgroundColor: "white", opacity: 0.5, position: "absolute", zIndex: 100 }}>
                    <h2>hola</h2>
                    <p>que lo que</p>
                    <button onClick={() => setIsPopupOpen(false)}>Close popup</button>
                </div>
            )} */}
        </article>
    )
}

export default Card
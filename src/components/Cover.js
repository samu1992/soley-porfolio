import Image from 'next/image';

const Cover = () => {
    return (
        <aside className='flex w-full items-center justify-center flex-row mt-16 flex-wrap gap-6 p-16 sm-px-4'>
            <section className='flex flex-col gap-8 w-full md:w-1/2 lg:w-1/3'>
                <p className='text-xl my-text-color'>Hello! My name is</p>
                <h1><strong className='text-6xl my-text-color'>Soley Flores</strong></h1>
                <p className='text-xl my-text-color tracking'> A UX/UI Designer enthusiastic about creating attractive
                    UI’s while finding the balance between impact and usability.</p>
            </section>
            <div className=''><Image 
            src='/images/Cofesito.svg' 
            alt='error en cargar mi foto personal'
            width={500}
            height={500}/>
            </div>
        </aside>
    )
}

export default Cover
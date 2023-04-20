/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layoutcomponents';

const About = () => {
  return (
    <Layout>
    <main className='flex w-full items-center justify-center p-2 flex-col gap-8 xl:gap-16 mt-6 my-text-color tracking xl:p-32 lg:p-24'>
            <section className='flex items-center justify-center flex-row gap-4 w-full lg:w-3/4 mb-20 text-xl my-text-color flex-wrap'>
                <Image src='/images/ProfilePhoto.png' alt='error en cargar mi foto (soley-flores)' width={250} height={250} />
                <p className='text-lg w-3/4 md:text-xl md:w-1/2'><strong>Soley Flores</strong> is a Venezuelan UX/UI Designer based in Buenos Aires,
                    Argentina, and, yes, she does have an accent (according to her friends) that still hasn't
                    stopped her from speaking English.</p>
            </section>
            <section className='flex items-center justify-center flex-row gap-4 w-full lg:w-3/4 mb-20 text-xl my-text-color flex-wrap'>
                <p className='text-lg w-3/4 md:text-xl md:w-1/2'>Soley would describe herself as a creative, driven, and highly motivated individual with a
                    strong passion for designing beautiful UIs and user experiences. Her experience ranges from
                    being a spinning instructor, serving at restaurants, providing customer services, and designing
                    graphics for a friend's brand. All these experiences allowed her to diversify her outlook, build
                    more empathy toward users and pay attention to details.</p>
                <Image src='/images/ProfilePhoto2.png' alt='error en cargar mi foto (soley-flores)' width={250} height={250} />
            </section>
            <section className='flex items-center justify-center w-full lg:w-3/4 mb-20'>
                <p className='text-lg w-3/4 md:text-xl'> As a UX/UI Designer, she has a solid understanding of the design process, including research, wireframing,
                    prototyping, and user testing. She believes that creating user-centered designs will solve real problems
                    improving the user experience and enhancing the overall aesthetic appeal of the product. Above all,
                    Soley has a keen eye for details, and she takes pride in her ability to create visually compelling
                    designs that are intuitive, easy to use, and accessible.</p>
            </section>
            <section className='flex items-center justify-center flex-row gap-8 md:gap-16 w-full lg:w-3/4 mb-20 text-xl my-text-color flex-wrap'>
                <Image src='/images/Pino.png' alt='error en cargar la foto de mi perro' width={250} height={250} />
                <Image src='/images/Flores.png' alt='error en cargar imagen de flores' width={250} height={250} />
                <Image src='/images/Menta.png' alt='error en cargar la foto de mi perro' width={250} height={250} />
            </section>
            <section className='flex items-start justify-start gap-4 w-full lg:w-3/4 mb-20 text-xl my-text-color flex-col p-12 lg:pl-32 md:pl-18'>
                <h4 className='font-bold'>Fun facts!</h4>
                <ul className='text-lg w-3/4 md:text-xl md:w-full list-disc'>
                    <li>Outside design, you can find her walking her dog Pino, and he's not shy to ask you to pet him.</li>
                    <li>Soley loves to explore new things on Pinterest.</li>
                    <li>She is obsessed with greyhounds and decided to volunteer to be a foster home.</li>
                </ul>
            </section>
            <section className='flex items-start justify-start flex-col gap-4 w-full lg:w-3/4 mb-40 flex-wrap p-12 lg:pl-32 md:pl-18'>
                <p className='text-lg w-3/4 md:text-xl md:w-full'>Soley is always looking to challenge herself and take on new projects. She is open to feedback
                    and enjoys working in a collaborative environment</p>
                    <strong>Feel free to contact her. Thanks for coming over!</strong>
            </section>
        </main>
        </Layout>
)
}

export default About
import React from 'react';
import Image from 'next/image';
import { Boton } from '@/components/boton'; // Asegúrate de que la ruta del botón sea correcta

const Welcome: React.FC = () => {
    const handleLearnMore = () => {
        console.log('¡Aprende más sobre mí!');
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 bg-white dark:bg-bagroundDark">
            {/* Texto de bienvenida */}
            <div className="md:w-1/2 text-left md:text-left flex flex-col justify-center md:mr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-bagroundDark dark:text-white mb-6">
                    Bienvenido a mi <br /> viaje en el trading
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                    Soy un trader enfocado en aprender y ser rentable de manera realista. Quiero demostrar que con dedicación se puede lograr. Actualmente sigo formándome y espero inspirar a otros a ver lo fascinante de esta profesión 🧡.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Boton onClick={handleLearnMore}>Ver más</Boton>
                </div>
            </div>

            {/* Imagen optimizada con next/image */}
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]"> {/* Ajuste del tamaño de la imagen */}
                    <Image
                        src="/img/juntos.png"
                        alt="Imagen de trading"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Welcome;

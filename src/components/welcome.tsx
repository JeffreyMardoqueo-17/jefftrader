import React from 'react';
import Image from 'next/image'; // Importamos el componente Image de Next.js
import { Boton } from '@/components/boton'; // Asegúrate de que la ruta del botón sea correcta

const Welcome: React.FC = () => {
    // Aquí puedes manejar el clic del botón
    const handleLearnMore = () => {
        console.log('¡Aprende más sobre mí!');
    };

    return (
        <section className="flex flex-col md:flex-row min-h-full px-4 bg-white dark:bg-bagroundDark mt-[10%]">
            {/* Texto de bienvenida */}
            <div className="md:w-1/2 md:text-left flex flex-col justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {/* Welcome to My <br /> Trading Journey */}
                    Bienvenido a mi <br /> viaje en el trading
                </h1>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Soy un trader enfocado en aprender y ser rentable de manera realista. Quiero demostrar que con dedicación se puede lograr. Actualmente sigo formándome y espero inspirar a otros a ver lo fascinante de esta profesión 🧡.
                </p>
                {/* Botón reutilizable */}
                <Boton onClick={handleLearnMore}>Ver más</Boton>
            </div>

            {/* Imagen optimizada con next/image */}
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                <Image
                    src="/img/juntos.png"
                    alt="Imagen de trading"
                    width={320}
                    height={320}
                    className="rounded-full shadow-lg"
                />
            </div>
        </section>
    );
};

export default Welcome;

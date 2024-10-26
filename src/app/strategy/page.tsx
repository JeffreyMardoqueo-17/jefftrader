"use client";
import React from 'react';
import InfoCardWithText from '@/components/InfoCardWithText';
import InfoCardWithList from '@/components/InfoCardWithList';
import ImageCollage from '@/components/ImageCollage';
import Accordion from '@/components/Accordion';

// Datos para el componente Accordion
const data = [
    { title: "1. Identificar la Tendencia", content: "Utiliza marcos de tiempo más altos (4H, Diario) para determinar la dirección general del mercado." },
    { title: "2. Marcar Soporte/Resistencia", content: "Identifica niveles clave de soporte y resistencia en el mercado." },
    { title: "3. Esperar el Momento", content: "Espera pacientemente hasta que el precio esté en una posición favorable." },
    { title: "4. Entrar en la Operación", content: "Ejecuta la operación con las condiciones previamente establecidas." },
];

const StrategyPage: React.FC = () => {
    return (
        <section className="py-20 bg-bagroundLigth dark:bg-bagroundDark">
            <div className="container mx-auto px-6 md:px-8 lg:px-16">
                {/* Título de la página */}
                <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    Mi Estrategia de Trading
                </h1>

                {/* Descripción inicial */}
                <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Como trader relativamente nuevo, he tenido la suerte de descubrir una estrategia que ha mostrado resultados prometedores. Quiero ser transparente y dar crédito donde corresponde - aprendí esta estrategia de un creador de TikTok cuyos conocimientos han sido invaluables en mi viaje de trading.
                </p>

                {/* Tarjetas de resumen y detalles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <InfoCardWithText
                            title="Resumen de la Estrategia"
                            text="Esta estrategia se centra en identificar niveles clave de soporte y resistencia en mercados con tendencia. Combina análisis técnico con indicadores de momento para encontrar puntos de entrada de alta probabilidad."
                        />
                    </div>
                    <InfoCardWithList
                        title="Componentes Clave"
                        items={[
                            'Identificación de tendencias',
                            'Niveles de soporte/resistencia',
                            'Indicadores de momento',
                            'Patrones de acción del precio'
                        ]}
                    />
                    <InfoCardWithList
                        title="Gestión de Riesgos"
                        items={[
                            'Reglas estrictas de stop-loss',
                            'Tamaño de las posiciones',
                            'Ratios de riesgo-recompensa',
                            'Niveles de toma de beneficios'
                        ]}
                    />
                </div>

                {/* Collage de imágenes */}
                <div className="mt-16">
                    <ImageCollage
                        images={[
                            '/img/juntos.png',
                            '/img/juntos.png',
                            '/img/juntos.png',
                            '/img/juntos.png'
                        ]}
                    />
                </div>

                {/* Acordeón con pasos */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">
                        Pasos de la Estrategia
                    </h2>
                    <Accordion items={data} />
                </div>
            </div>
        </section>
    );
};

export default StrategyPage;

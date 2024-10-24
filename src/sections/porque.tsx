import React from 'react';
import { FaChartLine, FaBookOpen, FaBullseye } from 'react-icons/fa';
import Card from '@/components/Card';

export const PorqueSection: React.FC = () => {
    return (
        <section className="py-16 bg-bagroundLigth dark:bg-bagroundDark">
            <div className="container mx-auto px-4">
                {/* Título de la sección */}
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Por Qué el Trading es una Profesión Desafiante
                </h2>

                {/* Flexbox para las tarjetas */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8">
                    {/* Tarjeta 1 */}
                    <div className="w-full md:w-1/3">
                        <Card
                            icon={<FaChartLine />}
                            title="Desarrollo de Habilidades Técnicas"
                            description="El trading exige un dominio técnico de herramientas de análisis de mercado, matemáticas financieras y la capacidad de interpretar gráficos en tiempo real."
                        />
                    </div>
                    {/* Tarjeta 2 */}
                    <div className="w-full md:w-1/3">
                        <Card
                            icon={<FaBookOpen />}
                            title="Aprendizaje y Adaptación Constante"
                            description="Los mercados financieros cambian constantemente, lo que requiere que los traders se mantengan actualizados y en constante aprendizaje, similar a cualquier otra carrera profesional."
                        />
                    </div>
                    {/* Tarjeta 3 */}
                    <div className="w-full md:w-1/3">
                        <Card
                            icon={<FaBullseye />}
                            title="Disciplina y Gestión de Riesgos"
                            description="La disciplina es clave en el trading, al igual que la gestión del riesgo. Cada decisión tiene un impacto y es fundamental mantener un enfoque controlado."
                        />
                    </div>
                </div>

                {/* Segunda fila de tarjetas */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 mt-8">
                    {/* Tarjeta 4 */}
                    <div className="w-full md:w-1/3">
                        <Card
                            icon={<FaChartLine />}
                            title="Independencia y Flexibilidad"
                            description="A diferencia de otros trabajos, el trading ofrece la posibilidad de operar desde cualquier lugar del mundo, proporcionando una independencia única, pero que también requiere mucha responsabilidad."
                        />
                    </div>
                    {/* Tarjeta 5 */}
                    <div className="w-full md:w-1/3">
                        <Card
                            icon={<FaBookOpen />}
                            title="Resistencia Emocional"
                            description="Los traders enfrentan decisiones difíciles en situaciones de alta presión. Mantener la calma y tomar decisiones racionales es una habilidad crucial que se desarrolla con el tiempo."
                        />
                    </div>
                    {/* Tarjeta 6 */}
                    <div className="w-full md:w-1/3">
                        <Card
                            icon={<FaBullseye />}
                            title="Rentabilidad a Largo Plazo"
                            description="El trading no es un esquema de enriquecimiento rápido. Es una profesión que, como cualquier otra, exige paciencia, estrategia y una visión a largo plazo para obtener resultados consistentes."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

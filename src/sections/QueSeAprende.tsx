import React from 'react';
import { FaBrain, FaChartLine, FaBalanceScale, FaShieldAlt } from 'react-icons/fa'; // Iconos

const QueSeAprende: React.FC = () => {
    return (
        <section className="py-16 dark:bg-bagroundDark">
            <div className="container mx-auto px-4">
                {/* Título de la sección */}
                <h2 className="text-3xl font-bold text-center text-bagroundDark dark:text-white mb-12">
                    ¿Qué se Aprende en el Trading?
                </h2>

                {/* Lista con íconos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Elemento 1 */}
                    <div className="flex items-start">
                        <FaBrain className="text-7xl text-rojo dark:text-white mr-4 hover:text-orange-400 cursor-pointer" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Mentalidad Estratégica:</strong> Aprender a pensar en términos de probabilidades y tomar decisiones basadas en datos, no emociones.
                        </p>
                    </div>

                    {/* Elemento 2 */}
                    <div className="flex items-start">
                        <FaChartLine className="text-7xl text-rojo dark:text-white mr-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Análisis Técnico y Fundamental:</strong> Interpretar gráficos, identificar patrones y entender los factores macroeconómicos que afectan el mercado.
                        </p>
                    </div>

                    {/* Elemento 3 */}
                    <div className="flex items-start">
                        <FaBalanceScale className="text-7xl text-rojo dark:text-white mr-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Gestión de Riesgos:</strong> Conocer y aplicar estrategias para proteger tu capital, minimizando pérdidas y maximizando ganancias.
                        </p>
                    </div>

                    {/* Elemento 4 */}
                    <div className="flex items-start">
                        <FaShieldAlt className="text-7xl text-rojo dark:text-white mr-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Resiliencia y Control Emocional:</strong> Mantener la calma y tomar decisiones racionales en situaciones de alta presión.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QueSeAprende;

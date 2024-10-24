import React from 'react';
import { FaMobileAlt, FaLaptop, FaChartBar, FaCog, FaExchangeAlt } from 'react-icons/fa'; // Iconos

const HerramientasTrading: React.FC = () => {
    return (
        <section className="py-16 dark:bg-bagroundDark">
            <div className="container mx-auto px-4">
                {/* Título de la sección */}
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Herramientas Esenciales para el Trading
                </h2>
                {/* Lista de herramientas usando Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Herramienta 1 */}
                    <div className="flex items-start">
                        <FaMobileAlt className="text-verde text-7xl dark:text-white mr-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Teléfono Inteligente:</strong> Acceso rápido a tus plataformas y aplicaciones de trading para revisar y realizar operaciones desde cualquier lugar.
                        </p>
                    </div>

                    {/* Herramienta 2 */}
                    <div className="flex items-start">
                        <FaLaptop className="text-verde text-7xl dark:text-white mr-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Computadora o Laptop:</strong> Análisis más profundos de gráficos y estrategias con mayor capacidad y herramientas avanzadas.
                        </p>
                    </div>

                    {/* Herramienta 3 */}
                    <div className="flex items-start">
                        <FaChartBar className="text-verde text-7xl dark:text-white mr-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>TradingView:</strong> Plataforma de gráficos en tiempo real con herramientas avanzadas para análisis técnico.
                        </p>
                    </div>

                    {/* Herramienta 4 */}
                    <div className="flex items-start">
                        <FaCog className="text-verde text-7xl dark:text-white mr-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Software de Trading:</strong> Plataformas como MetaTrader o ThinkorSwim para ejecutar operaciones directamente desde tu PC.
                        </p>
                    </div>

                    {/* Herramienta 5 (en una fila completa) */}
                    <div className="flex items-start col-span-full">
                        <FaExchangeAlt className="text-verde text-7xl dark:text-white mr-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Acceso a un Broker de Confianza:</strong>  Este se encagara de conectarte a ti y al mercado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HerramientasTrading;

import React from 'react';

interface InfoCardWithListProps {
    title: string;
    items: string[];
}

const InfoCardWithList: React.FC<InfoCardWithListProps> = ({ title, items }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            {/* Título de la tarjeta */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>

            {/* Lista de elementos */}
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default InfoCardWithList;

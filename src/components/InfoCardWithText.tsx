import React from 'react';

interface InfoCardWithTextProps {
    title: string;
    text: string;
}

const InfoCardWithText: React.FC<InfoCardWithTextProps> = ({ title, text }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">{text}</p>
        </div>
    );
};

export default InfoCardWithText;

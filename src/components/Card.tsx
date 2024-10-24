import React from 'react';

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-bagroundDarkPlus dark:border-neutral-950 min-w-[50%] min-h-[225px] cursor-pointer ">
            <div className="w-full h-auto mb-4 flex justify-start items-center text-4xl text-verde">
                {icon}
            </div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
};

export default Card;

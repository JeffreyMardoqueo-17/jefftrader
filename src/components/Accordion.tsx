"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionItemProps {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-gray-300 dark:border-neutral-800 rounded-lg overflow-hidden shadow transition-all duration-300"
                >
                    <button
                        onClick={() => handleToggle(index)}
                        className="flex items-center justify-between w-full px-6 py-4 font-semibold text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-bagroundDarkPlus transition-colors duration-200 focus:outline-none"
                    >
                        <span>{item.title}</span>
                        <FaChevronDown
                            className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                } text-gray-500 dark:text-gray-400`}
                        />
                    </button>
                    {openIndex === index && (
                        <div className="px-6 py-4 bg-white dark:bg-bagroundDark text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-neutral-800 transition-all duration-300">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;

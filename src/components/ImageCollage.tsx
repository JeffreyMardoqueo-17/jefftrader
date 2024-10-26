"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageCollageProps {
    images: string[];
    altText?: string;
}

const ImageCollage: React.FC<ImageCollageProps> = ({ images, altText = 'Imagen de collage' }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (images.length !== 4) {
        console.error("El collage requiere exactamente 4 imágenes.");
        return null;
    }

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="relative">
            {/* Collage de imágenes */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full max-w-md max-h-md md:max-w-2xl md:max-h-2xl lg:max-w-3xl lg:max-h-3xl mx-auto">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative w-full h-40 md:h-56 lg:h-72 cursor-pointer"
                        onClick={() => handleImageClick(src)}
                    >
                        <Image
                            src={src}
                            alt={`${altText} ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Modal de vista ampliada */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                    <div className="relative max-w-3xl w-full h-auto p-4">
                        <button className="absolute top-2 right-2 text-white text-xl" onClick={closeModal}>
                            &times;
                        </button>
                        <Image
                            src={selectedImage}
                            alt={altText}
                            layout="responsive"
                            width={800}
                            height={600}
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCollage;

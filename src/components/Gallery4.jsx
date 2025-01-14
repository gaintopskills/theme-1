import React, { useState } from 'react';

export const Gallery4 = () => {
    const categories = [
        "Embroidery",
        "Patches",
        "Sublimation",
        "Photographic Embroidery",
        "DTG",
        "Screen Printing",
        "Heat Transfer",
        "All",
    ];

    const images = [
        { src: "/embroidery/custom-embroidery-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/custom-hat-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/custom-bomber-jacket-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/high-volume-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/custom-towel-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/wholesale-custom-hat-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/high-volume-custom-hat-embroidery..webp", album: "Embroidery" },
        { src: "/embroidery/custom-embroidery-services-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/custom-embroidery-services-los-angeles.webp", album: "Embroidery" },
        { src: "/embroidery/wholesale-custom-embroidered-hats.webp", album: "Embroidery" },
        { src: "/embroidery/wilson-custom-embroidery.webp", album: "Embroidery" },
        { src: "/embroidery/google-cloud-custom-embroidery-logo.webp", album: "Embroidery" },
        { src: "/embroidery/high-end-custom-embroidery-los-angeles.webp", album: "Embroidery" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2022/03/custom-promotional-products-los-angeles.jpg", album: "Patches" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2016/09/8e9737839470c7354a95b1a862393874-product-safety-noms-1.jpg", album: "Sublimation" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2022/03/custom-photographic-embroidery-los-angeles.jpg", album: "Photographic Embroidery" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2022/03/custom-DIRECT-TO-GARMENT-DIGITAL-PRINTING-services-LOS-ANGELES.jpg", album: "DTG" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2017/08/dtla-los-angeles-custom-fashion-screen-printing-black-t-shirt-skull-mason-joe-perez-Resurrection-collection-back.jpg", album: "Screen Printing" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2022/03/custom-heat-transfer-on-t-shirts-los-angeles.jpg", album: "Heat Transfer" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxImage, setLightboxImage] = useState(null);

    const filteredImages = selectedCategory === "All"
        ? images
        : images.filter((image) => image.album === selectedCategory);

    return (
        <div className="min-h-screen p-6 bg-black text-white">
            <header className="flex justify-between items-center bg-gray-800 text-white p-4 rounded">
                <h1 className="text-xl font-bold">Gallery</h1>
            </header>

            <main className="p-4">
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full font-bold shadow-md ${
                                selectedCategory === category
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-400 hover:bg-gray-500 text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.album}
                            loading="lazy"
                            className="rounded shadow-md object-cover w-full transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                            onClick={() => setLightboxImage(image)}
                        />
                    ))}
                </div>

                {lightboxImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <img
                                src={lightboxImage.src}
                                alt={lightboxImage.album}
                                className="max-w-3xl rounded shadow-lg"
                            />
                            <button
                                onClick={() => setLightboxImage(null)}
                                className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full"
                            >
                                ✖
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Gallery4;

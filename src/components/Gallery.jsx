// React Component for Responsive Gallery with Filtering

import React, { useState } from 'react';
import './Gallery.css'; // Assume the CSS styles are in this file

export const Gallery = () => {
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
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2017/05/dtla-los-angeles-custom-embroidery-selena-gomez-custom-selebrity-jacket.jpg", alt: "Embroidery 1", category: "Embroidery" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2022/03/custom-promotional-products-los-angeles.jpg", alt: "Patches 1", category: "Patches" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2016/09/8e9737839470c7354a95b1a862393874-product-safety-noms-1.jpg", alt: "Sublimation 1", category: "Sublimation" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2022/03/custom-photographic-embroidery-los-angeles.jpg", alt: "Photographic Embroidery 1", category: "Photographic Embroidery" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2022/03/custom-DIRECT-TO-GARMENT-DIGITAL-PRINTING-services-LOS-ANGELES.jpg", alt: "DTG 1", category: "DTG" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2017/08/dtla-los-angeles-custom-fashion-screen-printing-black-t-shirt-skull-mason-joe-perez-Resurrection-collection-back.jpg", alt: "Screen Printing 1", category: "Screen Printing" },
        { src: "https://www.eandrunlimited.com/wp-content/uploads/2022/03/custom-heat-transfer-on-t-shirts-los-angeles.jpg", alt: "Heat Transfer 1", category: "Heat Transfer" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredImages = selectedCategory === "All"
        ? images
        : images.filter((image) => image.category === selectedCategory);

    return (
        <div className="gallery-wrapper">
            <header className="gallery-header">
                <h1>Gallery</h1>
                <div className="gallery-buttons">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`imgbtnx ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </header>
            <main className="gallery-container">
                {filteredImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="gallery-image"
                    />
                ))}
            </main>
            <footer className="gallery-footer">
                <p>© 2024 Custom Gallery. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Gallery;


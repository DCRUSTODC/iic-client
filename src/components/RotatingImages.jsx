import React, { useState, useEffect } from "react";

// Import your images
import image1 from '../assets/images/event_images/image1.jpg';
import image2 from '../assets/images/event_images/image2.jpg';
import image3 from '../assets/images/event_images/image3.jpg';
import image4 from '../assets/images/event_images/image4.jpg';
import image5 from '../assets/images/event_images/image5.jpg';

const imageSources = [image1, image2, image3, image4, image5];

function RotatingImages() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageOpacity, setImageOpacity] = useState(1);

    useEffect(() => {
        // Preload all images before starting the rotation
        const preloadImages = imageSources.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });

        // Function to handle image rotation
        const rotateImages = () => {
            setImageOpacity(0); // Fade out the image
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
                );
                setImageOpacity(1); // Fade in the new image
            }, 400); // Delay the image change for 400 milliseconds
        };

        // Rotate images at regular intervals
        const intervalId = setInterval(rotateImages, 3000); // Change image every 3 seconds

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <img
            src={imageSources[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className={`md:w-1/2 w-70 h-70 border border-4  border-cyan_secondary rounded-lg bg-gray-200 image-transition`}
            style={{ opacity: imageOpacity }}
        />
    );
}

export default RotatingImages;

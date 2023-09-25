import React, { useState, useEffect } from "react";

function RotatingImages({ imageSources }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageOpacity, setImageOpacity] = useState(1);

    useEffect(() => {
        if (!imageSources || imageSources.length === 0) {
            return; // No images to rotate
        }

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
    }, [imageSources]);

    if (!imageSources || imageSources.length === 0) {
        return null; // Render nothing if there are no images
    }

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

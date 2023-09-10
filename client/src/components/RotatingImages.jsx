import React, { useState, useEffect } from "react";
import image1 from '../assets/event_images/image1.jpg';
import image2 from "../assets/event_images/image2.jpg";
import image3 from '../assets/event_images/image3.jpg';
import image4 from '../assets/event_images/image4.jpg';

const imageSources = [image1, image2, image3, image4];

function RotatingImages() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // Change image every 4 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <img
            src={imageSources[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="md:w-1/2 w-70 h-70 border border-4 event-card rounded-lg bg-gray-200 animate-fade-in animate-delay-800"
        />
    );
}

export default RotatingImages;

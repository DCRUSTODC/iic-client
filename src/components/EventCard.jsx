import React, { useState, useEffect } from 'react';

function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next image in the slideshow
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
        }, 5000); // Change image every 5 seconds

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, images]);

    return (
        <div className="relative">
            <img
                src={images[currentIndex]}
                alt={`Slideshow - Image ${currentIndex + 1}`}
                className="w-auto h-auto max-h-96 object-contain transition-opacity duration-500 mx-auto my-auto"
            />

        </div>
    );
}

function EventCard({ event }) {
    return (
        <div className="flex-shrink-0 snap-center w-100 p-4 mx-2 rounded-lg overflow-hidden shadow-md border border-2 bg-lb event-card ">
            <Slideshow images={event.images} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-ln text-white">{event.title}</h2>
                <p className="mb-2 text-white">{event.date}</p>
                <p className="text-white mb-2">{event.location}</p>
                {/* //<p className="text-white">{event.description}</p> */}
            </div>
        </div>
    );
}

export default EventCard;

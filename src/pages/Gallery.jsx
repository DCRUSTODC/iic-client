import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import eventData from '../assets/json/events/data/events.json';

function Gallery() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const pastEvents = eventData.filter((event) => {
        const eventDate = new Date(event.date.split('Date: ')[1]);
        const currentDate = new Date();
        return eventDate <= currentDate;
    });

    const sortedEvents = pastEvents.slice().sort((a, b) => {
        const dateA = new Date(a.date.split('Date: ')[1]);
        const dateB = new Date(b.date.split('Date: ')[1]);
        return dateB - dateA;
    });

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <h1 className="text-5xl mb-8 text-center text-transparent font-extrabold text-white">Photo Collection</h1>
            {sortedEvents.map((event, index) => (
                <div key={index} className="mb-8 bg-black border-2 border-cyan_secondary rounded-lg p-4" data-aos="fade-up">

                    <h2 className="text-2xl font-bold mb-4 text-white" data-aos="fade-right"><center>{event.title}</center></h2>

                    <p className="text-cyan_secondary mb-4"  >{event.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {event.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={image}
                                    alt={`Event - ${event.title} - Image ${imgIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div >
            ))
            }
        </div >
    );
}

export default Gallery;

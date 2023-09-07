import React from 'react';

function EventCard({ event }) {
    return (
        <div className="flex-shrink-0 snap-center w-100 p-4 mx-2 bg-le rounded-lg overflow-hidden shadow-md border border-2">

            <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />

            <div className="p-4 ">
                <h2 className="text-xl font-semibold mb-2 text-ln">{event.title}</h2>
                <p className="text-we mb-2">{event.date}</p>
                <p className="text-we mb-2">{event.location}</p>
                <p className="text-we">{event.description}</p>
            </div>

        </div >
    );
}

export default EventCard;

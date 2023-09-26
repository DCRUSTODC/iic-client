import React from 'react';

function EventCard({ event }) {

    const eventImage = event.images[0];

    return (
        <div className="flex-shrink-0 p-8 mx-2 rounded-lg overflow-hidden shadow-md border border-2 border-cyan_secondary bg-black ">
            <img
                src={eventImage}
                alt={`Event - ${event.title}`}
                className="w-auto h-auto max-h-96 object-contain mx-auto my-auto"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-ln text-white">{event.title}</h2>
                <p className="mb-2 text-white">{event.date}</p>
                <p className="text-white mb-2">{event.location}</p>

            </div>
        </div>
    );
}

export default EventCard;

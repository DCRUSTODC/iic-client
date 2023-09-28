import React from 'react';

function EventCard({ event }) {

    const eventImage = event.images[0];

    return (
        <div className="flex-shrink-0 w-100 h-100 p-8 mx-2 rounded-lg overflow-hidden shadow-md border border-2 border-cyan
        ">
            <img
                src={eventImage}
                alt={`Event - ${event.title}`}
                className="w-80 h-40  mx-auto my-auto rounded-sm border-3"
            />
            <div className="p-3 justify-text">
                <h2 className="text-xl font-semibold mb-2 text-ln text-white text-left ">{event.title}</h2>
                <p className="mb-2 text-cyan text-left">{event.date}</p>
                <p className="text-cyan mb-2 text-left">{event.location}</p>

            </div>
        </div>
    );
}

export default EventCard;

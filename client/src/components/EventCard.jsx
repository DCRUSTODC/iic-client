import React from 'react';

function EventCard({ event }) {
    return (
        <div className="flex-shrink-0 snap-center w-100 p-4 mx-2  rounded-lg overflow-hidden shadow-md border border-2  bg-black event-card">

            <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />

            <div className="p-4 ">
                <h2 className="text-xl font-semibold mb-2 text-ln text-white">{event.title}</h2>
                <p className=" mb-2 text-white">{event.date}</p>
                <p className="text-white mb-2">{event.location}</p>
                <p className="text-white">{event.description}</p>
            </div>
        </div >
    );
}

export default EventCard;

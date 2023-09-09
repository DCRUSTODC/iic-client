import React from 'react';
import EventCard from '../components/EventCard'; // Create EventCard component if not already defined
import eventImage1 from '../assets/event1.jpg';
import eventImage2 from '../assets/event2.jpg';
import FloatingImage from '../components/FloatingImage';



const eventsData = [
    {
        title: 'Event 1',
        description: 'Description for Event 1 goes here.',
        date: 'Date: January 15, 2024',
        location: 'Location: City Hall',
        image: eventImage1,
    },
    {
        title: 'Event 2',
        description: 'Description for Event 2 goes here.',
        date: 'Date: February 20, 2024',
        location: 'Location: Convention Center',
        image: eventImage2,
    },
    {
        title: 'Event 3',
        description: 'Description for Event 3 goes here.',
        date: 'Date: January 20, 2024',
        location: 'Location: Convention Center',
        image: eventImage1,
    },
    {
        title: 'Event 4',
        description: 'Description for Event 4 goes here.',
        date: 'Date: February 20, 2024',
        location: 'Location: Convention Center',
        image: eventImage2,
    },
    {
        title: 'Event 1',
        description: 'Description for Event 1 goes here.',
        date: 'Date: January 15, 2023',
        location: 'Location: City Hall',
        image: eventImage1,
    },
    {
        title: 'Event 2',
        description: 'Description for Event 2 goes here.',
        date: 'Date: February 20, 2023',
        location: 'Location: Convention Center',
        image: eventImage2,
    },
    {
        title: 'Event 3',
        description: 'Description for Event 3 goes here.',
        date: 'Date: January 20, 2023',
        location: 'Location: Convention Center',
        image: eventImage1,
    },
    {
        title: 'Event 4',
        description: 'Description for Event 4 goes here.',
        date: 'Date: February 20, 2023',
        location: 'Location: Convention Center',
        image: eventImage2,
    },
    // Add more events here
];

const currentDate = new Date(); // Get the current date

function Events() {
    // Separate events into upcoming and previous based on the current date
    const upcomingEvents = eventsData.filter((event) => {
        const eventDate = new Date(event.date.split('Date: ')[1]);
        return eventDate > currentDate;
    });

    const previousEvents = eventsData.filter((event) => {
        const eventDate = new Date(event.date.split('Date: ')[1]);
        return eventDate <= currentDate;
    });

    return (
        <>
            <div className='flex justify-center items-center '>
                <div className='text-5xl text-center   font-bold  animate-fade-in animate-delay-500'>
                    Events
                </div>
                <FloatingImage />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 ">
                <h1 className="text-3xl font-semibold mb-8  animate-fade-in animate-delay-800 m1-8">Upcoming Events</h1>
                <div className="flex overflow-x-auto overflow-y-auto gap-6 p-5 animate-fade-in animate-delay-1000">

                    {upcomingEvents.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}

                </div>
                <br />
                <br />
                <br />

                <h1 className="text-3xl font-semibold mb-8  animate-fade-in animate-delay-800">Previous Events</h1>
                <div className="flex overflow-x-auto overflow-y-auto gap-6 p-5 animate-fade-in animate-delay-1000">

                    {previousEvents.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}

                </div>
            </div>
        </>
    );
}

export default Events;

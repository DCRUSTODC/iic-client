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
            <div className='flex justify-center items-center h-4px w-4px'>
                <div className='text-5xl text-center   font-bold  animate-fade-in animate-delay-500 text-grey m-2'>
                    Events
                </div>
                <FloatingImage />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 ">
                <div className="relative flex flex-col md:flex-row">
                    <div className="relative  md:w-1/2 p-4 m-4 lg: top-12 left-16">
                        <img src=".\src\assets\tb.png" alt="IIC Logo" className=' w-80 h-80 rounded-full  border border-4 event-card md: w-60 h-60 justify-center' />
                    </div>
                    <div className="md:w-1/2 p-4 pt-12 font-mono">
                        In the heart of the Institute Innovation Council (IIC), a symphony of creativity and innovation unfolds, painting the canvas of academia with vibrant strokes of imagination. Here, ideas blossom like delicate petals, nurtured by the nurturing hands of visionaries and scholars alike. Each event that graces the IIC is a unique masterpiece, a tapestry woven from the threads of knowledge, passion, and curiosity. In this enchanted realm, intellectual dialogues take flight, transforming the ordinary into the extraordinary. The IIC is a sacred stage where innovators, dreamers, and thought leaders unite, transcending the boundaries of conventional wisdom to orchestrate a harmonious dance of progress. It is a place where inspiration reigns supreme, and where the limitless horizons of human potential stretch ever farther. In the hallowed halls of the IIC, the future is not merely anticipated; it is curated, crafted, and celebrated with an aesthetic that transcends the ordinary and embraces the sublime.
                    </div>
                </div>
            </div>



            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 ">
                <h1 className="text-3xl font-semibold mb-8  animate-fade-in animate-delay-800 m1-8 text-white">Upcoming Events</h1>
                <div className="flex overflow-x-auto overflow-y-auto gap-6 p-5 animate-fade-in animate-delay-1000">

                    {upcomingEvents.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}

                </div>
                <br />
                <br />
                <br />

                <h1 className="text-3xl font-semibold mb-8  animate-fade-in animate-delay-800 text-white">Previous Events</h1>
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

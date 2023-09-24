import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard'; // Create EventCard component if not already defined
import RotatingImages from '../components/RotatingImages';

function Events() {
    const [eventsData, setEventsData] = useState([]);
    const currentDate = new Date();

    useEffect(() => {
        // Fetch the event data from the JSON file
        fetch('/src/assets/json/events/data/events.json')
            .then((response) => response.json())
            .then((data) => setEventsData(data))
            .catch((error) => console.error('Error fetching event data:', error));
    }, []);

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
                <div className='text-5xl text-center font-bold animate-fade-in animate-delay-500 text-grey m-2'>
                    Events
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 ">
                <div className="flex flex-col md:flex-row">
                    <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80" className='md:w-1/2 w-70 h-70 border border-4  border-cyan_secondary rounded-lg bg-gray-200' alt="Event image" />
                    <div className="md:w-1/2 p-4 font-mono animate-fade-in animate-delay-800">
                        In the heart of the Institute Innovation Council (IIC), a symphony of creativity and innovation unfolds, painting the canvas of academia with vibrant strokes of imagination. Here, ideas blossom like delicate petals, nurtured by the nurturing hands of visionaries and scholars alike. Each event that graces the IIC is a unique masterpiece, a tapestry woven from the threads of knowledge, passion, and curiosity. In this enchanted realm, intellectual dialogues take flight, transforming the ordinary into the extraordinary. The IIC is a sacred stage where innovators, dreamers, and thought leaders unite, transcending the boundaries of conventional wisdom to orchestrate a harmonious dance of progress. It is a place where inspiration reigns supreme, and where the limitless horizons of human potential stretch ever farther. In the hallowed halls of the IIC, the future is not merely anticipated; it is curated, crafted, and celebrated with an aesthetic that transcends the ordinary and embraces the sublime.
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
                <h1 className="text-3xl font-semibold mb-8 animate-fade-in animate-delay-800 text-white">Previous Events</h1>
                <div className="flex overflow-x-auto overflow-y-auto gap-6 p-5 animate-fade-in animate-delay-1000">
                    {previousEvents.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
                <br />
                <br />
                <br />

                <h1 className="text-3xl font-semibold mb-8 animate-fade-in animate-delay-800 text-white">Upcoming Events</h1>
                <div className="flex overflow-x-auto overflow-y-auto gap-6 p-5 animate-fade-in animate-delay-1000">
                    {upcomingEvents.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Events;

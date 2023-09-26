import events from "../assets/json/events/data/events.json";
import GalleryCard from "../components/GalleryCard";

export default function Gallery(){
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {events.map((event)=>{
                return <GalleryCard
                    title={event.title}
                    date={event.date}
                    desc={event.description}
                    loc={event.location}
                    images={event.images}
                />
            })}
        </div>
    );
}
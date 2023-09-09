
export default function Card(props){
    return (
        <div className="w-60 h-60 rounded-lg bg-primary flex justify-center items-top flex-col flex-wrap cursor-pointer animate-fade-in m-3 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div>
                <img src={props.src} className="rounded-full w-32 h-32 border-2 border-secondary" />
            </div>
            <h2 className="text-xl text-secondary text-center font-semibold">{props.name}</h2>
            <h3 className="text-secondary text-center">{props.desig}</h3>
        </div>
    )
}
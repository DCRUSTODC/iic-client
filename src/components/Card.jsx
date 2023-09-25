
export default function Card(props){
    return (
        <div key={props.key} className="w-60 h-60 rounded-lg flex justify-center items-top flex-col flex-wrap cursor-pointer animate-fade-in mx-5 my-10 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-cyan">
            <div>
                {props.src === "#" ? 
                <div className="rounded-full w-32 h-32 border-2 border-cyan flex items-center justify-center text-2xl text-cyan_secondary">{props.name[0]}</div> :
                <img src={props.src} alt={props.name} className="rounded-full w-32 h-32 border-2 border-cyan" />}
            </div>
            <h2 className="text-xl text-center font-semibold">{props.name}</h2>
            <h3 className="text-cyan text-center">{props.desig}</h3>
        </div>
    )
}
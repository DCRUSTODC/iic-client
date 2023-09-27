import { useState } from "react";
import teams from "../assets/json/team/teams";
import Card from "./Card";

export default function TeamSection(){
    const [team , setTeam] = useState(teams[0].data);

    function handleMenuChange(event){
        console.log(teams[event.target.value].data);
        setTeam(teams[event.target.value].data);
    }

    return (
        <center>
            <label htmlFor="menu" className="block text-center text-xl text-cyan_secondary">Explore Previous Year Teams</label>
            <select
            name="menu"
            onChange={handleMenuChange}
            className="bg-transparent text-white border-cyan_secondary"
            >
            {teams.map((team, i) => {
                return (
                    <option key={team.id} value={i} className="bg-transparent text-black">{team.year}</option>
                );
            })}
            </select>
            <div className="flex flex-wrap flex-row justify-evenly items-center">
            {team.map((stu)=>{
                return <Card key={stu.id} src={stu.img} name={stu.name} desig={stu.desig} />
            })}
            </div>
        </center>
    );
}
import facs from "../assets/json/team/teachers.json"
import extern from "../assets/json/team/external.json"
import Card from "../components/Card"
import TeamSection from "../components/TeamSection"


export default function Team(){

    return(
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <center className="mb-6">
            <h2 className="text-3xl text-primary font-bold">Team</h2>
            <div className="font-semibold text-cyan_secondary relative -top-1">IIC rely on these people</div>
        </center>
        <hr className="text-primary"/>
        <h2 className="text-3xl font-bold m-3 text-accent">Faculty</h2>
        <center>
            <div className="flex flex-wrap flex-row justify-evenly items-center">
            {facs.map((fac)=>{
                return <Card key={fac.id} src={fac.img} name={fac.name} desig={fac.desig} />
            })}
            </div>
        </center>
        <h2 className="text-3xl font-bold m-3 text-accent">External Panel Expert</h2>
        <ul className="my-5">
        {extern.map((p)=> {
            return (
                <li key={p.id} className="text-cyan_secondary text-xl pl-24">
                    <span className="font-semibold text-white">{p.name}</span>, {p.desig}
                </li>
            )
        })}
        </ul>
        <h2 className="text-3xl font-bold m-3 text-accent">Student</h2>
        <TeamSection />
        </div>
    )
}
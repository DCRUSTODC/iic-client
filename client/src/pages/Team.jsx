import facs from "../assets/json/teachers.json"
import studs from "../assets/json/students.json"
import Card from "../components/Card"

export default function Team(){
    return(
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <center className="mb-6">
            <h2 className="text-3xl text-primary font-bold">Team</h2>
            <div className="font-semibold text-accent relative -top-1">IIC rely on these people</div>
        </center>
        <hr className="text-primary"/>
        <h2 className="text-3xl font-bold m-3 text-accent">Faculty</h2>
        <center>
            <div className="flex flex-wrap flex-row justify-evenly items-center">
            {facs.map((fac)=>{
                return <Card src={fac.img} name={fac.name} desig={fac.desig} />
            })}
            </div>
        </center>
        <h2 className="text-3xl font-bold m-3 text-accent">Student</h2>
        <center>
            <div className="flex flex-wrap flex-row justify-evenly items-center">
            {studs.map((stu)=>{
                return <Card src={stu.img} name={stu.name} desig={stu.desig} />
            })}
            </div>
        </center>
        </div>
    )
}
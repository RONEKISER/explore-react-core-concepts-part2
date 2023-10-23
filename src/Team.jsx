import { useState } from "react"

export default function Team(){
    const [team ,setTeam] = useState(20)
    const handalAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const hadanRemove = () =>{
        const newRteam = team -1;
        setTeam(newRteam)
    }
    const teamStyle = {
        border:'2px solid purple',
        padding:'20px',
        borderRadius:'10px'
    }
    return(
        <div style={teamStyle}>
            <h1>Players : {team}</h1>
            <button onClick={handalAdd}>Add players</button>
            <button onClick={hadanRemove}>Remove</button>
        </div>
    )
}
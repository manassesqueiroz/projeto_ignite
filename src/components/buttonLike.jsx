import { useState } from "react"
import { Trash, ThumbsUp } from "@phosphor-icons/react";


export const Like = () =>{
    const [Count,setCount] = useState(0)

    return(
        <a  onClick={() => setCount(Count + 1)}> <ThumbsUp size={20}/>     Aplaudir • {Count} </a>
    )
}

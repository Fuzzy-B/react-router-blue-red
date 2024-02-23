import { useState } from "react"

export default function Random() {
    const [rand, setRand] = useState(null)
    function handleClick(event) {
        event.preventDefault()
        setRand(Math.floor(Math.random() * 101))  
    }
    return (
        <div className="random"> 
        <h1>{rand}</h1>
        <button onClick={handleClick}>Click for a random number!</button>
        </div>)
}
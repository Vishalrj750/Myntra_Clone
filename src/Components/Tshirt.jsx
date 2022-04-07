import React from 'react'
import newtshirtdata from "../data/newtshirtdata.json"
import Card from "./Card.jsx"

const Tshirt = () => {

    const data=JSON.stringify(newtshirtdata)

    console.log(data)
    const {id,title,description,price}=data

  return (
    <div>
        {data.map((e)=>(<Card id={e.id} title={e.title} description={e.description} price={e.price}/>))}
    </div>
  )
}

export default Tshirt
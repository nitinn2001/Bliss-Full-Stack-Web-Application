import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from 'axios'

const List = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/api/item/getItems")
        .then((res)=>{
            console.log("jdjdjdj",res)
            setData(res.data.data)
        })
    },[])

    useEffect(()=>{
        console.log(data)
    })

  return (
    <div className='list'>
        {data.map((el)=>{
            return(
                <div className='each-item'>
                    <p>{el.title}</p>
                    <p>{el.category}</p>
                    <p>{el.price}</p>
                </div>
            )
        })}
    </div>
  )
}

export default List
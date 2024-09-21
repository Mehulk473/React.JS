import React from 'react'
import {useState,useEffect} from 'react'

const Fetchapi = () => {
    const [fetchapi,setfetchapi]=useState([])

    useEffect(()=>{
        const nikesh= async ()=>{

            const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
            const data = await api.json()
            setfetchapi(data.meals.slice(0,5))
            console.log(data)
        }
        nikesh();
    },[])

  return (
    <div>
        <div>
            {fetchapi.map((aryan)=>
            <div key={aryan.strMeal}>
                <div>
                    <div>{aryan.strMeal}</div>
                    <div>
                        <img src={aryan.strMealThumb} style={{width:"100px"}}/>
                    </div>
                </div>

            </div>
            )}
        </div>
    </div>
  )
}

export default Fetchapi
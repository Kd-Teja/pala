import { useEffect, useState } from "react"

function Productdetails(){
    const[data,getdata] =useState("products")
    const[read,getread]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

    })
    let handleproduct=async ()=>{
        let response=await fetch('https://fakestoreapi.com/products')
        let output=await response.json()

       getread(output)
    //    console.log(teja)
    }
    useEffect(()=>{
        handleproduct()
    },[])


  return(


  
   
        <div>
            <button onClick={()=>getdata("unachanged")}></button>
            {
                read.map((teja,index)=>{
                       return(
                      
                            <div key={index}>
                               
                                <p>{teja.category}</p>
                                <h1>{teja.description}</h1>
                                <h1>{teja.id}</h1>
                                <img src={teja.image}/>
                                <h1>{teja.price}</h1>
                                <p>{teja.title}</p>
                                
                            </div>
                       
                       )
                })
               
             
            }
        </div>
       
    )
}
export default Productdetails
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Singleproductpage(){
    const location=useLocation()
    const{id} =location.state || null
    const[product,setproduct]=useState({})
    const singleproduct= async ()=>{
        if(id){
            let response=await fetch(`https://fakestoreapi.com/products/${id}`)
            let data=await response.json()
            setproduct(data)
            
        }
    }
    useEffect(()=>{
        singleproduct()
       
    })
    return(
        <div style={{backgroundColor:"blue"}}>
            <h1 style={{color:"red"}}> Single Productpage</h1>
            <h1 style={{fontSize:"30px"}}>{product.category}</h1>
            <p>{product.description}</p>
            <h1>{product.id}</h1>
            <img src={product.image} style={{height:"300px",width:"300px"}} />
            <p style={{fontSize:"40px"}}>{product.title}</p>
            
            
        </div>
    )
}
export default Singleproductpage
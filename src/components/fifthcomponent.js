import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Sai()
{
    const[read,getread]=useState([])
    
   

    const[filter,setfilterdata]=useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])
    const apicatagories=async ()=>{
        const url=await  fetch('https://fakestoreapi.com/products/categories')
        let out=await url.json()
        console.log(out)
        getread(out)

    }
    useEffect(() =>{
        apicatagories()
    },[])
   
   
   
   useEffect(() =>{
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>console.log(json))
},[])

const apijewelery = async(teja) =>{

   let url = await fetch(`https://fakestoreapi.com/products/category/${teja}`)

   let out2 = await url.json()
   setfilterdata(out2)
   console.log(out2)

}




   return(
    <div>
      <Link to='/'>  <h1 className="text-primary">

           PRODUCTS
        </h1>
        </Link>
        <div style={{display:"grid", gridTemplateColumns:"350px 350px 350px 350px",}}>
          {
          

            read.map((teja,index) =>{
                return(
                    <div key={index}>
                   <button onClick={()=>apijewelery(teja)}>
                      {
                        teja
                      }
                   </button>
                  
                    </div>
                )
            })
          

         }
        </div>
        <div   style={{display:"grid", gridTemplateColumns:"400px 400px 400px",}}>
        {
           
            filter.map((teja,index)=>{
                return (
                <Link to={`/Productdetails/${teja.id}`} state={{id:teja.id}}>
                <div  key={index} class="container text-center" >
                    
                    {
                    
                       <div style={{marginLeft:"200px",border:"2px solid red",borderRadius:"8px",width:"300px",marginTop:"30px",boxShadow:"4px 4px 4px 4px"}}>
                         <p style={{marginTop:"50px",fontSize:"35px"}}>{teja.category}</p>
                         <h1>{teja.id}</h1>
                         {/* <p>{teja.description}</p> */}
                         <img src={teja.image} style={{width:"150px", height:"150px"}}/>
                         <h2>{teja.price}</h2>
                         <p>{teja.title}</p>
                         
                        </div>
                       
                    }
                </div>
                </Link>
                )
            })
        }
        </div>
    </div>
   )
}
export default Sai
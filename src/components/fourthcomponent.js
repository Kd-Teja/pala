import { useEffect, useState } from "react"


function Fourthcomponent() {

    const [data,setdata]=useState("firstname")
     const [get,getdata]=useState([])
    
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/categories')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    // })
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    useEffect(() =>{
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    })
        let handleapi=async() =>{
            let post=await fetch('https://fakestoreapi.com/users')
            let lastdata=await post.json()
            getdata(lastdata)
             console.log('logic')
             console.log(lastdata)
        }  
        useEffect(() =>{
            handleapi()
        },[])
   

    return (
       <div>
       
         {/* <button onClick={() => setdata("secondname")}>{data}</button>  */}
            {
                get.map((teja,index) =>{
                    return (
                       <div key ={index} >
                        <div  className="bg-danger  text-uppercase border border-5 rounded-start"   style={{width:"40%",height:"400px",fontSize:"20px",textAlign:"center",marginLeft:"500px"}} >
                            <div className="bg-primary d-inline-flex p-2">
                          <h1 className="bg-info">{teja.address.city}</h1>
                          </div>
                          <h5 className="bg-secondary">{teja.email}</h5>
                          <p>{teja.id}</p>
                          <h2>{teja.name.firstname}</h2>
                          <p className="bg-warning">{teja.password}</p>
                          <p>{teja.phone}</p>
                          <h5>{teja.username}</h5>
                        </div>
                        </div>
                        
                    )
                })
            }
       </div>
    )
}
export default Fourthcomponent
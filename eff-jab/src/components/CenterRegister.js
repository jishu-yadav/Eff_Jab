import React,{useState} from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import {NavLink,useHistory} from 'react-router-dom';
import { Form } from "react-bootstrap";
import './CenterRegister.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
const CenterRegister = () => {
   // const history = useHistory();
    const [vcenter,setUser]=useState({
        centerName:"" , city:"" , address:"" , numberOfRooms:"" , numberOfVolunteers:"" , contact:"" , nearestHospitalDistance:""
    });
    
    let name,value;
const handleInputs = (e)=>{
    console.log(e);
    name=e.target.name; 
    value=e.target.value;
    setUser({...vcenter, [name]:value});
}





const PostData=async (e)=>{
    
    const {centerName , city , address , numberOfRooms , numberOfVolunteers , contact , nearestHospitalDistance}=vcenter;
    e.preventDefault();
    const res = await fetch("/centerRegister",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            centerName , city , address , numberOfRooms , numberOfVolunteers , contact , nearestHospitalDistance
        })
    }).then((res)=>{
        console.log(res)

        res.json().then((resp)=>{
           console.warn(resp)
           
   
         })
    })
}
    /*const data =await res.json();
    if(data.status(422)|| !data || data.status(402)){
        window.alert("alert : invalid registration");
        console.log("alert : invalid regitration");
    }
    else{
        window.alert("successful center registration");
        console.log("successful center regitration"); 
        //history.push("/login");
    }*/
 

    return (
      <div className="vcenter">
          <Navbar/>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Register as a Vaccination Center </h1>
        <h6  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Note : carefully read the SOP guidelines to be a vaccination center before registration</h6>
        <p class="s"  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>click here</p>

        <div class="container">
        <div className="form-group">
        
        <div method="POST" className="form-group">
        <Form.Control type="text" name = "centerName" placeholder="Enter the center name" 
        value={vcenter.centerName}
        onChange={handleInputs}
        />
        <br />
        <Form.Control type="text"name = "city" placeholder="Enter City " 
          value={vcenter.city}
          onChange={handleInputs}
        />
        <br />
        <Form.Control type="text"name = "address" placeholder="Enter address"
         value={vcenter.address}
         onChange={handleInputs}
        />
        <br />
        <Form.Control type="text"name = "numberOfRooms" placeholder="Number of Rooms "
         value={vcenter.numberOfRooms}
         onChange={handleInputs}
        />
        <br />
        <Form.Control type="text"name = "numberOfVolunteers" placeholder="Number of Volunteers "
         value={vcenter.numberOfVolunteers}
         onChange={handleInputs}
        />
        <br />
        <Form.Control type="text"name = "contact" placeholder="Enter the Contact no."
         value={vcenter.contact}
         onChange={handleInputs}
        />
        <br />
        <Form.Control type="text" name = "nearestHospitalDistance"placeholder="Nearest Hospital distance"
         value={vcenter.nearestHospitalDistance}
         onChange={handleInputs}
        />
        <br/>

        <button value="register" onClick={PostData} type="submit" class="btn btn-primary">Register</button>
              
        </div>
        </div>
        
      </div>
       <Footer/>
      </div>
    );
}

export default CenterRegister

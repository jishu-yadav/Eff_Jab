import React,{useState} from 'react'
import './community.css'
import { FormControl,Button,Form,Row,Col } from 'react-bootstrap';

const Community=()=>{

    const [data,setData]= useState({
        typeofOrg:"",State:"",City:"",Locality:"",above45:"",below45:"",disability:"",timeSlot:"",phone:""
    })
    let name,value
    const handleInput=(e)=>{
        console.log(e);
        name = e.target.name
        value = e.target.value

        setData({...data,[name]:value})
        console.log(value)
        
    }
    console.log(data)

    const postData=async(e)=>{
         const { typeofOrg,State,City,Locality,above45,below45,disability,timeSlot,phone}=data
         e.preventDefault()
         const res= await fetch('/Register',{
             method:'POST',
             headers:{
                "Content-Type":"application/json"
             },
             body:JSON.stringify({
                typeofOrg,State,City,Locality,above45,below45,disability,timeSlot,phone
             })
         }).then((res)=>{
             console.log(res)

             res.json().then((resp)=>{
                console.warn(resp)
                
        
              })
         })
    }

    return(
        <div class='container'>
            <div>
                <h1>Book Appointment for community vaccination drive</h1>
                <div>
                    
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Label>Type of Organistation </Form.Label> <br/>
                        <Form.Check
                            inline
                            label="Office"
                            name='typeofOrg'
                            value='Office'
                            type='radio'
                            id={`inline-radio-1`}
                            onClick={handleInput}
                        />
                        <Form.Check
                            inline
                            label="Housing Society"
                            name='typeofOrg'
                            type='radio'
                            value="Housing Society"
                            id={`inline-radio-2`}
                            onClick={handleInput}
                        />
                        <Form.Check
                            inline
                            label="education Insitiute"
                            name='typeofOrg'
                            type='radio'
                            value="education Insitiute"
                            id={`inline-radio-2`}
                            onClick={handleInput}
                        />
                       
                    </div>
                   
                </div>
                <div class='mt-4 form-group d-flex justify-content-around align-items-center'>
                    <label>Address</label>
                    <input class='form-control ml-2 ' name='State' placeholder='State' onChange={handleInput}/>
                    <input class='form-control ml-2' name='City' placeholder='City' onChange={handleInput}/>
                    <input class='form-control ml-2' name='Locality' placeholder='Locality' onChange={handleInput}/>
                </div>
                <div class='mt-4 d-flex justify-content-between align-items-center'>
                    <label>Contact no.</label>
                    <input class='form-control' name='phone' onChange={handleInput}/>
                </div> 
               
                <div class='mt-4 d-flex justify-content-between  align-items-center'>
                    <label>Members above age of 45</label>
                    <input class='form-control' name='above45' onChange={handleInput}/>
                </div>
                <div class='mt-4 d-flex justify-content-between  align-items-center'>
                    <label>Members below the age of 45</label>
                    <input class='form-control' name='below45' onChange={handleInput}/>
                </div>
                 <div class='mt-4 d-flex justify-content-between align-items-center'>
                    <label>Members with disability</label>
                    <input class='form-control' name='disability' onChange={handleInput}/>
                </div>  

                <div key={`inline-radio`} className="mb-3">
                        <Form.Label>Choose your time slot: </Form.Label> <br/>
                        <Form.Check
                            inline
                            label="11am-12pm"
                            value="11am-12pm"
                            name="timeSlot"
                            type='radio'
                            id={`inline-radio-1`}
                            onClick={handleInput}
                        />
                        <Form.Check
                            inline
                            label="12-1pm"
                            value="12-1pm"
                            name="timeSlot"
                            type='radio'
                            id={`inline-radio-2`}
                            onClick={handleInput}
                        />
                        <Form.Check
                            inline
                            label="1-2pm"
                            value="1-2pm"
                            name="timeSlot"
                            type='radio'
                            id={`inline-radio-2`}
                            onClick={handleInput}
                        />
                        <Form.Check
                            inline
                            label="2pm-3pm"
                            value="2pm-3pm"
                            name="timeSlot"
                            type='radio'
                            id={`inline-radio-2`}
                            onClick={handleInput}
                        />
                    </div>

                <small>Note: All members should carry their adhar card at the tme of vaccination</small>
                <div>
                <button class='btn btn-primary' onClick={postData}>Submit</button>
                </div>  
            </div>
        </div>
    );


}

export default Community
import React,{useState} from 'react'
import './community.css'


const Community=()=>{

    const [data,setData]= useState({
        typeofOrg:"",State:"",City:"",Locality:"",above45:"",below45:"",disability:"",timeSlot:"12pm-2pm",phone:""
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
                    <label>Type of organisation</label>
                    <input name='typeofOrg' onClick={handleInput} type="radio" id="html"  value="Office"/>
                    <label for="Office">Office</label>
                    <input type="radio" onClick={handleInput} id="css" name='typeofOrg' value="Housing Society"/>
                    <label for="Housing Society">Housing Society</label>
                    <input type="radio" onClick={handleInput} id="javascript" name='typeofOrg' value="Educational Institute"/>
                    <label for="Educational Institute">Educational Institute</label>
                </div>
                <div>
                    <label>Address</label>
                    <input name='State' placeholder='State' onChange={handleInput}/>
                    <input name='City' placeholder='City' onChange={handleInput}/>
                    <input name='Locality' placeholder='Locality' onChange={handleInput}/>
                </div>
                <div>
                    <label>Contact no.</label>
                    <input name='phone' onChange={handleInput}/>
                </div> 
               
                <div>
                    <label>Members above age of 45</label>
                    <input name='above45' onChange={handleInput}/>
                </div>
                <div>
                    <label>Members below the age of 45</label>
                    <input name='below45' onChange={handleInput}/>
                </div>
                 <div>
                    <label>Members with disability</label>
                    <input name='disability' onChange={handleInput}/>
                </div>  

                <div class="dropdown"  name='timeSlot'  onSelect={handleInput}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item"  >Action</a>
                            <a class="dropdown-item" name='timeSlot' >Another action</a>
                            <a class="dropdown-item" name='timeSlot'  >Something else here</a>
                        </div>
                </div>
                <small>Note: All members should carry their adhar card at the tme of vaccination</small>
                <div>
                <button onClick={postData}>Submit</button>
                </div>  
            </div>
        </div>
    );


}

export default Community
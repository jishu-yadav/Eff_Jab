import React,{useState} from 'react'
import $ from 'jquery'
import PlacesAutoComplete,{
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { FormControl,Button,Form,Row,Col } from 'react-bootstrap';
const Upvote=()=>{
     
    const [data,setData]= useState({
        name:"",State:"",City:"",Locality:"",pwdStatus:"",age:"",udid:"",adhar:""
    })

    let name,value
    const handleInput=(e)=>{
        console.log(e);
        name = e.target.name
        value = e.target.value

        setData({...data,[name]:value})
        console.log(value)
        
    }

    const [error,setError]=useState("");
    const postData=async(e)=>{
        const { name,State,City,Locality,pwdStatus,age,udid,adhar}=data
        console.log("clicked");
        
       
        if(pwdStatus==="No" || age==="No" ){
          setError("**Not eligible to upvote");
        }else if(adhar!==""){
            if(adhar.length!==12){
                setError("**wrong credentials ")
            } 
        }
        else if(udid!==""){
             if(udid.length!==18){
                 setError("**wrong credentials  ")
             }
             var pos= udid.charAt(0)
             if(pos.toLowerCase() !=pos.toUpperCase()){
                
             }else{
                setError("**wrong credentials  ")
             }
        }
        else{
          
        }
        e.preventDefault()
        const res= await fetch('/upvote',{
            method:'POST',
            headers:{
               "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,State,City,Locality,pwdStatus,age,udid,adhar
            })
        }).then((res)=>{
            console.log(res)
            alert('successful upvote')
            res.json().then((resp)=>{
               console.warn(resp)
               
       
             })
        })
   }

    const onFileChange = event => {
    
        // Update the state
        //this.setState({ selectedFile: event.target.files[0] });
        setData({...data,['file']: event.target.files[0]})
      
      };
    
    const  onFileUpload = () => {
    
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          data['file'],
          data['file'].name
        );
      
        // Details of the uploaded file
        console.log(data['file']);
        console.log(formData)
      
        // Request made to the backend api
        // Send formData object
        //axios.post("api/uploadfile", formData);
      };
      console.log(data)
    return(
        <div>
            <Navbar/>
        <div class='container'>
         {/*  <PlacesAutoComplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
           >
         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
            </PlacesAutoComplete>*/}
            <h1>Upvote for mobile vaccination van in your area</h1>
            <p>Note: This service is only for person with disability and age above 60</p>
              


            <div id='dataInvalid' class='text-danger'>{error}</div>
            <div class='mt-4 form-group d-flex justify-content-around align-items-center'>
                    <label>Address</label>
                    <input class='form-control ml-2 ' name='State' placeholder='State' onChange={handleInput}/>
                    <input class='form-control ml-2' name='City' placeholder='City' onChange={handleInput}/>
                    <input class='form-control ml-2' name='Locality' placeholder='Locality' onChange={handleInput}/>
            </div>
            <div> <label>Name</label>
                    <input class='form-control ml-2 ' name='name' placeholder='name' onChange={handleInput}/>
            </div>
            <div key={`inline-radio`} className="mb-3">
                        <Form.Label>Age above 60? </Form.Label>
                        <Form.Check
                            inline
                            label="Yes"
                            name="age"
                            type='radio'
                            value='Yes'
                            onClick={handleInput}
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="age"
                            type='radio'
                            value='No'
                            onClick={handleInput}
                            
                        />
                    </div>
                  <Form.Group className="mb-3" >
                        <Form.Label>AADHAR NO: </Form.Label>
                        <Form.Control size="lg" type="aadhar" name='adhar' onChange={handleInput}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                   
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Label>Person with disability?  </Form.Label>
                        <Form.Check
                            inline
                            label="Yes"
                            name="pwdStatus"
                            type='radio'
                            value='yes'
                            onClick={handleInput}
                           
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="pwdStatus"
                            type='radio'
                            value='No'
                            onClick={handleInput}
                            
                        />
                    </div>
                  
                   {/*<div class='d-flex'>
                        <input class='mr-4' type="file" onChange={onFileChange} />
                        <button class='btn-primary'onClick={onFileUpload}>
                        Upload!
                        </button>
        </div>*/}
                   <Form.Group className="mb-3" >
                        <Form.Label>UDID NO. </Form.Label>
                        <Form.Control size="lg" name='udid' onChange={handleInput} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                   </Form.Group>
                    
            <div class='mt-4'>
                <button class='btn-primary btn' onClick={postData}>Upvote</button>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Upvote
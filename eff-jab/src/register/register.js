import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer' 
import './register.css'
import { FormControl,Button,Form,Row,Col } from 'react-bootstrap';

const Register=()=>{
    return( 
            <div class='ContainerHolder'>
                <Navbar/>

                <div id="__p__vaccination_registration" >
                    <u>Vaccination Registration</u> 
                </div>

                <div class="form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>AADHAR NO: </Form.Label>
                        <Form.Control size="lg" type="aadhar" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>AADHAR card: </Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <br/>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Label>Person with disability?  </Form.Label>
                        <Form.Check
                            inline
                            label="Yes"
                            name="disability"
                            type='radio'
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="disability"
                            type='radio'
                            id={`inline-radio-2`}
                        />
                    </div>
                    <br/>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Label>Age above 45? </Form.Label>
                        <Form.Check
                            inline
                            label="Yes"
                            name="age"
                            type='radio'
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="age"
                            type='radio'
                            id={`inline-radio-2`}
                        />
                    </div>
                    <br/>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address:  </Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <br/>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City: </Form.Label>
                        <Form.Control />
                        </Form.Group>
                        <br/>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State: </Form.Label>
                        <Form.Control />
                        </Form.Group>
                        <br/>
                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip: </Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>
                    <br/>

                    <div key={`inline-radio`} className="mb-3">
                        <Form.Label>Choose your time slot: </Form.Label> <br/>
                        <Form.Check
                            inline
                            label="11am-12pm"
                            name="time1"
                            type='radio'
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            inline
                            label="12-1pm"
                            name="time2"
                            type='radio'
                            id={`inline-radio-2`}
                        />
                        <Form.Check
                            inline
                            label="1-2pm"
                            name="time3"
                            type='radio'
                            id={`inline-radio-2`}
                        />
                        <Form.Check
                            inline
                            label="2-3pm"
                            name="time4"
                            type='radio'
                            id={`inline-radio-2`}
                        />
                    </div>

                    <br/>
                    <div class="note">Note : Please bring your original document at the time of vaccination</div>
                    <br/><br/>

                    <div class="submit-button"><Button variant="primary" type="submit" size="lg">
                        Submit
                    </Button></div>
                    </Form>
                    <br/><br/>
                <Footer/>
                </div>
            </div>
    )
}

export default Register;
const express = require('express')
const router = express.Router()
require ('../db/conn');
const Community = require('../models/communityModel')


router.post('/Register',(req,res)=>{
      const {typeofOrg,State,City,Locality,above45,below45,disability,timeSlot,phone}=req.body;
      console.log(req.body)

      if(!typeofOrg|| !State  || !City || !Locality || !above45 || !below45 || !disability || !timeSlot || !phone){
        return res.status(422).json({error:"No field can be empty"});
      }
      Community.findOne({Locality:Locality}).then((exists)=>{
           if(exists){
               return res.status(422).json({error:"already registered"})
           }
           const community = new Community({typeofOrg,State,City,Locality,above45,below45,disability,timeSlot,phone})

           community.save().then(()=>{
               res.status(200).json({message:'success'})
           }).catch((err)=>res.status(500).json({message:err}))
       }).catch((err)=>console.log(err))
})

module.exports=router;

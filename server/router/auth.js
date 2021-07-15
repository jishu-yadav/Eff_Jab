const express = require('express')
const router = express.Router()
require ('../db/conn');
const Community = require('../models/communityModel')
const Vaccinationcenter = require("../models/vaccinationcenterModel")

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





router.get('/',(req,res)=>{
    res.send(`Hello world from the server router js`);
    // Vaccinationcenter.find({ })
    //   .then((data)=>{
    //       console.log(data);
    //       res.json(data);
    //   })
    //   .catch((err)=>{
    //       console.log(err);
    //   })

});
// using promises
// router.post('/register' ,  (req,res) => {
//     const { centerName , city , address , numberOfRooms , numberOfVolunteers , contact , nearestHospitalDistance } = req.body;
   
//     //Validation of form

//     if(!centerName ||  !address || !contact) {
//         return res.status(422).json({error : "Plz fill the required and necessary fields"});
//     }

//     Vaccinationcenter.findOne({centerName:centerName})
//     .then((centerNameExist)=>{
//         if(centerNameExist){
//             return res.status(422).json({error:"This center has already been registered"})
//         }
//         const  center = new  Vaccinationcenter({centerName:centerName , city:city , address :address, numberOfRooms :numberOfRooms, numberOfVolunteers:numberOfVolunteers , contact:contact , nearestHospitalDistance: nearestHospitalDistance });

    
//     center.save().then(()=>{
//         res.status(201).json({message:'center registered successfully '})
//     }).catch((err)=>res.status(500).json({error:"center Failed to register"}));
//     }).catch((err)=>{console.log(err)})

// })


router.post('/centerRegister' ,  async (req,res) => {
    const { centerName , city , address , numberOfRooms , numberOfVolunteers , contact , nearestHospitalDistance } = req.body;
   
    //Validation of form
    console.log(req.body)
    if(!centerName ||  !address || !contact) {
        return res.status(422).json({error : "Plz fill the required and necessary fields"});
    }

    try {

        const centerNameExist = await Vaccinationcenter.findOne({centerName:centerName});

        if(centerNameExist){
            return res.status(422).json({error:"This center has already been registered"})
        }

        const  center = new  Vaccinationcenter({centerName:centerName , city:city , address :address, numberOfRooms :numberOfRooms, numberOfVolunteers:numberOfVolunteers , contact:contact , nearestHospitalDistance: nearestHospitalDistance });
    
        await center.save();

        res.status(201).json({message:'center registered successfully '});

    }catch(err){
        console.log(err);
    }
  

})

module.exports  = router;

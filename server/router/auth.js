const express = require('express');
const router= express.Router();
const bodyParser = require('body-parser')

require('../db/conn');
const Vaccinationcenter = require("../models/vaccinationcenterModel")

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


router.post('/register' ,  async (req,res) => {
    const { centerName , city , address , numberOfRooms , numberOfVolunteers , contact , nearestHospitalDistance } = req.body;
   
    //Validation of form

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
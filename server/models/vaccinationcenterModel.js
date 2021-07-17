const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const vaccinationcenterSchema = new Schema({
    centerName: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true,

    },
    numberOfRooms : {
        type: Number,
        required: true
    },
    numberOfVolunteers : {
      type: Number,
      required: true
    },
    contact: {
      type: Number,
      required: true,
    
    },
    nearestHospitalDistance: {
        type: String
    }
  }, 
  {
    timestamps: true,
  });
  
  const Vaccinationcenter = mongoose.model('Vaccinationcenter',vaccinationcenterSchema);
  module.exports = Vaccinationcenter;
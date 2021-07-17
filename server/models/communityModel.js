const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const communitySchema = new Schema({
  
  typeofOrg:{
      type:String,
      requred:true,
  },
  State:{
      type:String,
      required:true,
  },
  City:{
    type:String,
    required:true,
  },
  Locality:{
    type:String,
    required:true,
  },
  above45:{
    type:Number,
    required:true,
  },
  below45:{
    type:Number,
    required:true,
  },
  disability:{
    type:Number,
    required:true,

  },
  timeSlot:{
      type:String,
      required:true,
  },
  phone: {
    type: Number,
    required: true,
    minLength: 10
  },
  
}, {
  timestamps: true,
});




const Community = mongoose.model('community',communitySchema);

module.exports = Community;
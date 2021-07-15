const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const upvoteSchema = new Schema({
  

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
  adhar:{
    type:String,
    requred:true,
},
vote:{
    type:Number,
    required:true
}
 

  
}, {
  timestamps: true,
});




const Upvote = mongoose.model('upvote',upvoteSchema);

module.exports = Upvote;
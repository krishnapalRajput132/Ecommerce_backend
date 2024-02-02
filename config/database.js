
const mongoose = require("mongoose");

const URI='mongodb+srv://Krishnapal:Krishna$108@cluster0.fn3inyt.mongodb.net/ecommerce?retryWrites=true&w=majority'

const connectDatabase=()=>{
    mongoose.connect(URI, { useNewUrlParser: false, useUnifiedTopology: false })
    .then(() => {
      console.log('MongoDB connected successfully');
      
    })
    .catch(error => {
        console.error('MongoDB connection error:', error);
        
      });
//    
}

module.exports=connectDatabase


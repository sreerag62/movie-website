import mongoose from 'mongoose';
const { Schema } = mongoose;

const imageSchema = new Schema({
  
  name: {
    type: String,
    required:true
    
  },
  Image: {
    data:Buffer,
    required:true
  }
 
});


const Image = mongoose.model('Image', ImageSchema);
export default User;
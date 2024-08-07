import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: {
    type: String,
    required:true,
    min:8
  },
  mobile: String,
  role:String,
 
});


const admin = mongoose.model('admin', adminSchema);
export default admin;
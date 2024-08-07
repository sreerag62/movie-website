import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: {
    type: String,
    required:true,
    min:8
  },
  mobile: String,
 
});


const User = mongoose.model('User', userSchema);
export default User;
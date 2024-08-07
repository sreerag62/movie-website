import mongoose from 'mongoose';
const { Schema } = mongoose;

const rateSchema = new Schema({
 rating : {type:Number,enum:[0,1,2,3,4,5],
    required:true,
 }
});


const Rate = mongoose.model('Rate', rateSchema);
export default Rate;
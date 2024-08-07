import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
 review: {
    type: String,
    min: 10,
    max:100,
    required:true
 }

 
 
});


const Review = mongoose.model('Review', reviewSchema);
export default Review;
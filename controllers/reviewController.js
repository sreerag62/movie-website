
import Review from "../models/reviewModel.js"



 const create = async(req,res)=>{
    try{
        const {review} = req.body
     return res.status(201).json({ message: "review sucessfully",newReview})
        


    } catch{
        res.status(500).send('Internal Server Error')
    }
       
        const newReview= new Review({
            review

        })
        await newReview.save()
        console.log('sucessfully');

       
}
export default create;
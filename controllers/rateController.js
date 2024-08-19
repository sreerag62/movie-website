

import Rate from "../models/rateModel.js"
import Movie from "../models/movieModel.js";



const addRate = async (req, res) => {
   try {
       const { rate } = req.body;
       const results = []
       const movieId = req.params.id; // assuming the movie id is passed in the URL
       const movie = await Movie.findById(movieId);
       if (!movie) {
           return res.status(404).json({ message: 'Movie not found' });
       }
       const userRate = new Rate({ rate });
       
       if(movie.rates){
           movie.rates.push(userRate);

       }else{
           movie.rate = [userRate];
       }
       
      
       await movie.save();
       console.log('successfully', userRate);
       res.status(200).json({ message: 'Rate added successfully!' });
   } catch (error) {
       console.log(error);
       res.status(500).send('Internal Server Error');
       //res.status(200).send((results[0].id).toString());

   }


   
}

const updateRate = async(req,res)=>{
   try{
     const {id} = req.params
     const {rating}=req.body
       const rate = await Rate.findByIdAndUpdate({id,rate},{new:true});
       res.status(200).json({message:'rating is updated successfully!',rate});
   }
   catch (err){
       res.status(500).json({message:err.message});
   }
};

export  {addRate,updateRate};
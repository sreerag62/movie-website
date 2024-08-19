
import {cloudinaryInstance} from "../config/cloudinaryConfig.js"
import Movie from '../models/movieModel.js'



const getMovie = async(req,res)=>{
    try{
        const movies = await Movie.find({})
        res.status(200).json(movies);
} catch(err){
  console.log(err);
   return res.status(500).json({message:error.message});
}
};
 const createMovie = async (req, res) => {
  try {
    console.log("hitted");
    if(!req.file) {
    return res.send("file is not visible")
    }
   // const result ={
      //public:"id",
      //url:"urlstring",
    

   // }
    //result.url
    cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
      if (err) {
        console.log(err, "error");
        return res.status(500).json({
          success: false,
          message: "Error",
        });
      }
      
      const imageUrl = result.url;
      const body = req.body;
      console.log(body, "body");

      const { title, director, rating, genre } = body;

      const findMovie = await Movie.findOne({ _id: req.params.id });

      if (!findMovie) {
        return res.send("please add movie first");
      }

      const createMovie = new Movie({
        title,
        director,
        rating,
        genre,
        image: imageUrl,
      });
      
      
      const newMovieCreated = await createMovie.save();
      if (!newMovieCreated) {
        return res.send("movie is not created");
      }
      return res.send(newMovieCreated);
    });
  } catch (error) {
    console.log("something went wrong", error);
    res.send("failed to create movie",error);
  
}};

const addMovie = async(req,res)=>{
  try{
     const {title,director,releaseyear,rating,genre}=req.body
     const movie = new Movie({title,director,releaseyear,rating,genre})
     await movie.save()
     console.log('sucessfully',movie);
     res.status(200).json({message:'Movie added successfully!'});


  } catch(error){
    console.log(error);
    
      res.status(500).send('Internal Server Error')
      
      
  }
     
      

            
          

      };

      
      console.log('sucessfully');

    

const deleteMovie = async(req,res)=>{
    try{
      const id = req.params.id
        const movie = await Movie.findByIdAndDelete(id);
        res.status(200).json({message:'Movie deleted successfully!'});
}
catch (err){
    res.status(500).json({message:err.message});
}
};
const updateMovie = async(req,res)=>{
    try{
      const {id} = req.params
      const {title}=req.body
        const movie = await Movie.findByIdAndUpdate({id,title},{new:true});
        res.status(200).json({message:'Movie updated successfully!',movie});
    }
    catch (err){
        res.status(500).json({message:err.message});
    }
};


        
  
  
  //export {getMovie,createMovie,addMovie,deleteMovie,getReview,updateMovie};
  export {getMovie,createMovie,addMovie,deleteMovie,updateMovie};
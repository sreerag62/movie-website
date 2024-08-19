
import Review from "../models/reviewModel.js"
import Movie from "../models/movieModel.js";



const addReviewadmin = async(req,res)=>{
    try{
       const {title,director,releaseyear,rating,genre,review}=req.body
       const adminReview = new Review({title,director,releaseyear,rating,genre,review})
       await review.save()
       console.log('sucessfully',review);
       res.status(200).json({message:'review added successfully!'});
  
  
    } catch(error){
      console.log(error);
      
        res.status(500).send('Internal Server Error')
        
        
    }
   
    
       
        
  
              
            
  
        };
  
        
        console.log('sucessfully');
    
    

        const addReview = async (req, res) => {
            try {
                const { review } = req.body;
                const results = []
                const movieId = req.params.id; // assuming the movie id is passed in the URL
                const movie = await Movie.findById(movieId);
                if (!movie) {
                    return res.status(404).json({ message: 'Movie not found' });
                }
                const userReview = new Review({ review });
                
                if(movie.reviews){
                    movie.reviews.push(userReview);

                }else{
                    movie.reviews = [userReview];
                }
                
               // movie.reviews.push(userReview);
                await movie.save();
                console.log('successfully', userReview);
                res.status(200).json({ message: 'Review added successfully!' });
            } catch (error) {
                console.log(error);
                res.status(500).send('Internal Server Error');
                //res.status(200).send((results[0].id).toString());

            }
        }

        const getreview = async(req,res)=>{
            try{
                const review = await Movie.find()
                res.status(200).json({message:"reviews",review})
        } catch(error){
            console.log("something error",error)
        }
    }
        
    
        
           
            
      
                  
                
      
            
  
      

       

export  {addReviewadmin,addReview,getreview};
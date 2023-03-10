//__________________________ Import or Require Module ___________________________________________

const express=require('express')
const {createBook,getBooks,getBooksById,updateBooks,deleteBook} = require('../controllers/bookController')
const userController = require("../controllers/userController")
const bookController=require('../controllers/bookController')
const reviewController = require('../Controllers/reviewController')
const {authentication,authorization}=require('../Middleware/auth')
const router=express.Router()

//__________________________ get api : for Test ___________________________________________

router.get("/test",(req,res)=>{
    return res.send({status:true,message:"This is My Group3 Project"});
})



router.post("/register",userController.createUser)
router.post("/login",userController.login)


router.post("/books",createBook)
router.get("/books",getBooks)
router.get("/books/:bookId",getBooksById)
router.put("/books/:bookId",updateBooks)
router.delete("/books/:bookId",deleteBook)

router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)

module.exports = router;
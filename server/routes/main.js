const express =require('express');
const router = express.Router();
const Quote = require('../models/Quote');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
router.get('',async(req,res)=>{


try{
    const data = await Quote.find();
    res.render('index',{data});
} catch (error){
    console.log(error);
}


});



router.get('/details/:id',async(req,res)=>{


    try{
        let slug = req.params.id;


        const data = await Quote.findById({_id: slug});
        res.render('detail',{data});
    } catch (error){
        console.log(error);
    }
    
    
    });
    


// router.get('/new-quote',(req,res)=>{
//     res.render('create');
// });
router.get('/new-quote', async (req, res) => {
    try {
  
      const data = await Quote.find();
      res.render('create');
  
    } catch (error) {
      console.log(error);
    }
  
  });


router.post('/new-quote', jsonParser,async (req, res) => {
    try {
      console.log(req.body);
      try{
        const newQuote = new Quote({
            author:req.body.author,
            quote:req.body.quote
        });
        await Quote.create(newQuote);
        res.redirect('/');
    }catch (error) {
        console.log(error);
      }
    } 
    catch (error) {
      console.log(error);
    }
  
  });

module.exports = router ;

const mongoose =require('mongoose');

const Schema = mongoose.Schema;
const QuoteSchema = new Schema({
    author:{
        type:String
    },
    quote :{
        type:String
    }
});

module.exports=mongoose.model('Quote', QuoteSchema);
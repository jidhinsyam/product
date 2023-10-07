const mongoose = require("mongoose")

const schema =mongoose.Schema
const productSchema=new schema({
    category:{type:mongoose.Types.ObjectId,ref:"category_tb"},
    Subcategory:{type:mongoose.Types.ObjectId,ref:"subcategory_tb"},
    productname:{type:String},
    type:{type:String},
    details:{type:String},
    image:{type:String}

})
const productModel=mongoose.model("product_tb",productSchema);
module.exports=productModel
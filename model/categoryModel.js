const mongoose = require("mongoose")

const schema =mongoose.Schema
const CategorySchema=new schema({
    category:{type:String}
})
const categoryModel=mongoose.model("category_tb",CategorySchema);
module.exports=categoryModel
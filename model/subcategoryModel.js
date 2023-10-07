const mongoose = require("mongoose")

const schema =mongoose.Schema
const SubcategorySchema=new schema({
    category:{type:mongoose.Types.ObjectId,ref:"category_tb"},
    Subcategory:{type:String}
})
const subcategoryModel=mongoose.model("subcategory_tb",SubcategorySchema);
module.exports=subcategoryModel
const express=require('express')
const categoryModel = require('../model/categoryModel')
const categoryRouter=express.Router()


categoryRouter.post('/',(req,res)=>{
    const category=new categoryModel({
        category:req.body.category,
    });
    category.save()
    .then((data)=>{
        res.status(200).json({
            success:true,
            erorr:false,
            message:'sended',
            data:data
        })
    }).catch((error)=>console.log(error));
});


categoryRouter.get('/view-category',async function (req,res){

    try{
       
        const category  = await categoryModel.find()
        if(category){
            return res.status(200).json({
                success: true,
                error: false,
                details: category,

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }

            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})
module.exports=categoryRouter
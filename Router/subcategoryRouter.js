const express=require('express')
const subcategoryModel = require('../model/subcategoryModel')
const subcategoryRouter=express.Router()


subcategoryRouter.post('/',(req,res)=>{
    console.log(req.body);
    const subcategory=new subcategoryModel({
        category:req.body.category,
        Subcategory:req.body.subcategory
    });
    subcategory.save()
    .then((data)=>{
        res.status(200).json({
            success:true,
            erorr:false,
            message:'sended',
            data:data
        })
    }).catch((error)=>console.log(error));
});

subcategoryRouter.get('/view-subcategory',async function (req,res){

    try{
       
        const subcategory  = await subcategoryModel.find()
        if(subcategory){
            return res.status(200).json({
                success: true,
                error: false,
                details: subcategory,

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
module.exports=subcategoryRouter
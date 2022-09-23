const models=require('../models');

class schoolcontroller
{
    static create=async(req,res)=>
    {
        const createschool=
        {
            name:req.body.name,
            class:req.body.class
        }

        const newschool=await models.school.create(createschool);
        if(newschool){
            res.status(200).json({
                message:"Successfully created school!!",
                result:newschool
            })
        }else{
            res.status(500).json({
                message:"Something went wrong!!"
            })
        }
    }
}

module.exports=schoolcontroller
const models=require('../models');
const {sport,student,school}=models

// function create(req,res)
// {
//     const createstudent=
//     {
//         name:req.body.name,
//         age:req.body.age
//     }

//     models.student.create(createstudent).then(result=>
//         {
//             res.status(200).json({
//                 message:"Successfully created student!",
//                 result:createstudent
//             })
//         }).catch(error=>
//             {
//                 res.status(500).json({
//                     message:"Something went wrong!!"
//                 })
//             })
// }

// function showall(req,res)
// {
//     models.student.findAll().then(result=>
//         {
//             res.status(200).json({
//                 message:"Successfully listout all details!!",
//                 result:result
//             })
//         }).catch(error=>
//             {
//                 res.status(500).json({
//                     message:"Something went wrong!!",
//                     error:error
//                 })
//             })
// }

// function findbyid(req,res)
// {
//     const id=req.params.id;
//     models.student.findOne({where:{id:id}}).then(result=>
//         {
//             if(result)
//             {
//                 res.status(200).json({
//                     message:"Successfully found that id details!!",
//                     result:result
//                 })
//             }else
//             {
//                 res.status(500).json({
//                     message:"Student not found!!"
//                 })     
//             }
           
            
//         }).catch(error=>{
//             res.status(500).json({
//                 message:"Something went wrong!!"
//             })
//         })
// }

// function update(req,res)
// {
//     const id=req.params.id;

//     const updatedstudent=
//     {
//         name:req.body.name,
//         age:req.body.age
//     }

//     models.student.update(updatedstudent,{where:{id:id}}).then(result=>
//         {
//             if(result)
//             {
//                 res.status(200).json({
//                     message:"successfully updated!!",
//                     result:result
//                 })
//             }else
//             {
//                 res.status(502).json({
//                     message:"Student not found!!"
//                 })
//             }
            
//         }).catch(error=>
//             {
//                 res.status(500).json({
//                     message:"Something went wrong!"
//                 })
//             })
// }


// module.exports=
// {
//     create:create,
//     showall:showall,
//     findbyid:findbyid,
//     update:update
// }

class studentcontroller
{
    static create=async(req,res)=>
    {
        const student=
        {
            name:req.body.name,
            age:req.body.age
        }

        const newstudent=await models.student.create(student);
        if(newstudent)
        {
            res.status(200).json({
                message:"Successfully created student!!",
                result:newstudent
            })
        }else{
            res.status(500).json({
                message:"Something went wrong!!"
            })
        }
    }

    static findall=async(req,res)=>
    {
        const findstudent= await models.student.findAll({
            where:{id:7},
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include:
            {
               model: sport,
               as:'comment',
               attributes:['sportgame'],
               include:
               {
                
                    model: school,
                    as:'reply',
                    attributes:['name']
                
               }
            }
            
        });
        if(findstudent)
        {
            res.status(200).json({
                message:"Successfully found!!",
                result:findstudent
            })
        }else{
            res.status(500).json({
                message:"Something went wrong!!"
            })
        }
    }

    static getbyId=async(req,res)=>
    {
        const id=req.params.id;
        const details=await models.student.findAll({
            where:{id:id},
            attributes:
            {
                exclude:['createdAt','updatedAt']
            },
            include:
            {
                model:sport,
                as:'comment',
                attributes:['sportgame'],
                include:
                {
                    model:school,
                    as:'reply',
                    attributes:['name']
                }
            }
        });
        if(details)
        {
            res.status(200).json({
                message:"Found that id details!",
                result:details
            })
        }else{
            res.status(501).json({
                message:"Something went wrong!!"
            })
        }
    }
}

module.exports=studentcontroller
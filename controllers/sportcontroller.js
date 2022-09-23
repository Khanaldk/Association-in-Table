const models=require('../models');

// function created(req,res)
// {
//     const newsport=
//     {
//         sportgame:req.body.sportgame,
//         sportid:req.body.sportid

//     }

//     models.sport.create(newsport).then(result=>
//         {
//             res.status(200).json({
//                 message:"Successfully created sports!!",
//                 result:result
//             })
//         }).catch(error=>
//             {
//                 res.status(500).json({
//                     message:"something went wrong!"
//                 })
//             })
// }

// function showall(req,res)
// {
//     models.sport.findAll().then(result=>
//         {
//             res.status(200).json({
//                 message:"Successfully showed all sports!",
//                 result:result
//             })
//         }).catch(error=>
//             {
//                 res.status(500).json({
//                     message:"Something went wrong!!"
//                 })
//             })
// }

// function findbyid(req,res)
// {
//     const id=req.params.id;
//     models.sport.findAll({where:{sportid:id}}).then(result=>
//         {
//             res.status(200).json({
//                 message:"Successfully found that id!!",
//                 result:result
//             })
//         }).catch(error=>
//             {
//                 res.status(500).json({
//                     message:"Something went wrong!!"
//                 })
//             })
// }

// module.exports=
// {
//     created:created,
//     showall:showall,
//     findbyid:findbyid
// }

class sportcontroller
{
    static create=async(req,res)=>
    {
        const sport=
        {
            sportgame:req.body.sportgame,
            sportid:req.body.sportid
        }

        const newsport=await models.sport.create(sport);
        if(newsport){
            res.status(200).json({
                message:"Successfully created sports!!",
                result:newsport
            })
        }else{
            res.status(500).json({
                message:"Something went wrong!!"
            })
        }
    }

    static find=async(req,res)=>
    {
        const findall=await models.sport.findAll();
        if(findall){
            res.status(200).json({
                message:"Found all Id!!",
                result:findall
            })
        }else{
            res.status(502).json({
                message:"Something went wrong!!"
            })
        }
    }

    static getbyId=async(req,res)=>
    {
        
        const get=await models.sport.findOne({where:{id:req.params.id}});
        if(get)
        {
            res.status(200).json({
                message:"Found that id!!",
                result:get
            })
        }else{
            res.status(500).json({
                message:"Something went wrong!!"
            })
        }
    }
}

module.exports=sportcontroller
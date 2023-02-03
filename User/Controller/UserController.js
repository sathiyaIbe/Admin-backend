import userDb from "../Models/user.model.js"

const userRegister=async(req,res)=>{     
    try{
        var userData=await  new userDb(req.body).save()
        res.status(200).json(userData)
    }catch(err){
        return res.status(400).json({error:'Internal Error'})
    }
}

const getUserDetails =async(req,res)=>{
  
      try{
          var data=await userDb.find()
          
          res.status(200).json(data)
      }catch(err){
         return res.status(400).json({error:'Internal Error'})
      }
}
    
const deleteUser=async(req,res)=>{
     const id=req.params.id
   
      try {
   
          var deleteUser=await userDb.deleteOne({_id:id});
          res.status(200).json({message:'Deleted'})
  
          
      }catch(err){
        res.status(400).json({message:"Internal Error"})
      }
}

const deleteMultipleUser=async(req,res)=>{
    

    try{
        var deleteManyUser=await userDb.deleteMany( { _id: { $in:req.body } })
        res.status(200).json({message:"Deleted"})
    }
    catch(err){
        res.status(400).json({message:"Internal Error"})
    }
}

const updateUser=async(req,res)=>{
    
    try{
        const _id=req.body._id
       const updateUser= await userDb.updateOne({_id}, {
        $set:{
            username:req.body.username,
            email:req.body.email,
            status:req.body.status
        }
       })
       if (updateUser.acknowledged){
        const data=await userDb.findById({_id})
        console.log(data)
        res.status(200).json(data)
       }
      
    }
    catch{
        res.status(400).json({message:"Internal Error"})
    }
 
}
  
const countUser=async(req, res)=>{
    try{
        var count=await userDb.count()
        var activeCount=await userDb.find({status:'active'}).count()
        var inactiveCount=count-activeCount
        const data={count,activeCount,inactiveCount}
        res.status(200).json(data)
    } catch(err){
        return res.status(400).json({error:'Internal Error'})
    }
}


  const Controller={userRegister, getUserDetails, deleteUser, deleteMultipleUser, updateUser, countUser}


  export default Controller
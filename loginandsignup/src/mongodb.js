const mongoose=require("mongoose")

mongoose.connect('mongodb+srv://717821l339:rathish123@cluster0.0573zmj.mongodb.net/login')
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('logindetails',logInSchema)

module.exports=LogInCollection
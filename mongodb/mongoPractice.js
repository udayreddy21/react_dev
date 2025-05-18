const Moongose = require('mongoose');
Moongose.connect('mongodb://localhost:27017/localdb')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Could not connect to MongoDB', err);
});

const schema = Moongose.Schema({
    name:String,
    gender:String,
    isAdult:Boolean,
    panNumber:{type:Number,required:function(){return this.isAdult}},
    profileCreatedDate:{type:Date,default:Date.now},
    profileUpdatedDate:{type:Date,default:Date.now}
})

const Profile=Moongose.model('profile',schema);

async function createProfile(obj){
    try{
    const profile= new Profile({
        name:obj.name,
        gender:obj.gender,
        isAdult:obj.isAdult,
        panNumber:obj.panNumber
    })
    return await profile.save();
}
catch(err){
    console.log(`Error occured ${err}`);
}
}

async function getProfile(name,pageNumber,pagesize){
     pageNumber=pageNumber||1;
     pagesize=pagesize||3;
     console.log(pageNumber)
    const result= await Profile
        .find(({name:name}))
        .sort({profileCreatedDate:1})
        .skip((pageNumber-1)*pagesize)
        .limit(pagesize)
        .select({name:1,gender:1,isGender:1});
        console.log(result);
}

async function updateProfile(id,obj){
const profile= await Profile.findById(id)
if(!profile){
    console.log('no profile found')
}else{
    profile.name=obj.name;
    profile.gender=obj.gender
    profile.profileUpdatedDate=Date.now()
    const update = await profile.save();
    console.log(update)
}
}
createProfile({"name":"raju","gender":"male","isAdult":true,"panNumber":2423524362})
//updateProfile('6829dc9fde65643fc59283c6',{"name":"keerthi","gender":"female"})
//getProfile();
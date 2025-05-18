const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/localdb')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Could not connect to MongoDB', err);
});

const mongoSchema = mongoose.Schema({ 
    name: { type: String, required: true },
    mobile: [{ type: String }],
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', mongoSchema);//creating a model class and colelction name will be same as model name in lower case and plural form
//const User = mongoose.model('User', mongoSchema, 'myCustomCollection'); if you dont want to use default collection name give the third parameter as the name of the collection

async function createUser(name, mobile) {    
const user = new User({    //creating a new instance of the model
    name,
    mobile
});
return user.save()
    .then((res) => {return res})
    .catch(err => console.error('Error saving user', err));
}

async function getUser() {
    try {
        const users = await User.find({ name: 'uday'})
            .select({ name: 1, mobile: 1 , _id:0}) // Select only the name and mobile fields
            .sort({ date: -1 }) // Sort by date in descending order
            .limit(10); // Limit to 10 results
        console.log('Users found:', users);
        return users;
    } catch (err) {
        console.error('Error finding users', err);
        throw err;
    }
}

// function getUser() {
//     return User.find({ name: 'keerthi' })
//         .then(users => {
//             console.log('Users found:', users);
//             return users;
//         })
//         .catch(err => {
//             console.error('Error finding users', err);
//             throw err;
//         });
// }



module.exports={
    createUser,getUser
}
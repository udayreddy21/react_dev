// to make promises more simpler async/await are introduced in js
//Async/Await is a modern way to handle asynchronous operations in JavaScript, making code easier to read and manage.
//when we are awaiting the result of this function, we are not really awaiting or blocking in a synchronous function. So in terms of the code execution, when a JavaScript engine executes this line, at this point, it's going to release our thread and make it available to the other word (?) . When the result of the getUser
//whenever you use the await operator in the function, you need to decorate that function with the async modifier.
//await can only be used inside async functions. It makes the function wait for a Promise to resolve or reject.
//async function is a function that is declared with the async keyword. It allows you to write asynchronous code in a more synchronous manner, making it easier to read and understand.
// async/await makes asynchronous code look synchronousand the code looks in a more readable and manageable way.


// getUser(1)
//     .then(user => getAllRepos(user.username))
//     .then(repos => getAllCommits(repos))
//     .then(commits => { console.log(commits) })
//     .catch(err => console.log(`It can catch any error from the above 3 promises and one catch block is fine to handle all errors: ${err}`));

async function displayCommits(){
    try{
        console.log('Start')
        const user = await getUser(1);
        const repos=await getAllRepos(user.username);
        const commits = await getAllCommits(repos);
        console.log(commits);
        console.log('End')
    }
    catch(err){
        console.log(err)
    }
}

displayCommits()



function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log(`fetched user for id ${id}`)
        resolve({id:1,username:"uday"})
    },2000);
    })
}

function getAllRepos(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const arr=[
            "one"
        ]
        console.log(`All repos fetched for username ${name}`);
        resolve(arr)
    },3000)
    })
}

function getAllCommits(repos){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const commit=[
            "commit1","commit2"
        ]
            resolve(`all commits fetched for this user repos ${commit}`)
        }, 2000);
        
    })
    
}


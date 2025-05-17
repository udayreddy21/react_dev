//callback function is a function that is passed as an argument to another function and is executed after the completion of that function
//callback function is used to handle asynchronous operations in javascript
//A callback is a function that we are going to call when the result of an asynchronous operation is ready. 

console.log('Start')
getUser(1,(data)=>{
    console.log(data)
    getAllRepos(data.username,(repos)=>{
        console.log(repos)
        getAllCommits((repos),(commits)=>{
            console.log(commits)

            //callback hell: if we have multiple callbacks, it will be difficult to read and maintain and it will be hard to debug
        })
    })
})

console.log('End')



function getUser(id,callback){
    setTimeout(()=>{
        console.log("fetched user")
        callback({id:1,username:"uday"})
    },2000);
}

function getAllRepos(name,callback){
    setTimeout(()=>{
        const arr=[
            "one","two","three"
        ]
        callback(arr)
    },3000)
}

function getAllCommits(repos,callback){
    console.log("all commits for this user")
}


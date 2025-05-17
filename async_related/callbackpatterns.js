//callback function is a function that is passed as an argument to another function and is executed after the completion of that function
//callback function is used to handle asynchronous operations in javascript
//A callback is a function that we are going to call when the result of an asynchronous operation is ready. 

console.log('Start')
getUser(1,getAllRepos)

console.log('End')


function getAllCommits(commits){
    console.log('all commits for this user')
}


function getUser(id,callback){
    setTimeout(()=>{
        console.log("fetched user")
        getAllRepos(id,getAllRepos)
    },2000);
}

function getAllRepos(name,callback){
    setTimeout(()=>{
        const arr=["one","two","three"]
        console.log(arr)
        getAllCommits((arr),getAllCommits)
    },3000)
}


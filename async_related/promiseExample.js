// callback.js callbacks modifying to promises

console.log('Start')
getUser(1)
    .then(user => getAllRepos(user.username))
    .then(repos => getAllCommits(repos))
    .then(commits => { console.log(commits) })
    .catch(err => console.log(`It can catch any error from the above 3 promises and one catch block is fine to handle all errors: ${err}`));


//below is using {} curly explicity return the value else promise chain will broke    
// getUser(1)
//     .then(user => {return getAllRepos(user.username)})
//     .then(repos => {return getAllCommits(repos);})
//     .then(commits => {console.log(commits);})
//     .catch(err => {console.log(`It can catch any error from the above 3 promises and one catch block is fine to handle all errors: ${err}`);});

console.log('End')



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


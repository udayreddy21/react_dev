const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async 1...')
        resolve(1)
    },5000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async 2...')
        resolve(2)
    },2000)
})


Promise.all([p1,p2])
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
//Promise.all is used to run multiple async operations in parallel and wait for all of them to finish successfully. If any fail, you get an error.
//will always return the results in the same order as the input promises array, regardless of which promise resolves first.


Promise.race([p1,p2])
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
//returns a promise that settles (resolves or rejects) as soon as the first promise in the array settles.


Promise.allSettled([p1,p2])
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
//waits for all promises to finish, regardless of whether they resolve or reject.
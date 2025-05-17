//a promise is an object that holds the eventual result of an asynchronous operation. Initially, it's in the pending state, when we create this promise. 
// At this point, it picks up an asynchronous operation, if it completes successfully, we say promise is resolve. So the state of this promise changes from pending, to resolved, which is also called fulfilled.
//Now if the asynchronous operation fails, the state of the promise will go from pending, to rejected. So here we use the reject function to return an error to the consumer of this promise,

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("returing data")
    },1000)
})


p
    .then((result)=>{console.log(result)})
    .catch(err=>console.log("err"));


//to resolve call back hell promises are introduced    
//Promises were introduced in JavaScript to make handling asynchronous operations easier and to avoid deeply nested callbacks (callback hell).
var timeLimit = function(fn, t) {
	return async function(...args) {
   let funcExec = fn(...args);
   let funcRej = new Promise((resolve, reject)=>{
       setTimeout(()=>{
           reject("Time Limit Exceeded");
       },t)
   })
   return Promise.race([funcExec, funcRej])
}
};
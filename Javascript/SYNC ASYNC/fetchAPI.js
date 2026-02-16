

 fetch('https://jsonplaceholder.typicode.com/todos/1')

     .then(function(rawdata){ //get the data as it is raw format

            let redabledata = rawdata.json()//convert it into json 
            return redabledata;

     })
     .then(function(redabledata){ 
        console.log(redabledata)//then print 
     })
     

//same way with arrow function
 fetch('https://jsonplaceholder.typicode.com/todos/1')

     .then((rawdata)=>rawdata.json())
     .then((data)=>{ 
        console.log(data)
     })
     
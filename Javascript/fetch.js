//asysnc code is the code that takes time to execute or depends on other inputs 
// the below example fetches the data from the API so in this case if we print the 
//resopnse without the await then will get undefined so await convert the async code to sync code
//here the line 12 is executed when all the await lines finished their execution 
//get
// async function getdata(){

//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');


//     let data = await response.json();
//     console.log(response);

// }


// getdata();



// post 

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url ='https://jsonplaceholder.typicode.com/posts';

const options = {

        method : "POST",
        body : JSON.stringify({username : 'pratik'}),
        headers : myHeaders,

};

async function getdata(){

    const resopnse = await fetch(url);

    let data = await resopnse.json();

    console.log('getdata ',data);

}


async function postData(){

        const responce =  await fetch(url,options);
        let data = await responce.json();

        console.log('post data ',data);
}




async function print(){

        postData();
        getdata();

}


print();
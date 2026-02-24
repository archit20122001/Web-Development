async function getData1() {
    // get request - async
    let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // parse json - async
    let data1 = await response1.json();
    console.log(data1);
}

getData1();
async function getData2() {
    // get request - async
    let response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
    // parse json - async
    let data2 = await response2.json();
    console.log(data2);
}
getData2();

async function getData3() {
    // get request - async
    let response3 = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    // parse json - async
    let data3 = await response3.json();
    console.log(data3);
}
getData3();

async function getData4() {
    // get request - async
    let response4 = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    // parse json - async
    let data4 = await response4.json();
    console.log(data4);
}
getData4();
// scenario
// prepare url/ api endpoint --> sync
// await // fetch api --> network call --> async
// process-data --> sync

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = 'https://jsonplaceholder.typicode.com/posts';

const options = {
    method: "POST",
    body: JSON.stringify({ username: "Archit Kumar Singh" }),
    headers: myHeaders
};

async function getData5(){
    let response5 = await fetch(url);
    let data5 = await response5.json();
    console.log("Get Data Response: ",data5);
}

async function postData(){
    let response = await fetch(url, options);
    let data = await response.json();
    console.log("Post Data response: ", data);
}

async function processData(){
    await getData5();
    await postData();
}
processData();
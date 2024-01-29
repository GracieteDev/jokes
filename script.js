const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke); //when we listen to a click event, we are going to  call the generateJoke function

generateJoke();

//USING ASYNC/AWAIT

async function generateJoke() {
    const config = {                        //creating a config object to pass in the headers
        headers: {                          //headers is the object, then we assign it to const config
            Accept: 'application/json',    //'Accept' as key and 'application/json'  as value 
        },
    }
                                                     
    const res = await fetch('https://icanhazdadjoke.com/', config)  //set a const res* =fetch
    
    const data = await res.json() //convert the response to a json object
    jokeEl.innerHTML = data.joke   //setting the innerHTML of the jokeEl to joke key  
    
    
}



/**
 * set a const res* = await fetch ( fetch has to wait for the fetch to finish)
 * fetch is a sync - so we need to wait until it finishes fetching the data
 * res(response) is an arrow function and is a promise that resolves to a json object
 * await - keyword that waits for the promise to resolve; everytime you use await inside a function you have to label that function a sync 
 *  we have the res but we need to call the res.json() to convert the response to json
 */





//USING .then()

// function generateJoke() {
//   const config = {                        //creating a config object to pass in the headers
//       headers: {
//           Accept: 'application/json',    //'Accept' is the key and 'application/json'  is  value 
//       },
//   }
//      //fetching data from the API
//   fetch('https://icanhazdadjoke.com/', config)
//   .then((res) => res.json())              //converting the response to json
//   .then((data) => {                    //logging the data to the console.
//     jokeEl.innerHTML = data.joke   //setting the innerText of the jokeEl to joke key                
//   })     
// }
   
  //Go to Inspect=>console to see the data:
 
  //Object { id: "31wHeNJB5ob", joke: "My son is studying to be a surgeon, I just hope he makes the cut.", status: 200 }; this is an example of the data we are getting from the API
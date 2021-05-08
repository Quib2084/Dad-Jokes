


let joke = document.querySelector("#joke");
let getJoke = document.querySelector("#getJoke");



const getDadJokes = async ()=>{
    try{
        const config = {headers:{Accept:'application/json'}};
        let res = await axios.get("https://icanhazdadjoke.com/",config);
        res = res.data.joke;
        joke.innerHTML = res;
        
    }
    catch{
        console.log("Sorry");
    }

}

getDadJokes();

getJoke.addEventListener("click",getDadJokes);




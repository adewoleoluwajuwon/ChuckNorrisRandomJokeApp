const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const xhr = new XMLHttpRequest();

function getRandomJoke () {

    xhr.open("GET", "https://api.chucknorris.io/jokes/random");
    
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            const value = JSON.parse(this.responseText).value;
    
            joke.innerText = value;    
        }
    };
    xhr.send();
}









jokeBtn.addEventListener('click', getRandomJoke);
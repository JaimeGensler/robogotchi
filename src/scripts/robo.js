export class Robogotchi {
    constructor(name) {
        this.name = name;
        this.energy = 100;
        this.mood = 'happy';

        this.energyLoss();
        this.checkDeath();
    }

    energyLoss() {
        setInterval( () => {
            this.energy--;
        }, 2000);
    }

    checkDeath() {
        setInterval( () => {
            if (this.energy <= 0) return true;
        }, 5);
    }

    emote(emotion) {
        return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}&tag=${emotion}&rating=PG`)
        .then(function(response) {
            if (response.status !== 200) {
                console.error(`Error in Giphy response: ${response.status}`);
                return false;
            }
            return response.json().then(function(jsonResponse) {
                return jsonResponse.data.images.original.url;
            });
        })
        .catch(function(error) {
            console.error(`Giphy Fetch Error: ${error}`);
            return false;
        });
    }

    movieTitleSearch(movieTitle){
        return fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.OMBD_KEY}`)
        .then(function(response){
            if(response.status !== 200){
                console.error(`Error in OMBD response: ${response.status}`);
                return false;
            }
            return response.json().then(function(jsonResponse){
                console.log(jsonResponse.Title);
                return jsonResponse.Title;
            });
        })
        .catch(function(error){
            console.error(`OMBD Fetch Error: ${error}`)
            return false;
        })
    }
}

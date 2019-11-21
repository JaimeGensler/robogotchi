import errorGIF from './../../assets/error.gif';
import notFound from './../../assets/coverImageNotFound.png'
import { DisplayService } from './display-service.js';

export class Robogotchi {
    constructor(name) {
        this.name = name;
        this.energy = 100;
        this.mood = 'happy';
        this.display = new DisplayService(name);

        this.emote('hello');
    }

    async emote(emotion){
        let gif;
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}&tag=${emotion}&rating=PG`);

            if(response.ok) {
                const jsonResponse = await response.json();
                gif = jsonResponse.data.images.original.url;
            }
            else {
                gif = errorGIF;
                throw new Error(response.status);
            }
        } catch (error) {
            gif = errorGIF;
            console.error(`GIPHY Fetch Error: ${error}`);
        }
        this.display.face(gif);
    }

    async movieSearch(movieTitle) {
        let movie = {};
        try {
            const response = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.OMBD_KEY}`);
            if (!response.ok) {
                throw new Error(`Error in OMBD response: ${response.status}`);
                movie.title =  'Hmm, can\'t seem to find that movie...';
            } else {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                movie.title = jsonResponse.Title;
                movie.director =  jsonResponse.Director;
                movie.actors =  jsonResponse.Actors;
                movie.genre =  jsonResponse.Genre;
                movie.year = jsonResponse.Year;
                movie.poster = (jsonResponse.Poster === 'N/A') ? notFound : jsonResponse.Poster;
                movie.rating = jsonResponse.Rated;
                movie.plot = jsonResponse.Plot;
                movie.score = (jsonResponse.Ratings[1]) ? jsonResponse.Ratings[1].Value : 'Unreviewed';
            }
        }
        catch (error) {
            throw new Error(`OMBD Fetch Error: ${error}`);
            movie.title = 'Hmm, can\'t seem to find that movie...';
        }
        this.display.displayMedia(movie);
    }
}

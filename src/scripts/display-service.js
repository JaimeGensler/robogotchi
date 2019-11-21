import $ from 'jquery';
import errorGIF from './../assets/error.gif';
import smileGIF from './../assets/smile.gif';

export class DisplayService {
    start(robo) {
        $('div#robo').prepend(`<h1>${robo.name}</h1>`);
        $('input#name').remove();
        this.updateStats(robo);
        this.showFace(robo, 'hello');
    }

    updateStats(robo) {
        $(`span#energy`).text(robo.energy);
        setInterval( () => {
            $(`span#energy`).text(robo.energy);
        }, 1000);
    }

    async showFace(robo, emotion) {
        const gifURL = await robo.emote(emotion);
        if (gifURL) {
            $('#face').attr('src', gifURL);
        } else {
            $('#face').attr('src', errorGIF);
        }
        setTimeout( () => {
            $('#face').attr('src', smileGIF);
        }, 3000);
        return true;
    }

    async displayMovieTitle(robo, title){
        const movieTitle = await robo.movieTitleSearch(title); //Uncaught TypeError
        $('#movieTitle').html(movieTitle);
    }
}

import $ from 'jquery';
import smileGIF from './../../assets/smile.gif';
import errorGIF from './../../assets/error.gif';

export class DisplayService {
    constructor(name) {
        $('div#robo').prepend(`<h1>${name}</h1>`);
        $('input#name').remove();
    }

    // updateStats(robo) {
    //     $(`span#energy`).text(robo.energy);
    //     setInterval( () => {
    //         $(`span#energy`).text(robo.energy);
    //     }, 1000);
    // }

    async face(gif) {
        $('#face').attr('src', gif);
        setTimeout( () => {
            $('#face').attr('src', smileGIF);
        }, 3000);
    }

    async displayMovieTitle(movie){
        if(movie.title){
            $('#info').show().attr('display', 'flex');
            $('#face').hide();
            $('#info').append(`<img src='${movie.poster}'>`);
            $('#info').append(``);
            $('#info').append(`<h1 id='movieTitle'> ${movie.title} </h1>`);
            $('#info').append(movie.title);
        } else {
            $('#face').attr('src', errorGIF);
            console.log('awww, shit, here we go again');
        }
        return true;
    }
}

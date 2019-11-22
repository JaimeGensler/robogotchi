import $ from 'jquery';
import smileGIF from './../../assets/smile.gif';
import errorGIF from './../../assets/error.gif';

export class DisplayService {
    constructor(name) {
        $('div#robo').prepend(`<h1 id='name'>${name}</h1>`);
        $('input#name-input').remove();
    }

    async face(gif) {
        $('#disp').hide();
        $('#face').attr('src', gif);
        setTimeout( () => {
            $('#face').attr('src', smileGIF);
        }, 4000);
        $('#face').show();
    }

    async displayMedia(movie){
        if(movie.title){
            $('#disp').show().attr('display', 'grid');
            $('#face').hide();
            $('#disp-poster img').attr('src', movie.poster);
            $('#disp-title').html(`${movie.title} <span class='year'>(${movie.year})</span>`);
            $('#disp-mediafacts p').html(`Genre: ${movie.genre} <br>
            Director: ${movie.director} <br>
            🍅: ${movie.score}`);
            $('#disp-synop p').html(movie.plot);
        } else {
            $('#face').attr('src', errorGIF);
            $('#disp-poster img').attr('src', coverImageNotFound);
        }
    }
}

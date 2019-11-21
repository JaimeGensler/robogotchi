import { Robogotchi } from './scripts/robo.js';
import { DisplayService } from './scripts/display-service.js';
import $ from 'jquery';
import './styles.css';
import staticGIF from './assets/static.gif';


$(document).ready(function () {
    $('#face').attr('src', staticGIF);
    $('#statusBar').hide();
    let display = new DisplayService();
    let robo;
    $('input#name').on('change', function () {
        robo = new Robogotchi($('input#name').val());
        display.start(robo);
        $('#statusBar').fadeIn();
    });
    $('input#searchbar').on('change', function () {
        let searchTerm = $('#searchbar').val();
        robo.movieTitleSearch(searchTerm);
        // display.displayMovieTitle(movieTitleResult);
        // $('#movieTitle').html(movieTitleResult);
        // console.log(search);
    })
});

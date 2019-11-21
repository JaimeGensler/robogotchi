import { Robogotchi } from './scripts/robo.js';
import $ from 'jquery';
import './styles.css';
import staticGIF from './../assets/static.gif';


$(document).ready(function () {
    $('#face').attr('src', staticGIF);
    $('#statusBar').hide();

    let robo;
    $('input#name').on('change', function () {
        robo = new Robogotchi($('input#name').val());
        $('#statusBar').fadeIn();
    });

    $('input#searchbar').on('change', function () {
        let searchTerm = $('#searchbar').val();
        const movieTitleResult = robo.movieTitleSearch(searchTerm);
        robo.display.MovieTitle(robo, movieTitleResult);
        $('#movieTitle').html(movieTitleResult);
    });

});

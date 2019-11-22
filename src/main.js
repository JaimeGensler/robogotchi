import { Robogotchi } from './scripts/robo.js';
import $ from 'jquery';
import './styles.css';
import staticGIF from './../assets/static.gif';


$(document).ready(function () {
    $('#face').attr('src', staticGIF);
    $('#statusBar').hide();
    $('#disp').hide();

    let robo;
    $('input#name-input').on('change', function () {
        robo = new Robogotchi($('input#name-input').val());
        $('#statusBar').fadeIn();
    });

    $('input#searchbar').on('change', function () {
        let searchTerm = $('#searchbar').val();
        robo.movieSearch(searchTerm);
        $('input#searchbar').val('');
    });
});

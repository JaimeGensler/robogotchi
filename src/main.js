import { Robogotchi } from './scripts/robo.js';
import { DisplayService } from './scripts/display-service.js';
import $ from 'jquery';
import './styles.css';
import staticGIF from './assets/static.gif';


$(document).ready(function() {
    $('#face').attr('src', staticGIF);
    let display = new DisplayService();
    let robo;
    $('input#name').on('change', function() {
        robo = new Robogotchi($('input#name').val());
        display.start(robo);
        $('#searchbar').fadeIn();
    });
    $('input#searchbar').on('change', function(){
        let searchTerm = $('#searchbar').val();
        let search = robo.movieSearch(searchTerm);
        console.log(search);
    })
});

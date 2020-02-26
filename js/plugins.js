$(document).ready(function() {
    'use strict';
    // add classes when open menu
    $('.navbar-default .navbar-toggle').click(function(){
        $(this).toggleClass('myclose');
        $('.navbar-default .navbar-collapse').toggleClass('opened');
        $('.navbar-default .overlay').toggleClass('over');
    });
    /*****/
});
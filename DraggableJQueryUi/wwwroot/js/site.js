// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {

    //Trello Clone

    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $(".portlet-toggle").on("click", function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });

    //Puzzle

    $('.cube').draggable({
        snap: '.block',
        snapMode: 'inner',
        snapTolerance: 40,
        containment: ".tetris",
        revert: false,
        zIndex: 10
    });


    $(".block").droppable();

    //Choose the right place

    $('.item').draggable({
        revert: true,
        snap: '.place',
        snapMode: 'inner',
        opacity: 0.5
    });

    $(".place").droppable({
        drop: function (event) {
            if (event.target.dataset.type === event.originalEvent.target.dataset.type) {
                event.originalEvent.target.remove();
            }
        }
    });



});
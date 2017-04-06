// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$().ready(function(){
     $('[rel="tooltip"]').tooltip();

 });

 function rotateCard(btn){
     var $card = $(btn).closest('.card-container');
     console.log($card);
     if($card.hasClass('hover')){
         $card.removeClass('hover');
     } else {
         $card.addClass('hover');
     }
 }

//

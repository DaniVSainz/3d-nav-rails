// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


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
 // $(document).ready(function(){
 //   $('#bgvid').on('ended',function(){
 //     console.log('Video has ended!');
 //     $('#fast-foward').remove();
 //     $("#bgvid").remove();
 //     $('.video-div').css({ 'background': 'url(<%= asset_path("10.jpeg") %>) no-repeat',
 //                           'background-size': 'cover'});
 //   });
 //
 //   $('#fast-foward').click(function(){
 //     $("#bgvid").remove();
 //     $('#fast-foward').remove();
 //     $('.video-div').css({ 'background': 'url(<%= asset_path("10.jpeg") %>) no-repeat',
 //                           'background-size': 'cover'});
 //   });
 // });


 $(document).ready(function() {
     console.log( "ready!" );
     // First card on click Remove the play icon, then add a faded black background(fade in setting is in css.)
     $('#cover-1').click(function(){
       $('#play-1').remove();
       $('#transparency').addClass('transparency');
       $('#transparency-header').addClass('transparency');
       $('.transparency').css({ 'background-color': 'rgba(0, 0, 0, 0.95)', 'margin':'0', 'width': '100%' });

     });
     $('#cover-2').click(function(){
       $('#play-2').remove();
       $('#transparency').addClass('transparency-2');
       $('#transparency-header').addClass('transparency-2');
       $('.transparency-2').css({ 'background-color': 'rgba(0, 0, 0, 0.95)', 'margin':'0', 'width': '100%' });
     });
     // When a user clicks the hamburger icon remove the black faded background and re add it's css properties that were removed.
     $('#hamburger-icon').click(function(){
       console.log('Hamburger Clicked')
       $('.transparency').css({ 'background-color': 'rgba(0, 0, 0, 0.0)'});
       $('.transparency-2').css({ 'background-color': 'rgba(0, 0, 0, 0.0)'});
       $('#transparency-header').css( {'width':'90%' , 'margin': '0 auto'});
       // $('#transparency').removeClass("transparency");
       // $('#transparency-header').removeClass("transparency");
     });
     // When our video ends remove the black background
     document.getElementById('card-video-1').addEventListener('ended',myHandler,false);
     function myHandler(e) {
         console.log('ended');
         $('.transparency').css({ 'background-color': 'rgba(0, 0, 0, 0)', 'margin':'0', 'width': '100%' });
         $('#transparency-header').css( {'width':'90%' , 'margin': '0 auto'});
     };
     // document.getElementById('card-video-2').addEventListener('ended',myHandler,false);
     // function myHandler(e) {
     // 		console.log('ended');
     // 		$('.transparency-2').css({ 'background-color': 'rgba(0, 0, 0, 0)', 'margin':'0', 'width': '100%' });
     // 		$('#transparency-header').css( {'width':'90%' , 'margin': '0 auto'});
     // };
 });

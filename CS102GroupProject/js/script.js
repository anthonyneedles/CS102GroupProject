// $("#slideshow > div:gt(0)").hide();
$('document').ready(function(){
  $('slider').cycle({
    fx: 'scrollHorz'
  });
});
// // setInterval(function() { 
//   $('slider').cycle({
//     fx: 'fadeOut'
// //     .fadeOut(1000)
// //     .next()
// //     .fadeIn(1000)
// //     .end()
// //     .appendTo('#slideshow');
// // // },  3000);
//   });
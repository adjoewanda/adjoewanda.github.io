$(function(){
  /*Header*/
  $("header").css("height", "85vh");

  /*Footer*/
  $("footer").css("height", "30vh");
  
  /*Main Navigation*/
  $("nav.main-menu ul").hide();

  $("#menuBtn").click( () => {
    $("nav.main-menu ul").toggle("slow");
    $("#menuTop").toggleClass("fx-overlay");
  });
      
  let position = $(window).scrollTop(); 

  $(window).scroll( () => {
    let scroll = $(window).scrollTop();
    if(scroll > position) {
      $("#menuMain").fadeOut("slow");
      $("#menuTop").css("background-color", "initial");      
    } else {
      $("#menuMain").fadeIn("slow");
      let x = ($(document).width() < 992) ? "rgba(0,0,0,.4)" : "rgba(0,0,0,.4)";
      $("#menuTop").css({"background-color": x});      
    }
    position = scroll;
  });
  

  /*================
   *== About Page ==
   *================*/

  /* Timeline */
  let x = new Date();
  let y = new Date(2020, 04, 31);
  let z = (x <= y) ? "Present" : "May 2020";
  $("#dateNow").html(z);

  /*================
   *== Extra Small ==
   *================*/

   if ($(document).width() < 600) {
    $("header").css("height", "100vh");
    let x = ($(document).width() < 992) ? "rgba(0,0,0,.8)" : "rgba(0,0,0,.4)";
    $("#menuTop").css({"background-color": x});      
   }

});


// $('.btn1').click(function(){
//     $('.p1').toggleClass("d-none d-block")
// })
// $('.btn2').click(function(){
//     $('.p2').toggleClass("d-none d-block")
// })
// $('.btn3').click(function(){
//     $('.p3').toggleClass("d-none d-block")
// })

$(document).ready(function(){
    $(".btn").click(function(){
      $(".p").each(function(){
          $(this).toggle();      
      });
    });
  });
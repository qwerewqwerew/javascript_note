/*
addEventListener("load",function(){
  var bt=document.querySelector("h1").nextElementSibling;*/
/* 
  bt.onclick=function(){
     //document.querySelector("h1").className="red";
    //document.querySelector("h1").classList.remove('orange','class');
    document.querySelector("h1").classList.toggle('toggle');
    document.querySelector("h1").classList.replace('orange','red');
  }
  document.querySelector("h1").classList.add('bg-orage','orange','class');

 
  document.querySelector("h1").nextElementSibling.classList.add("red");
  document.querySelector("h1").nextElementSibling.nextElementSibling.classList.add("orange");
  document.querySelector("h1").nextElementSibling.nextElementSibling.nextElementSibling.classList.add("bg-orange","white","red");
}) */

$(function(){
  var bt=$("h1").next().next().next();
  bt.click(function(){//true false
    if($(this).hasClass("red")){  //클래스가 있는지 검사
      $(this).removeClass("bg-orange")
    }
    $("h1").toggleClass("bg-orange"); //클래스토글
  })
  $("h1").addClass("red");//클래스 추가
  $("h1").removeClass("red");//클래스삭제
  $("h1").next().addClass("red");
  $("h1").next().next().addClass("orange");
  $("h1").next().next().next().addClass("bg-orange white red");
})

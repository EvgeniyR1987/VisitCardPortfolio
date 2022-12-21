/*Full screen image*/
$(window).resize(function(event) {
  mainblock();
});
function mainblock(){
  var h=$(window).outerHeight();
      $('.mainblock').css('min-height',h);
}
      mainblock();
/*Gallery image*/
const gallery = baguetteBox.run('.gallery', {
});
/*Filter image*/
$('.filter__item').click(function(event) {
  var i=$(this).data('filter');
  if (i==1) {
    $('.portfolio__column').show();
  }else{
    $('.portfolio__column').hide();
    $('.portfolio__column.f_'+i).show();
  }
  $('.filter__item').removeClass('active');
  $(this).addClass('active');
  return false;
});
/*Parallax image*/
$(window).scroll(function(event) {
  var s=0-$(this).scrollTop()/3;
  $('.mainblock__image').css('transform', 'translate3d(0, '+s+'px, 0)');
});
/*Scroll down slow*/
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});
/*Form send*/
"use strict"
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);
  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);
    if (error===0) {
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData
    });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert("Ошибка");
      }
    } else {
      alert("Заполните обязательные поля*");
    }
  }
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});

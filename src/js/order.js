'use strict'




function checkInput() {
  var orderForm = document.forms[0];
  var inputFirstName = orderForm.elements['first-name'];
  var inputSurname = orderForm.elements.surname;
  var writeBtn = document.querySelector('.push-order');
  var inputPhone = orderForm.elements.phone;
  // var inputEmail = orderForm.elements.email;

  
  
  writeBtn.addEventListener('click', function(evt){
    var inputPhoneValue = inputPhone.value.split('');
    // var inputEmailValue = inputEmail.value.split('')
    var arrValue = [];
    var firstNum = [];
    // var inputEmailCheck;
    

     for(var i = 0; i < inputPhoneValue.length; i++ ) {
      if(!isNaN(parseFloat(inputPhoneValue[i])) && isFinite(inputPhoneValue[i])) {
         arrValue.push(inputPhoneValue[i])
      }
    }
    for(var j = 0; j < 3; j++) {
      firstNum.push(arrValue[j]);
    };
    if(checkInputValue(inputFirstName.value)) {
      evt.preventDefault();
      inputFirstName.style.borderColor='red';
      customAlert('Вы не ввели Имя!');
      setTimeout(function(){
        inputFirstName.removeAttribute('style');
        var altModal = document.querySelector('.alert-modal');
        document.body.removeChild(altModal);
      },1500); 
      return;
    }else if(checkInputValue(inputSurname.value)) {
      evt.preventDefault();
      inputSurname.style.borderColor='red';
      customAlert('Вы не ввели Фамилию!');
      setTimeout(function(){
        inputSurname.removeAttribute('style');
        var altModal = document.querySelector('.alert-modal');
        document.body.removeChild(altModal);
      },1500); 
      return;
    }else if(firstNum.join('') !== '375') {
      evt.preventDefault();
      inputPhone.style.borderColor='red';
      customAlert('Номер должен начинаться с "+375"');
      setTimeout(function(){
        inputPhone.removeAttribute('style');
        var altModal = document.querySelector('.alert-modal');
        document.body.removeChild(altModal);
      },1500);
      return;
    } else if(arrValue.length < 12) {
      evt.preventDefault();
      inputPhone.style.borderColor='red';
      customAlert('Номер слишком короткий!');
      setTimeout(function(){
        inputPhone.removeAttribute('style');
        var altModal = document.querySelector('.alert-modal');
        document.body.removeChild(altModal);
      },1500);
      return;
    }else if(arrValue.length > 12) {
      evt.preventDefault();
      inputPhone.style.borderColor='red';
      customAlert('Перебор! Слишком длинный номер.');
      setTimeout(function(){
        inputPhone.removeAttribute('style');
        var altModal = document.querySelector('.alert-modal');
        document.body.removeChild(altModal);
      },1500);
      return;
    }
    // for(var k = 0; k < inputEmailValue.length; k++) {
    //   if (inputEmailValue[k] == '@') {
    //     inputEmailCheck = inputEmailValue[k];
    //   }
    // }
    // if(inputEmailCheck !== '@') {
    //   evt.preventDefault();
    //   inputEmail.style.borderColor='red';
    //   customAlert('Не правильно указан email');
    //   setTimeout(function(){
    //     inputEmail.removeAttribute('style');
    //     var altModal = document.querySelector('.alert-modal');
    //     document.body.removeChild(altModal);
    //   },1500);
    //   return;
    // }
  
  function checkInputValue(n) {
    if(n == '' || n == ' ') {
      return true;
    }
  }
  
  
});
}
checkInput();

function customAlert(text) {
  var alt = document.createElement('div');
  alt.setAttribute('class', 'alert-modal');
  alt.style.position='fixed';
  alt.style.width='250px';
  alt.style.minHeight='100px';
  alt.style.boxShadow='0px 0px 2px 2px #cecece';
  alt.style.top='50%';
  alt.style.left='50%';
  alt.style.marginTop='-50px';
  alt.style.marginLeft='-135px'
  alt.style.backgroundColor='#ffffff';
  alt.style.textAlign='center';
  alt.style.zIndex='60';
  alt.style.padding='10px';
  var altText = document.createElement('p');
  altText.style.color='red';
  altText.textContent=text;
  alt.appendChild(altText);
  document.body.appendChild(alt);
}



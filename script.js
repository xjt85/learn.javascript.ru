var output = document.getElementById('div-output');

function xjtonchange() {
   var chbox = document.getElementById('xjt-checkbox')

   if (chbox.checked) {
      output.innerText = 'Чекбокс отмечен!';
   } else {
      output.innerText = 'Чекбокс не отмечен!';
   }
};

function xjtradio_onchange() {
   var radio = document.getElementsByName('radio1'); //Здесь получается массив!!!

   for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
         output.innerText = 'Выбран вариант: ' + i;
      }

   }
}
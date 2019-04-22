/*
 html, css, 자바스크립트가 돌아가는 방법을 알아보자면
 html이 실행된다> 각 엘리먼트와 클래스에 맞는 css가 입혀진다> html을 동적으로 꾸며주는 자바스크립트가 입혀진다
 즉 자바스크립트는 html이 먼저 읽히고 실행되어야 하는것
 그래서 html안에 스크립트문이 있으면 야바이 한것, html이 다 읽히기 전에 중간에 있는 자스가 읽히기 때문

 그럼 scripts을 따로 만들어서 자바스크립트를 적었다
 그리고나서 html이 읽히고 나서 자스를 실행하라는 의미로 
 *window.onload = function()* 을 쓰고 그 안에 실행하려는 함수를 적어준다
 그러면 index.html에 script를 안적어도 실행이 된다
*/
window.onload = function () {
  changeBackColor();
}


//html에 있는 스크립트 가져옴
function changeBackColor() {
  var containers = document.getElementsByClassName("changeBackground");
  for (var i = 0; i < containers.length; i++) {
    var ths = containers[i].querySelectorAll("th");

    var thIndex = 0;
    while (thIndex < ths.length) {
      ths[thIndex].addEventListener('click', function (event) {
        if (event.target.style.backgroundColor == 'red') {
          event.target.style.backgroundColor = '';
        } else {
          event.target.style.backgroundColor = 'red';
        }
      });
      thIndex++;
    }
  }
}

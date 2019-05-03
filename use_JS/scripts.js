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
var clickedcount = new Object();
for(var i=1;i<=31;i++){
  clickedcount[i]=0;
}

window.onload = function ()
{
  changeBackColor();
  weekend();
}
/**
 * 누르면 배경색이 변한다
 * 누른 횟수가 오른쪽에 보여진다
 */
function changeBackColor() {
  var containers = document.getElementsByClassName("changeBackground");
  for (var i = 0; i < containers.length; i++) {
    var ths = containers[i].querySelectorAll("th");
    var thIndex = 0;
    while (thIndex < ths.length) {
      ths[thIndex].addEventListener('click', function (event) {
        var eventTarget = event.target;
        var textNodeContent = event.target.textContent;

        setRed(eventTarget);
        createDiv(clickedcount, textNodeContent);
      });
      thIndex++;
    }
  }
}

function setRed(eventTarget){
  var previouSetRedElement = document.querySelector('.setRed');

  if (previouSetRedElement === null) {
    eventTarget.classList.add('setRed');
  } else if (event.target.classList.value === 'setRed') {
    eventTarget.classList.remove('setRed');
  } else {
    previouSetRedElement.classList.remove('setRed');
    eventTarget.classList.add('setRed');
  }
}
/**
 * 주말인 셀을 클릭했을 때 알림창이 뜨는 메소드
 */
function weekend(){
  var containers = document.getElementsByClassName("changeBackground");
  
  for(var i=1;i<containers.length;i++){
    var Suns = containers[i].querySelector("th:nth-child(1)");
    var Sats = containers[i].querySelector("th:nth-child(7)");

    Suns.addEventListener('click', function(event){
      var x = event.target.textContent;
      alert('신나는 주말 '+x+'일입니다.');
    });  
    
    Sats.addEventListener('click', function(event){
      var x = event.target.textContent;
      alert('신나는 주말 '+x+'일입니다.');
    });
  }
  var Sat = containers[0].querySelector("th:nth-child(7)");
  Sat.addEventListener('click', function(event){
    var x = event.target.textContent;
    alert(`신나는 주말 ${x} 일입니다.`);
  });

  var ts = containers[4].querySelector("th:nth-child(3)");
  ts.addEventListener('click', function(event){
    alert('김유리 생일!');
  });  
}

function limitation10Alert(clickedcount){
  var countDiv = 0;

  for(var property in clickedcount){
    if(clickedcount[property] > 0){
      countDiv++;
    }
  }

  if(countDiv > 9){
    return true;
  }
  return false;
}

function createDiv(clickedcount, textNodeContent) {
  if (textNodeContent === '') {                   
    return;
  }

  if (usePreviousDiv(clickedcount, textNodeContent)) {
    return;
  }

  if (limitation10Alert(clickedcount)) {
    alert('날짜 클릭 랭킹 항목은 10개를 넘을 수 없습니다.');
    return;
  }

  var parentElement = document.querySelector('.rakingView');

  clickedcount[textNodeContent]++;

  var newDiv = document.createElement('div');
  var newTextnode = document.createTextNode(`클릭한 날짜${textNodeContent}의 클릭수 : ${clickedcount[textNodeContent]}`);
  newDiv.appendChild(newTextnode);

  newDiv.id = 'day' + textNodeContent;       

  parentElement.appendChild(newDiv);
}

function usePreviousDiv(clickedcount, textNodeContent) {
  var previousDiv = document.querySelector('#day'+textNodeContent);
  if (!previousDiv) {
    return false;
  }              

  clickedcount[textNodeContent]++;
  previousDiv.innerHTML = `클릭한 날짜${textNodeContent}의 클릭수 : ${clickedcount[textNodeContent]}`;

  return true;
}
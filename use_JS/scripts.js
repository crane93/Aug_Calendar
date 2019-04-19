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
window.onload = function ()
{
    changeBackColor();
    inputName();
    basicColor();
}

//html에 있는 스크립트 가져옴
function changeBackColor(){
    var containers = document.getElementsByClassName("changeBackground");
    for(var i=0; i<containers.length;i++){
        // var ths = containers[i].querySelectorAll("th");
        containers[i].addEventListener('click', function(event){
            event.target.style.backgroundColor = 'red';
            //* event.target: 이벤트가 시작된 DOM 요소 
            // https://recoveryman.tistory.com/82
        });
    }    
}

function inputName(){
    const para = document.querySelector('h1');    //h1을 선택한다
    para.addEventListener('click', updateName);   //addEvent리스너를 붙여서 h1이 선택되었을 때 업데이트네임이 실행되게 한다
    function updateName() {
      let name = prompt('Enter a new name');
      para.textContent = '8월이 생일인 ' + name;
    }
}

  //다시 클릭하면 원상태로 돌아오는 코드 
  function basicColor(){
    let para = document.querySelector('th');
    let compStyles = window.getComputedStyle(para);
    var pickedcell = document.getElementsByTagName("th");
    //var backRed = document.getElementsByTagName("th").style.backgroundColor;
    if(compStyles.getPropertyValue('backgroundColor') == 'red'){
        pickedcell.addEventListener('click', function(event){
            event.target.style.backgroundColor="blue";
        });
    }
}
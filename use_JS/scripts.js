window.onload = function ()
{
    document.getElementById('days').onclick = function () {
        this.style.backgroundColor = 'red'
    }
}

  //다시 클릭하면 원상태로 돌아오는 코드 추가

function basicColor(){
    var day = document.getElementById("days").style.backgroundColor;
    document.getElementById('days').onclick = function () {
        if(day === "red"){
            this.style.backgroundColor = 'blue'
        }
    }
}

//html에 있는 스크립트 가져옴
function changeBackColor(){
    document.querySelector('h1').style.backgroundColor = 'red';
}

function inputName(){
    const para = document.querySelector('h1');    //h1을 선택한다
    para.addEventListener('click', updateName);   //addEvent리스너를 붙여서 h1이 선택되었을 때 업데이트네임이 실행되게 한다
    function updateName() {
      let name = prompt('Enter a new name');
      para.textContent = '8월이 생일인 ' + name;
    }
}
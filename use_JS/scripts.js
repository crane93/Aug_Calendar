window.onload = function ()
{
    document.getElementById('days').onclick = function () {
        this.style.backgroundColor = 'red'
    }
}

  //다시 클릭하면 원상태로 돌아오는 코드 추가

function basicColor(){
    var day = document.getElementById("days");

    if(day.style.backgroundColor === "red"){
        day.onclick = function(){
            this.style.backgroundColor = "blue";
        }
    }
}
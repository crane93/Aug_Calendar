// 현재 1순위는ㄴ HTML 로드를 기다리는 코드가 없어서 그런거 같습니다.
// 그럼 로드를 기다려주는 코드를 적어보고 해보겠습니다.

$( document ).ready(function() {
    ChangBackColor();
    alertWeekends();
    EasterEgg();
});

var clickedcount = new Object();
for(var i=1;i<=31;i++){
  clickedcount[i]=0;
}

function ChangBackColor(){
    $(".changeBackground").on("click", 'th', function () {
        var previouSetRedElement = $('.setRed');
        var getDay = parseInt($(this).text()) || 0;
        if (previouSetRedElement === null) {
            $(this).addClass('setRed');
        } else if ($(this).attr("class") === 'setRed') {
            $(this).removeClass("setRed");
        } else {
            previouSetRedElement.removeClass('setRed');
            $(this).addClass('setRed');
        }
        CountClicked(getDay, clickedcount);
    });
}

function CountClicked(getDay, clickedcount){
    if(getDay === 0){
        return;
    }
    if(previousLine(getDay,clickedcount)){
        return;
    }
    if(limitDivUpto10(clickedcount)){
        alert("클릭하는 날짜는 10개를 넘을 수 없습니다.");
        return;
    }
    clickedcount[getDay]++;
    var r = `클릭한 날짜 ${getDay}일은 ${clickedcount[getDay]}번 눌렀습니다.`;
    $(".rakingView").append("<div id=day"+getDay+">"+r+"</div>");
}

function previousLine(getDay, clickedcount){
    console.log($("#day"+getDay+"").length);

    if($("#day"+getDay+"").length === 0){
        return false;
    }

    clickedcount[getDay]++;
    $("#day"+getDay+"").html(`클릭한 날짜 ${getDay}일은 ${clickedcount[getDay]}번 눌렀습니다.`);
    return true;
}

function limitDivUpto10(clickedcount){
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

function alertWeekends() {
    $(".changeBackground").on("click",'th:nth-child(1) , th:nth-child(7)', function(){
        var t = $(this).text();
        alert(`신나는 주말 ${t}일 입니다`);
    });
}

function EasterEgg() {
    $("#BD").on("click", function(){
        alert("김유리님 생일이다!");
    });
} 

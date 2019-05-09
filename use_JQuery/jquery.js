// 현재 1순위는ㄴ HTML 로드를 기다리는 코드가 없어서 그런거 같습니다.
// 그럼 로드를 기다려주는 코드를 적어보고 해보겠습니다.

$( document ).ready(function() {
    ChangBackColor();
    alertWeekends();
    EasterEgg();
});

function ChangBackColor(){
    $(".changeBackground").on("click", 'th', function () {
        var previouSetRedElement = $('.setRed');
        if (previouSetRedElement === null) {
            $(this).addClass('setRed');
        } else if ($(this).attr("class") === 'setRed') {
            $(this).removeClass("setRed");
        } else {
            previouSetRedElement.removeClass('setRed');
            $(this).addClass('setRed');
        }
    });
}

function alertWeekends() {
    $(".changeBackground").on("click",'th:nth-child(1) , th:nth-child(7)', function(){
        var t = $(this).text();
        alert(`신나는 주말 ${t}일 입니다`);
    });
}

// function alertSats() {
//     $(".changeBackground").on("click",'th:nth-child(7)', function(){
//         var t = $(this).text();
//         alert(`신나는 주말 ${t}일 입니다`);
//     });
// }

function EasterEgg() {
    $("#BD").on("click", function(){
        alert("김유리님 생일이다!");
    });
} 

window.onload = function () {
  createTrRows();
  changeBackColor();
}



/**
 * 요일과 날짜를 표시하는 tr들을 만들고, 부모 요소인 table Element에 추가한다.
 */
function createTrRows() {
  var dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  var days = {
    week1: ['', '', '', '', 1, 2, 3],
    week2: [4, 5, 6, 7, 8, 9, 10],
    week3: [11, 12, 13, 14, 15, 16, 17],
    week4: [18, 19, 20, 21, 22, 23, 24],
    week4: [25, 26, 27, 28, 29, 30, 31],
  }
  var table = document.querySelector('table');

  createDayNamesRow(table, dayNames);
  for (var property in days) {
    createWeekRow(table, days[property]);
  }
}

/**
 * 날짜를 표시하는 tr과 th를 만들고, 부모 요소인 table Element에 추가한다.
 *
 * @param Element var table tr Element의 부모 Element. 
 * @param array var week th Element에 적을 날짜들
 */
function createWeekRow(table, week) {
  var newTr = document.createElement('tr');
  newTr.classList.add('changeBackground');

  week.forEach(function (dayName) {
    var newTh = createTh(dayName);
    newTr.appendChild(newTh);
  });

  table.appendChild(newTr);
}

/**
 * 요일을 표시하는 tr과 th를 만들고, 부모 요소인 table Element에 추가한다.
 *
 * @param Element var table tr Element의 부모 Element. 
 * @param array var dayNames th Element에 적을 요일들
 */
function createDayNamesRow(table, dayNames) {
  var newTr = document.createElement('tr');
  dayNames.forEach(function (dayName) {
    var newTh = createTh(dayName);
    newTr.appendChild(newTh);
  });

  table.appendChild(newTr);
}

/**
 * th Element에 적어 넣을 내용으로 만든다.
 * 일요일과 토요일은 id를 붙인다.
 *
 * @param string var textNodeContent th Element에 적을 내용
 * @return Element
 */
function createTh(textNodeContent) {
  var newTh = document.createElement('th');
  var newTextnode = document.createTextNode(textNodeContent);
  newTh.appendChild(newTextnode);

  if (textNodeContent === '일') {
    newTh.id = 'Sun';
  }
  if (textNodeContent === '토') {
    newTh.id = 'Sat';
  }
  
  return newTh;
}

/**
 * 선택한 날짜만 배경색이 빨강으로 바뀌어야 함. 배경색이 빨간색인 날짜가 2개 이상 존재하지 않게함.
 */
function changeBackColor() {
  var containers = document.getElementsByClassName('changeBackground');
  for (var i = 0; i < containers.length; i++) {
    var ths = containers[i].querySelectorAll('th');

    var thIndex = 0;
    while (thIndex < ths.length) {
      ths[thIndex].addEventListener('click', function (event) {
        var previouSetRedElement = document.querySelector('.setRed');
        if (previouSetRedElement === null) {
          event.target.classList.add('setRed');
        } else if (event.target.classList.value === 'setRed') {
          event.target.classList.remove('setRed');
        } else {
          previouSetRedElement.classList.remove('setRed');
          event.target.classList.add('setRed');
        }

        showWeekendTextOnly(event.target);
      });
      thIndex++;
    }
  }
}

/**
 * 주말인지 검사하고 alert로 지정한 문구를 표시한다.
 *
 * @param Event​.target var eventTarget click한 Element
 */
function showWeekendTextOnly(eventTarget) {
  var weekend = [3, 10, 17, 31, 4, 11, 25];
  
  weekend.forEach(function (day) {
    if (parseInt(eventTarget.textContent) === day) {
      alert(`신나는 주말입니다. 클릭한 날짜는 ${day} 입니다.`);
    }
  });
}

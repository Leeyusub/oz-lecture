// 최대 타이머 제한 상수
const MAX_TIME = 10;

// 타이머 메시지용 변수
var timerMessage = "";

// 타이머 시작 함수 선언
function startTimer(seconds = 10) {
  let timerCount = seconds;

  const display = document.getElementById("timerDisplay");
  const button = document.getElementById("startTimer");

  // 버튼 비활성화
  button.disabled = true;
  display.classList.remove("error");

  // 1초마다 실행되는 타이머 설정
  const intervalId = setInterval(function () {
    if (timerCount > 0) {
      timerMessage = `타이머: ${timerCount}초`;
      display.textContent = timerMessage;
      timerCount--;
    } else {
      clearInterval(intervalId); // 타이머 정지
      display.textContent = "타이머 종료!";
      button.disabled = false; // 버튼 재활성화
    }
  }, 1000);
}

// 시작 버튼 클릭 이벤트
document.getElementById("startTimer").addEventListener("click", function () {
  const input = document.getElementById("timerInput").value;
  const display = document.getElementById("timerDisplay");
  const button = document.getElementById("startTimer");

  const seconds = Number(input);

  // 유효성 검사
  if (isNaN(seconds) || seconds < 1 || seconds > MAX_TIME) {
    display.textContent = "유효한 숫자(1-10)를 입력하세요!";
    display.classList.add("error");
    return;
  }

  startTimer(seconds); // 타이머 시작
});

// 사용자 점수 입력
let inputStr = prompt("시험 점수를 입력하세요:");
console.log(inputStr);
let input = parseInt(inputStr);
console.log(input);

// 숫자 변환
let inputScore = Number(input);
console.log;

// 입력값 유효성 검사
if (isNaN(inputScore) || inputScore < 0 || inputScore > 100) {
  alert("유효한 점수를 0~100 사이로 입력해주세요.");
} else {
  // 보너스 5점 추가 (최대 100점까지)
  let finalScore = inputScore + 5;
  if (finalScore > 100) finalScore = 100;

  // 등급 계산
  let grade = "";
  if (finalScore >= 100) {
    grade = "S";
  } else if (finalScore >= 90) {
    grade = "A";
  } else if (finalScore >= 80) {
    grade = "B";
  } else if (finalScore >= 70) {
    grade = "C";
  } else if (finalScore >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // 합격 여부
  let result = finalScore >= 60 ? "Pass" : "Fail";

  // 등급별 메시지 출력 (switch 사용)
  let message = "";
  switch (grade) {
    case "S":
      message = "Super!!";
      break;
    case "A":
      message = "Excellent work!";
      break;
    case "B":
      message = "Good job!";
      break;
    case "C":
      message = "Satisfactory performance.";
      break;
    case "D":
      message = "Needs improvement.";
      break;
    case "F":
      message = "Please try harder!";
      break;
    default:
      message = "알 수 없는 등급입니다.";
  }

  // 결과 출력
  console.log("최종 점수:", finalScore);
  console.log("등급:", grade);
  console.log("결과:", result);
  console.log("메시지:", message);
}

// 최종점수 계산
const maxScore = 100; // 최대점수
let score; // 입력점수
var grade; // 등급

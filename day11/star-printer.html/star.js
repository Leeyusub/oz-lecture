// 최대 별 개수
const maxStars = 10;

// 사용자 입력 변수
let input;

// 별 문자열을 저장할 변수
var stars = "";

// 별을 출력하는 함수 (기본값 설정 포함)
function printStars(count = 1) {
  for (let i = 0; i < count; i++) {
    stars += "*";
  }
  console.log(`[입력: ${count}] ${stars}`);
}

// 입력 유효성 검사 및 루프
while (true) {
  console.log("Enter the number of stars (1-10):");
  input = prompt("Enter the number of stars (1-10):");

  // 입력 숫자로 변환
  let num = Number(input);

  // 유효성 검사
  if (!isNaN(num) && num >= 1 && num <= maxStars) {
    printStars(num); // 별 출력
    break; // 루프 종료
  } else {
    console.log(
      `[입력: ${input}] Invalid input! Enter a number between 1 and 10.`
    );
    continue; // 재입력 유도
  }
}

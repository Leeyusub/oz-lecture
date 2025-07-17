// 도서 정보를 저장할 배열
let books = [];

// 도서 추가 함수
function addBook() {
  const titleInput = document.getElementById("title");
  const priceInput = document.getElementById("price");
  const title = titleInput.value.trim();
  const price = parseInt(priceInput.value);

  // 유효성 검사
  if (!title || isNaN(price) || price <= 0) {
    alert("올바른 제목과 가격을 입력하세요.");
    return;
  }

  const book = { title, price };
  books.push(book);

  // 도서 항목 생성
  const li = document.createElement("li");
  li.className = "book-item";

  const span = document.createElement("span");
  span.textContent = `${title} - ${price}원`;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "삭제";
  removeBtn.onclick = function () {
    removeBook(this);
  };

  li.appendChild(span);
  li.appendChild(removeBtn);
  document.getElementById("book-list").appendChild(li);

  // 입력 필드 초기화
  titleInput.value = "";
  priceInput.value = "";
}

// 도서 삭제 함수 (학생 구현)
function removeBook(button) {
  const li = button.parentElement;
  const spanText = li.querySelector("span").textContent; // 예: "책1 - 5000원"

  // 텍스트에서 제목과 가격 추출
  const [titleText, priceText] = spanText.split(" - ");
  const title = titleText.trim();
  const price = parseInt(priceText.replace("원", "").trim());

  // books 배열에서 제거
  books = books.filter(
    (book) => !(book.title === title && book.price === price)
  );

  // DOM에서 제거
  li.remove();
}

// 도서 데이터 처리 함수 (학생 구현)
function processBooks() {
  const resultsDiv = document.getElementById("results");

  // map: Book: 접두사 추가
  const mappedBooks = books.map(
    (book) => `Book: ${book.title} - ${book.price}원`
  );

  // filter: 가격이 10,000원 이상인 도서
  const expensiveBooks = books
    .filter((book) => book.price >= 10000)
    .map((book) => `Book: ${book.title} - ${book.price}원`);

  // reduce: 총 가격 계산
  const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

  // HTML 출력
  resultsDiv.innerHTML = `
    <h3>상위 가격 도서:</h3>
    <ul>${mappedBooks.map((item) => `<li>${item}</li>`).join("")}</ul>
    
    <h3>고가 도서:</h3>
    <ul>${expensiveBooks.map((item) => `<li>${item}</li>`).join("")}</ul>
    
    <h3>총 가격:</h3>
    <p>${totalPrice.toLocaleString()}원</p>
  `;
}

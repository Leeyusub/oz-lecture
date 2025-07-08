var age = 32;
let fullName = "yusub";
const email = "yusub0412@gmail.com";

let intro = "안녕하세요.\n\t개인 프로필입니다.\n";
console.log(intro);
console.log(" 이름:", fullName);
console.log(" 나이:", age);
console.log(" 이메일:", email.toString());

let hobbies = ["reading", "gaming", "coding"];
let hobbyIntro = "My hobbies: " + hobbies.join(", ");
console.log(hobbyIntro);

console.log("hobbies의 타입:", typeof hobbies);
console.log("intro의 타입:", typeof intro);

const enterBirthday = document.querySelector(".enter-dob");
const enterLuckyNumber = document.querySelector(".enter-lucky-no");
const checkBtn = document.querySelector(".check");
const output = document.querySelector(".output");

function checkBirthdayLucky() {
  const bDay = enterBirthday.value;
  const sum = sumOfDate(bDay);
  if (sum && bDay) {
    compare(sum, enterLuckyNumber.value);
  } else {
    output.innerText = "Please!! Enter valid BirthDay and Lucky Number";
  }
}
function sumOfDate(bDay) {
  bDay = bDay.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < bDay.length; index++) {
    sum = sum + Number(bDay.charAt(index));
  }
  return sum;
}
function compare(sum, enterLuckyNumber) {
  if (sum % enterLuckyNumber === 0) {
    output.innerText = "Your Birthday is Lucky 👍";
  } else {
    output.innerText = "Your Birthday is not Lucky 😣";
  }
}

checkBtn.addEventListener("click", checkBirthdayLucky);

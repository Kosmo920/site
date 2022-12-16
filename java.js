const btn = document.querySelector("#btn");
const text = document.getElementById("UserName");
const Generate = document.querySelector("#Generate");
let div = document.querySelector(".div");
let div1 = document.querySelector(".div1");
let Circle = document.querySelector("#Circle");
let Circle1 = document.querySelector("#Circle1");
let Score = document.querySelector("#Score");
let Score1 = document.querySelector("#Score1");
const res = document.querySelector("#res");

let P_Name = document.querySelector("#Name");

btn.onclick = () => {
  div1.style.display = "flex";
  div.style.display = "none";
  P_Name.innerHTML = text.value;
};
let p1 = 0;
let p2 = 0;
Generate.onclick = () => {
  let player1 = Math.round(Math.random() * 10);
  let player2 = Math.round(Math.random() * 10);
  Circle.innerHTML = player1;
  Circle1.innerHTML = player2;
  if (player1 > player2) {
    p1++;
    Score.innerHTML = p1;
  } else if (player1 < player2) {
    p2++;
    Score1.innerHTML = p2;
  }
  if (p1 == 3) {
    alert(text.value + " won");
    div1.style.display = "none";
  } else if (p2 == 3) {
    alert("Computer won");
    div1.style.display = "none";
  }
};
res.onclick = () => {
    p1=0;
    p2=0;
    Score1.innerHTML=p2;
    Score.innerHTML=p2;
    Circle.innerHTML=p1;
    Circle1.innerHTML=p2;
    div1.style.display = "flex";
  };
